import { WorkoutExercise } from "@/types/exercise";
import { useTranslations } from "next-intl";
import { useWorkouts } from "@/store/useWorkouts";
import { Workout } from "@/types/workout";
import { Button } from "../elements/shadcn/button";
import { useAlert } from "@/store/useAlert";

type Props = {
  exercisesToSave: WorkoutExercise[];
  children?: React.ReactNode;
  workout: Workout | null;
};

export function UpdateWorkoutTrigger({
  children,
  exercisesToSave,
  workout,
}: Props) {
  const t = useTranslations();
  const { updateWorkoutExercises } = useWorkouts();
  const { displayAlert } = useAlert();

  const onSaveWorkout = () => {
    if (!workout) return;

    updateWorkoutExercises(
      {
        workoutId: workout.id,
        exercises: exercisesToSave,
      },
      {
        messages: {
          success: t("Success.workout-updated"),
          error: t("Errors.workout-not-updated"),
        },
      }
    );
  };

  const handleClick = () => {
    displayAlert({
      title: t("Alerts.update-workout.title"),
      description: t("Alerts.update-workout.description"),
      onConfirm: onSaveWorkout,
    });
  };

  return (
    <Button variant="outline" onClick={handleClick}>
      {children ?? t("Actions.update-workout")}
    </Button>
  );
}
