import { useAlert } from "@/store/useAlert";
import { useExercises } from "@/store/useExercises";
import { useWorkouts } from "@/store/useWorkouts";
import { WorkoutExercise } from "@/types/exercise";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  exercise: WorkoutExercise;
  children: ReactNode;
  className?: string;
};

export function RemoveExerciseButton({ exercise, children, className }: Props) {
  const t = useTranslations("Alerts");
  const { deleteExercise } = useExercises();
  const { loadWorkouts } = useWorkouts();
  const { displayAlert } = useAlert();

  const handleDeleteExercise = async () => {
    /* TODO: This may be improved at some point since it will cause
     unnecessary re-renders when deleting an exercise than is not in any workout*/
    useExercises.subscribe((state, prevState) => {
      if (state.exercises.length !== prevState.exercises.length) loadWorkouts();
    });

    deleteExercise(exercise.id);
  };

  const handleClick = () => {
    displayAlert({
      onConfirm: () => {
        handleDeleteExercise();
      },
      title: t("delete-exercise.title"),
      description: t("delete-exercise.description"),
    });
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
