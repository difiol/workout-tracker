import { create } from "zustand";
import {
  CreateWorkout,
  UpdateWorkout,
  UpdateWorkoutExercises,
  Workout,
} from "@/types/workout";
import {
  addSupabaseExercisesToWorkout,
  createSupabaseWorkout,
  getSupabaseUserWorkouts,
  removeAllSupabaseExercisesFromWorkout,
  removeSupabaseWorkout,
  updateSupabaseWorkout,
  updateSupabaseWorkouts,
} from "@/lib/supabase/requests/workouts";
import { createClient } from "@/lib/supabase/client";
import { getClientUser } from "@/utils/cookies/client";
import { WorkoutExercise } from "@/types/exercise";
import {
  createSupabaseExerciseLogs,
  deleteSupabaseExerciseLogs,
  getSupabaseDoneExercisesBySession,
} from "@/lib/supabase/requests/exercises";
import { toast } from "sonner";
import { allEqual } from "@/utils/common";

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
  updateWorkout: (workout: UpdateWorkout , options?: Options) => void;
  updateWorkouts: (workouts: UpdateWorkout[], options?: Options) => void;
  updateWorkoutExercises: (params: UpdateWorkoutExercises, options?: Options) => void;
  deleteWorkout: (id: string, options?: Options) => void;
  selectWorkout: (id: string) => void;
  loadWorkouts: () => void;
  addExerciseToDone: (exercise: WorkoutExercise, workoutId?: string) => void;
  removeExerciseFromDone: (id: string) => void;
};

const supabaseClient = createClient();

export const useWorkouts = create<WorkoutStore>()((set) => ({
  workouts: [],
  activeWorkout: null,
  done: [],
  addWorkout: async ({ name, exercises }, options) => {
    // Create the workout in the database only if it doesn't exist
    // The -1 order ensure that the workout will appear first until the user reorders it
    const workout = await createSupabaseWorkout(supabaseClient, {name, order: -1});
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
  updateWorkout: async (workout,options) => {
    if (getClientUser()) {
      const updatedWorkout = await updateSupabaseWorkout(supabaseClient, workout);
      if(!updatedWorkout){
        options?.messages?.error && toast.error(options.messages.error);
        return;
        }
        else
          options?.messages?.success && toast.success(options.messages.success);
      }
    set((state) => {
      const updatedWorkouts = state.workouts.map((existingWorkout) =>
        existingWorkout.id === workout.id ? { ...existingWorkout, ...workout } : existingWorkout
      );
      return {
        workouts: updatedWorkouts,
      };
    });
  },
  updateWorkouts: async (workouts, options) => {
    let updatedWorkouts: Workout[] = [];
    set((state) => {
      updatedWorkouts = workouts.reduce((acc: Workout[], workout, index) => {
        const existingWorkout = state.workouts.find(
          (existingWorkout) => existingWorkout.id === workout.id
        );
        if (existingWorkout) {
          acc.push({ ...existingWorkout, ...workout, order: index });
        }
        return acc;
      }, [] as Workout[]);
      
      return {
        workouts: updatedWorkouts,
      };
    });

        if (getClientUser()) {
          const updateWorkoutsRes = await updateSupabaseWorkouts(supabaseClient, updatedWorkouts);
          if (!updateWorkoutsRes) {
            options?.messages?.error && toast.error(options.messages.error);
            return;
          } else 
            options?.messages?.success && toast.success(options.messages.success);
        }
  },

  updateWorkoutExercises: async ({ workoutId, exercises },options) => {
    if (getClientUser()) {
      //Remove all workout exercises
      const removeRes = await removeAllSupabaseExercisesFromWorkout(supabaseClient, workoutId);
      //Add new workout exercises
      const addRes = await addSupabaseExercisesToWorkout(supabaseClient, {
        workoutId,
        exercises,
      });
      if (!removeRes || !addRes) {
        options?.messages?.error && toast.error(options.messages.error);
        return;
      }
      else
        options?.messages?.success && toast.success(options.messages.success);
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
      getSupabaseDoneExercisesBySession(supabaseClient),
    ]);
    set(state => ({
      workouts:
        workoutsResponse.status === "fulfilled" ? workoutsResponse.value : [],
      done: doneResponse.status === "fulfilled" ? doneResponse.value : [],
      activeWorkout:
        workoutsResponse.status === "fulfilled" ?
        (state?.activeWorkout ?
          workoutsResponse.value.find(
            (workout) => workout.id === state.activeWorkout?.id
          ): workoutsResponse?.value?.at(0)) : null,
    }));
  },
  addExerciseToDone: async (exercise, workoutId) => {
    const { id, weight, pyramidWeight, reps, pyramidReps, sets, time, pyramidTime, material, order } = exercise;
    const exerciseLog = {
      exerciseId: id,
      workoutId,
      weight,
      reps,
      sets,
      time,
      material,
      order,
      // Only add pyramid field if values are not all equal
      ...(pyramidWeight && !allEqual(pyramidWeight) && {pyramidWeight}),
      ...(pyramidReps && !allEqual(pyramidReps) && {pyramidReps}),
      ...(pyramidTime && !allEqual(pyramidTime) && {pyramidTime})
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
