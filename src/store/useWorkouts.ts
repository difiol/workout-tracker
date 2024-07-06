import { create } from "zustand";
import {
  CreateWorkout,
  UpdateWorkoutExercises,
  Workout,
} from "@/types/workout";
import { defaultWorkouts } from "./data/workouts";
import {
  addSupabaseExercisesToWorkout,
  createSupabaseWorkout,
  getSupabaseUserWorkouts,
  removeAllSupabaseExercisesFromWorkout,
  removeSupabaseWorkout,
} from "@/lib/supabase/requests/workouts";
import { createClient } from "@/lib/supabase/client";
import { getClientUser } from "@/utils/cookies/client";
import { WorkoutExercise } from "@/types/exercise";
import {
  createSupabaseExerciseLogs,
  deleteSupabaseExerciseLogs,
  getSupabaseDoneExercisesByDay,
} from "@/lib/supabase/requests/exercises";
import { toast } from "sonner";

interface Options {
  messages?: {
    success: string;
    error: string;
  };
}

type WorkoutStore = {
  workouts: Workout[];
  activeWorkout: Workout | null;
  done: WorkoutExercise[];
  addWorkout: (params: CreateWorkout, options?: Options) => void;
  updateWorkoutExercises: (params: UpdateWorkoutExercises) => void;
  deleteWorkout: (id: string, options?: Options) => void;
  selectWorkout: (id: string) => void;
  loadWorkouts: () => void;
  addExerciseToDone: (exercise: WorkoutExercise, workoutId?: string) => void;
  removeExerciseFromDone: (id: string) => void;
};

const supabaseClient = createClient();

export const useWorkouts = create<WorkoutStore>()((set) => ({
  workouts: defaultWorkouts,
  activeWorkout: defaultWorkouts[0],
  done: [],
  addWorkout: async ({ name, exercises }, options) => {
    //Create the workout in the database only if it doesn't exist
    const workout = await createSupabaseWorkout(supabaseClient, name);
    if (!workout) {
      options?.messages?.error && toast.error(options.messages.error);
      return;
    }
    //Add the exercises to the workout in the database
    await addSupabaseExercisesToWorkout(supabaseClient, {
      workoutId: workout?.id,
      exercises,
    });

    options?.messages?.success && toast.success(options.messages.success);

    const newWorkout = { ...workout, exercises };
    set((state) => ({
      workouts: [newWorkout, ...state.workouts],
      activeWorkout: newWorkout,
    }));
  },

  updateWorkoutExercises: async ({ workoutId, exercises }) => {
    if (getClientUser()) {
      //Remove all workout exercises
      await removeAllSupabaseExercisesFromWorkout(supabaseClient, workoutId);
      //Add new workout exercises
      await addSupabaseExercisesToWorkout(supabaseClient, {
        workoutId,
        exercises,
      });
    }

    set((state) => {
      const updatedWorkouts = state.workouts.map((workout) =>
        workout.id === workoutId ? { ...workout, exercises } : workout
      );
      return {
        workouts: updatedWorkouts,
        activeWorkout: updatedWorkouts.find(({ id }) => id === workoutId),
      };
    });
  },

  deleteWorkout: async (id, options) => {
    if (getClientUser()) await removeSupabaseWorkout(supabaseClient, id);
    set((state) => {
      const newWorkouts = state.workouts.filter(
        (existingWorkout) => existingWorkout.id !== id
      );
      return {
        workouts: newWorkouts,
        activeWorkout:
          id === state.activeWorkout?.id ? null : state.activeWorkout,
      };
    });
    options?.messages?.success && toast.success(options.messages.success);
  },

  selectWorkout: (id) =>
    set((state) => {
      const slectedWorkout = state.workouts.find(
        (workout) => workout.id === id
      );
      return {
        ...(id !== state.activeWorkout?.id && {
          activeWorkout: slectedWorkout,
          todo: slectedWorkout?.exercises ?? [],
        }),
      };
    }),
  loadWorkouts: async () => {
    if (!getClientUser()) return;
    const [workoutsResponse, doneResponse] = await Promise.allSettled([
      getSupabaseUserWorkouts(supabaseClient),
      getSupabaseDoneExercisesByDay(supabaseClient, new Date()),
    ]);
    set({
      workouts:
        workoutsResponse.status === "fulfilled" ? workoutsResponse.value : [],
      done: doneResponse.status === "fulfilled" ? doneResponse.value : [],
      activeWorkout:
        workoutsResponse.status === "fulfilled"
          ? workoutsResponse?.value?.at(0)
          : null,
    });
  },
  addExerciseToDone: async (exercise, workoutId) => {
    const exerciseLog = {
      exerciseId: exercise.id,
      workoutId,
      weight: exercise.weight,
      reps: exercise.reps,
      sets: exercise.sets,
      time: exercise.time,
      material: exercise.material,
      order: exercise.order,
    };
    let logId: string;
    if (getClientUser()) {
      const response = await createSupabaseExerciseLogs(supabaseClient, [
        exerciseLog,
      ]);
      logId = response.id;
    }
    set((state) => ({
      done: [
        ...state.done,
        {
          ...exerciseLog,
          id: exercise.id,
          name: exercise.name,
          logId,
          createdAt: exercise.createdAt,
        },
      ],
    }));
  },
  removeExerciseFromDone: async (id) => {
    set((state) => ({
      done: state.done.filter(
        (exercise) => exercise.logId !== id && exercise.id !== id
      ),
    }));
    if (getClientUser()) await deleteSupabaseExerciseLogs(supabaseClient, [id]);
  },
}));
