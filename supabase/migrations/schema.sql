SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."update_exercise"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  UPDATE exercises
  SET max_weight = greatest(coalesce(new.weight, 0), coalesce(( select max_weight from exercises where id = new.exercise_id), 0)),
  last_weight = new.weight,
  last_reps = new.reps,
  last_sets = new.sets,
  last_time = new.time
  WHERE id = new.exercise_id;
  RETURN new;
END;
$$;

ALTER FUNCTION "public"."update_exercise"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."exercise_logs" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "exercise_id" "uuid" NOT NULL,
    "workout_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "weight" real,
    "reps" smallint,
    "sets" smallint,
    "time" smallint,
    "material" "text",
    "order" smallint,
    "notes" "text",
    CONSTRAINT "exercise_logs_order_check" CHECK (("order" >= 0))
);

ALTER TABLE "public"."exercise_logs" OWNER TO "postgres";

COMMENT ON TABLE "public"."exercise_logs" IS 'Logs for each time an exercise is completed';

COMMENT ON COLUMN "public"."exercise_logs"."order" IS 'Order in which the exercise was done during the workout';

CREATE TABLE IF NOT EXISTS "public"."exercises" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text" NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "max_weight" real,
    "last_weight" real,
    "last_reps" smallint,
    "last_sets" smallint,
    "last_time" integer
);

ALTER TABLE "public"."exercises" OWNER TO "postgres";

COMMENT ON COLUMN "public"."exercises"."max_weight" IS 'Maximum weight value recorded';

COMMENT ON COLUMN "public"."exercises"."last_weight" IS 'Last weight value recorded';

CREATE TABLE IF NOT EXISTS "public"."preferences" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "theme" "text",
    "weight_unit" "text",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL
);

ALTER TABLE "public"."preferences" OWNER TO "postgres";

COMMENT ON TABLE "public"."preferences" IS 'User preferences to load when initializing the app. Such as theme, language, etc.';

CREATE TABLE IF NOT EXISTS "public"."workout_exercises" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "workout_id" "uuid" NOT NULL,
    "exercise_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "order" smallint,
    CONSTRAINT "positive_order" CHECK (("order" >= 0))
);

ALTER TABLE "public"."workout_exercises" OWNER TO "postgres";

COMMENT ON TABLE "public"."workout_exercises" IS 'All the exercises for each workout';

COMMENT ON COLUMN "public"."workout_exercises"."order" IS 'Order of the exercise to be shown inside the workout';

CREATE TABLE IF NOT EXISTS "public"."workouts" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL
);

ALTER TABLE "public"."workouts" OWNER TO "postgres";

ALTER TABLE ONLY "public"."exercise_logs"
    ADD CONSTRAINT "exercise_logs_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."exercises"
    ADD CONSTRAINT "exercises_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."preferences"
    ADD CONSTRAINT "preferences_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."preferences"
    ADD CONSTRAINT "preferences_user_id_key" UNIQUE ("user_id");

ALTER TABLE ONLY "public"."workout_exercises"
    ADD CONSTRAINT "workout_exercises_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."workouts"
    ADD CONSTRAINT "workouts_pkey" PRIMARY KEY ("id");

CREATE OR REPLACE TRIGGER "exercise_logs_insert_trigger" AFTER INSERT OR UPDATE ON "public"."exercise_logs" FOR EACH ROW EXECUTE FUNCTION "public"."update_exercise"();

ALTER TABLE ONLY "public"."exercise_logs"
    ADD CONSTRAINT "exercise_logs_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercises"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."exercise_logs"
    ADD CONSTRAINT "exercise_logs_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "public"."workouts"("id") ON UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE ONLY "public"."exercises"
    ADD CONSTRAINT "exercises_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."preferences"
    ADD CONSTRAINT "preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."workout_exercises"
    ADD CONSTRAINT "workout_exercises_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercises"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."workout_exercises"
    ADD CONSTRAINT "workout_exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "public"."workouts"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY "public"."workouts"
    ADD CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

