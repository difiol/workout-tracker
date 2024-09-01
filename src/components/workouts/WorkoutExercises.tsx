"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Exercise, WorkoutExercise } from "@/types/exercise";
import { ExerciseItem } from "../exercises/WorkoutExerciseItem/ExerciseItem";
import { ExerciseAutocomplete } from "../elements/inputs/ExerciseAutocomplete";
import { useTranslations } from "next-intl";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "../elements/dnd/SortableItem";

type Props = {
  done: WorkoutExercise[];
  todo: WorkoutExercise[];
  setTodo: (todo: WorkoutExercise[]) => void;
  markAsDone: (exerciseLog: WorkoutExercise) => void;
  markAsUndone: (exercise: WorkoutExercise) => void;
  addExercise: (exercise: Exercise) => void;
  updateExercise: (exercise: WorkoutExercise) => void;
  removeExercise: (exercise: WorkoutExercise) => void;
  className?: string;
};

const commonSwipeElementClasses =
  "w-full h-full flex items-center text-lg font-semibold bg-opacity-90";

export function WorkoutExercises({
  done,
  todo,
  className,
  setTodo,
  addExercise,
  markAsDone,
  markAsUndone,
  updateExercise,
  removeExercise,
}: Props) {
  const t = useTranslations("Actions");
  const [active, setActive] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);

  /** Drag & Drop */
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      delay: 500,
      tolerance: 50,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 500,
      tolerance: 50,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  const removeExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(commonSwipeElementClasses, "pl-5 text-white bg-red-400")}
      >
        {t("remove-from-workout")}
      </span>
    ),
    [t]
  );
  const markDoneExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(
          commonSwipeElementClasses,
          "justify-end pr-5 text-black bg-green-300"
        )}
      >
        {t("mark-as-done")}
      </span>
    ),
    [t]
  );
  const markUndoneExerciseSwipeElement = useMemo(
    () => (
      <span
        className={cn(
          commonSwipeElementClasses,
          "pl-5 text-white bg-orange-300"
        )}
      >
        {t("mark-as-undone")}
      </span>
    ),
    [t]
  );

  const handleClick = (id: string) => {
    if (active === id) setActive("");
    else setActive(id);
  };

  const handleAddExercise = async (exercise: Exercise) => {
    setActive(exercise.id);
    addExercise(exercise);
  };

  const clearActiveExercise = () => {
    setActive("");
  };

  const handleDragStart = (event: DragStartEvent) => {
    if (!event.active) return;
    setActive("");
    setIsDragging(true);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = todo.findIndex((ex) => ex.id === active.id);
      const newIndex = todo.findIndex((ex) => ex.id === over.id);
      const resortedTodo = arrayMove(todo, oldIndex, newIndex);
      const resortedTodoWithNewOrders = resortedTodo.map((e, i) => ({
        ...e,
        order: i,
      }));
      setTodo(resortedTodoWithNewOrders);
    }
    setIsDragging(false);
  };

  return (
    <section
      className={cn(
        "w-full max-w-xl flex flex-col items-center gap-4 py-6",
        className
      )}
    >
      <DndContext
        modifiers={[restrictToVerticalAxis]}
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <SortableContext items={todo} strategy={verticalListSortingStrategy}>
          {todo.map((exercise) => {
            if (done.some((doneExercise) => doneExercise.id === exercise.id))
              return null;
            return (
              <SortableItem
                key={exercise.id}
                id={exercise.id}
                classes={{
                  dragging:
                    "opacity-80 rounded-md outline-dashed outline-2 outline-white",
                }}
              >
                <ExerciseItem
                  exercise={exercise}
                  onClick={handleClick}
                  swipeRightElement={markDoneExerciseSwipeElement}
                  onSwipeRight={markAsDone}
                  swipeLeftElement={removeExerciseSwipeElement}
                  onSwipeLeft={removeExercise}
                  updateExercise={updateExercise}
                  isActive={active === exercise.id}
                  isDragging={isDragging}
                />
              </SortableItem>
            );
          })}
        </SortableContext>
      </DndContext>
      <ExerciseAutocomplete
        onSubmit={handleAddExercise}
        onFocus={clearActiveExercise}
      />

      {done.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          swipeLeftElement={markUndoneExerciseSwipeElement}
          onSwipeLeft={markAsUndone}
          isDone
        />
      ))}
    </section>
  );
}
