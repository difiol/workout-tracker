import { ExerciseView } from "@/components/views/ExerciseView";
import { getSupabaseExercise } from "@/lib/supabase/requests/exercises";
import { createSSRClient } from "@/lib/supabase/server";

type Props = {
  params: {
    id: string;
  };
};

export default async function Exercise({ params }: Readonly<Props>) {
  const supabaseClient = createSSRClient();
  const exercise = await getSupabaseExercise(supabaseClient, params.id);

  return (
    <main className="flex flex-col items-center justify-start">
      <ExerciseView data={exercise} />
    </main>
  );
}
