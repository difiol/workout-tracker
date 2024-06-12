import { cn } from "@/lib/utils";
import { Exercise } from "@/types/exercise";
import React, { TouchEvent, useRef, useState } from "react";
import { ExerciseDetailItem } from "./ExerciseDetailItem";
import { FaWeightHanging } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { ImAlarm } from "react-icons/im";
import { BiDumbbell } from "react-icons/bi";

type Props = {
  exercise: Exercise;
  onClick: (id: string) => void;
  onSwipeRight: (exercise: Exercise) => void;
  onSwipeLeft: (exercise: Exercise) => void;
  isActive?: boolean;
  isDone?: boolean;
  className?: string;
};

export function ExerciseItem({
  exercise,
  onClick,
  onSwipeRight,
  onSwipeLeft,
  isActive = false,
  isDone = false,
  className,
}: Props) {
  const [touchStartX, setTouchStartX] = useState(0);
  const removeRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  const { id, name, weight, reps, sets, time, material } = exercise;

  const handleOnClick = () => {
    if (!isActive) onClick(id);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const offsetLimit = 390;
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

  const handleTouchEnd = (e: React.TouchEvent) => {
    const triggerRange = 125;
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

  return (
    <button
      className={cn(
        "relative w-full h-full flex items-stretch rounded-lg border-2 border-slate-200 bg-slate-100 shadow-lg overflow-hidden",
        isDone
          ? "bg-green-300"
          : "hover:bg-slate-200 transition-colors duration-200 ease-in-out",
        isActive && "border-slate-300",
        className
      )}
      onClick={handleOnClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full p-3">
        <h2 className="text-2xl font-bold self-center">{name}</h2>
        {isActive && (
          <div className="flex flex-col gap-4 mt-4 px-2 ">
            <span className="w-full flex justify-between">
              <ExerciseDetailItem
                icon={<FaWeightHanging />}
                value={weight}
                unit="kg"
              />
              <ExerciseDetailItem
                icon={<MdSportsMartialArts size={24} />}
                value={reps}
                unit="reps"
              />
              <ExerciseDetailItem
                icon={<BsArrowRepeat size={24} />}
                value={sets}
                unit="sets"
              />
            </span>
            <span className="w-full flex gap-10">
              <ExerciseDetailItem
                icon={<ImAlarm size={18} />}
                value={time}
                unit="min"
              />
              <ExerciseDetailItem
                icon={<BiDumbbell size={24} />}
                value={material}
              />
            </span>
          </div>
        )}
      </div>
      <div
        className={cn(
          "absolute w-full h-full right-full flex items-center justify-end ",
          isDone ? "bg-slate-300" : "bg-green-300"
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
    </button>
  );
}
