import { EditableText } from "@/components/elements/inputs/EditableText";
import { createClient } from "@/lib/supabase/client";
import { updateSupabaseExercise } from "@/lib/supabase/requests/exercises";
import { cn } from "@/lib/utils";
import { Exercise, ExerciseLog, UpdateExercise } from "@/types/exercise";
import { capitalize } from "@/utils/text/capitalize";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

type Props = {
  exercise: Exercise & {
    logs: ExerciseLog[];
  };
  className?: string;
};

const client = createClient();

export function ExerciseDetails({ exercise, className }: Props) {
  const t = useTranslations("Dates");
  const { mutate: updateName } = useMutation({
    mutationFn: (data: UpdateExercise) => updateSupabaseExercise(client, data),
    onSuccess: () => {
      toast.success("Exercise updated");
    },
  });

  const handleChangeName = (name: string) => {
    updateName({ id: exercise.id, name });
  };

  return (
    <section className={cn("max-w-4xl m-auto", className)}>
      <EditableText
        classes={{
          text: "capitalize-first text-2xl font-bold",
          container: "mt-10",
        }}
        onChange={handleChangeName}
      >
        {capitalize(exercise.name)}
      </EditableText>
      <p className="text-xs dark:text-slate-300">
        {t("created-on", {
          date: new Date(exercise.createdAt).toLocaleDateString(),
        })}
      </p>
      {/* <p>{exercise.maxWeight}</p>
      <p>{exercise.lastWeight}</p>
      <p>{exercise.lastReps}</p>
      <p>{exercise.lastSets}</p>
      <p>{exercise.lastTime}</p>
      */}
    </section>
  );
}
