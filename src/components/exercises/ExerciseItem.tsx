import { cn } from "@/lib/utils";
import { Exercise } from "@/types/exercise";
import React, { TouchEvent, useRef, useState } from "react";

type Props = {
  id: string;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
  onClick: (id: string) => void;
  onSwipeRight: (id: Exercise) => void;
  onSwipeLeft: (id: string) => void;
  isActive?: boolean;
  isDone?: boolean;
  className?: string;
};

export function ExerciseItem({
  id,
  name,
  weight,
  reps,
  sets,
  time,
  material,
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
      console.log("Swipe to right, MARK AS DONE");
      onSwipeRight({ id, name, weight, reps, sets, time, material });
    }
    // Swipe left
    if (offset < -triggerRange) {
      console.log("Swipe to left, DELETE");
      onSwipeLeft(id);
    }

    //Reset swipe position
    removeRef.current?.style.setProperty("transform", "translateX(0)");
    doneRef.current?.style.setProperty("transform", "translateX(0)");
  };

  return (
    <button
      className={cn(
        "relative w-full h-full flex items-stretch rounded-lg bg-slate-300 overflow-hidden",
        isDone
          ? "bg-green-300"
          : "hover:bg-slate-400 transition-colors duration-200 ease-in-out",
        isActive && "border-2 border-slate-500",
        className
      )}
      onClick={() => onClick(id)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full flex flex-col gap-4 p-5">
        <h2 className="text-2xl font-bold self-center">{name}</h2>
        {isActive && (
          <>
            <span className="w-full flex justify-between">
              <p>Weight: {weight} kg</p>
              <p>Reps: {reps}</p>
              <p>Sets: {sets}</p>
            </span>
            <span className="w-full flex justify-between">
              <p>Time: {time} min</p>
              <p>Material: {material}</p>
            </span>
          </>
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