CREATE POLICY "Enable delete for exercise owner" ON "public"."exercise_logs" FOR DELETE TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "exercises"."user_id"
   FROM "public"."exercises"
  WHERE (("exercises"."id" = "exercise_logs"."exercise_id") AND ("exercises"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable delete for users based on user_id" ON "public"."exercises" FOR DELETE TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable delete for users based on user_id" ON "public"."workouts" FOR DELETE TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable delete for workout owner" ON "public"."workout_exercises" FOR DELETE TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "workouts"."user_id"
   FROM "public"."workouts"
  WHERE (("workouts"."id" = "workout_exercises"."workout_id") AND ("workouts"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable insert for authenticated users only" ON "public"."exercises" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."preferences" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users only" ON "public"."workouts" FOR INSERT TO "authenticated" WITH CHECK (true);

CREATE POLICY "Enable insert for exercise owner" ON "public"."exercise_logs" FOR INSERT TO "authenticated" WITH CHECK ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "exercises"."user_id"
   FROM "public"."exercises"
  WHERE (("exercises"."id" = "exercise_logs"."exercise_id") AND ("exercises"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable insert for workout owner" ON "public"."workout_exercises" FOR INSERT TO "authenticated" WITH CHECK ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "workouts"."user_id"
   FROM "public"."workouts"
  WHERE (("workouts"."id" = "workout_exercises"."workout_id") AND ("workouts"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable select for exercise owner" ON "public"."exercise_logs" FOR SELECT TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "exercises"."user_id"
   FROM "public"."exercises"
  WHERE (("exercises"."id" = "exercise_logs"."exercise_id") AND ("exercises"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable select for users based on user_id" ON "public"."exercises" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable select for users based on user_id" ON "public"."workouts" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable select for workout owner" ON "public"."workout_exercises" FOR SELECT TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "workouts"."user_id"
   FROM "public"."workouts"
  WHERE (("workouts"."id" = "workout_exercises"."workout_id") AND ("workouts"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable update for exercise owner" ON "public"."exercise_logs" FOR UPDATE TO "authenticated" USING ((( SELECT "auth"."uid"() AS "uid") IN ( SELECT "exercises"."user_id"
   FROM "public"."exercises"
  WHERE (("exercises"."id" = "exercise_logs"."exercise_id") AND ("exercises"."user_id" = "auth"."uid"())))));

CREATE POLICY "Enable update for users based on user_id" ON "public"."exercises" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable update for users based on user_id" ON "public"."workouts" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable user to select its own rows " ON "public"."preferences" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));

CREATE POLICY "Enable users to update only its own row" ON "public"."preferences" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));

ALTER TABLE "public"."exercise_logs" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."exercises" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."preferences" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."workout_exercises" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."workouts" ENABLE ROW LEVEL SECURITY;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."update_exercise"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_exercise"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_exercise"() TO "service_role";

GRANT ALL ON TABLE "public"."exercise_logs" TO "anon";
GRANT ALL ON TABLE "public"."exercise_logs" TO "authenticated";
GRANT ALL ON TABLE "public"."exercise_logs" TO "service_role";

GRANT ALL ON TABLE "public"."exercises" TO "anon";
GRANT ALL ON TABLE "public"."exercises" TO "authenticated";
GRANT ALL ON TABLE "public"."exercises" TO "service_role";

GRANT ALL ON TABLE "public"."preferences" TO "anon";
GRANT ALL ON TABLE "public"."preferences" TO "authenticated";
GRANT ALL ON TABLE "public"."preferences" TO "service_role";

GRANT ALL ON TABLE "public"."workout_exercises" TO "anon";
GRANT ALL ON TABLE "public"."workout_exercises" TO "authenticated";
GRANT ALL ON TABLE "public"."workout_exercises" TO "service_role";

GRANT ALL ON TABLE "public"."workouts" TO "anon";
GRANT ALL ON TABLE "public"."workouts" TO "authenticated";
GRANT ALL ON TABLE "public"."workouts" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
