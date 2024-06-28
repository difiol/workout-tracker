import { cn } from "@/lib/utils";
import { Exercise } from "@/types/exercise";
import React, { MouseEventHandler, TouchEvent, useRef, useState } from "react";
import { ExerciseDetailItem } from "./ExerciseDetailItem";
import { FaWeightHanging } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { ImAlarm } from "react-icons/im";
import { BiDumbbell } from "react-icons/bi";
import { useContentEditable } from "@/hooks/useContentEditable";
import { useTranslations } from "next-intl";

type Props = {
  exercise: Exercise;
  onClick: (id: string) => void;
  onSwipeRight: (exercise: Exercise) => void;
  onSwipeLeft: (exercise: Exercise) => void;
  updateExercise: (exercise: Exercise) => void;
  isActive?: boolean;
  isDone?: boolean;
  className?: string;
};

const offsetLimit = 390;
const triggerRange = 125;

export function ExerciseItem({
  exercise,
  onClick,
  onSwipeRight,
  onSwipeLeft,
  updateExercise,
  isActive = false,
  isDone = false,
  className,
}: Props) {
  const [touchStartX, setTouchStartX] = useState(0);
  const removeRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Exercise");

  const { id, name, weight, reps, sets, time, material } = exercise;

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick(id);
  };

  const handleUpdateValue = (key: string, value: string | number) => {
    updateExercise({ ...exercise, [key]: value });
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleMouseDown: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTouchStartX(e.screenX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const offset = e.changedTouches[0].screenX - touchStartX;

    if (offset > 0 && offset < offsetLimit) {
      doneRef.current?.style.setProperty(
        "transform",
        `translateX(${offset}px)`
      );
      removeRef.current?.style.setProperty("transform", "translateX(0)");
    }
    if (offset < 0 && offset > -offsetLimit) {
      removeRef.current?.style.setProperty(
        "transform",
        `translateX(${offset}px)`
      );
      doneRef.current?.style.setProperty("transform", "translateX(0)");
    }
  };

  const handleMouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
    const offset = e.screenX - touchStartX;
    if (e.buttons) {
      if (offset > 0 && offset < offsetLimit) {
        doneRef.current?.style.setProperty(
          "transform",
          `translateX(${offset}px)`
        );
        removeRef.current?.style.setProperty("transform", "translateX(0)");
      }
      if (offset < 0 && offset > -offsetLimit) {
        removeRef.current?.style.setProperty(
          "transform",
          `translateX(${offset}px)`
        );
        doneRef.current?.style.setProperty("transform", "translateX(0)");
      }
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const offset = touchEndX - touchStartX;

    // Swipe right
    if (offset > triggerRange) {
      onSwipeRight(exercise);
    }
    // Swipe left
    if (offset < -triggerRange) {
      onSwipeLeft(exercise);
    }

    //Reset swipe position
    removeRef.current?.style.setProperty("transform", "translateX(0)");
    doneRef.current?.style.setProperty("transform", "translateX(0)");
  };

  const handleMouseUp: MouseEventHandler<HTMLButtonElement> = (e) => {
    const offset = e.screenX - touchStartX;

    // Swipe right
    if (offset > triggerRange) {
      onSwipeRight(exercise);
    }
    // Swipe left
    if (offset < -triggerRange) {
      onSwipeLeft(exercise);
    }

    removeRef.current?.style.setProperty("transform", "translateX(0)");
    doneRef.current?.style.setProperty("transform", "translateX(0)");
  };

  return (
    <div
      className={cn(
        "relative w-full h-full flex items-stretch rounded-lg border-2 border-slate-200 bg-slate-100 shadow-lg overflow-hidden",
        "dark:bg-slate-700 dark:border-slate-600",
        isDone
          ? "bg-green-300 dark:bg-green-300 dark:bg-opacity-80"
          : "hover:bg-slate-200 transition-colors duration-200 ease-in-out",
        isActive && "border-slate-300",
        className
      )}
    >
      <div className="w-full ">
        <button
          onClick={handleOnClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="w-full p-3 text-2xl font-bold self-center"
        >
          {name}
        </button>
        {isActive && (
          <div className="grid grid-cols-3 align-top gap-6 px-2 pb-6 pt-2 md:px-8 md:pt-2">
            <ExerciseDetailItem
              name={t("weight")}
              icon={<FaWeightHanging />}
              value={weight}
              unit="kg"
              onChange={(value) => handleUpdateValue("weight", value ?? 0)}
            />
            <ExerciseDetailItem
              name="Reps"
              icon={<MdSportsMartialArts size={24} />}
              value={reps}
              onChange={(value) => handleUpdateValue("reps", value ?? 0)}
            />
            <ExerciseDetailItem
              name="Sets"
              icon={<BsArrowRepeat size={24} />}
              value={sets}
              onChange={(value) => handleUpdateValue("sets", value ?? 0)}
            />

            <ExerciseDetailItem
              name="Time"
              icon={<ImAlarm size={18} />}
              value={time}
              unit="min"
              onChange={(value) => handleUpdateValue("time", value ?? 0)}
            />
            <ExerciseDetailItem
              name="Material"
              icon={<BiDumbbell size={24} />}
              value={material}
              onChange={(value) => handleUpdateValue("material", value ?? "-")}
            />
          </div>
        )}
      </div>
      <div
        className={cn(
          "absolute w-full h-full right-full flex items-center justify-end ",
          isDone ? "bg-slate-200 dark:bg-slate-400" : "bg-green-300 text-black"
        )}
        ref={doneRef}
      >
        <span className="mr-5 text-lg">
          Mark as {isDone ? "undone" : "done"}
        </span>
      </div>
      <div
        className={cn(
          "absolute w-full h-full left-full flex items-center bg-red-400"
        )}
        ref={removeRef}
      >
        <span className="ml-5 text-white text-lg">Remove exercise</span>
      </div>
    </div>
  );
}
