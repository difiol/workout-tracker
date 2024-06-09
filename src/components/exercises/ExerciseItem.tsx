import { cn } from "@/lib/utils";
import React, { MouseEventHandler, useRef, useState } from "react";

type Props = {
  id: string;
  name: string;
  weight: number;
  reps: number;
  sets: number;
  time: number;
  material: string;
  onClick: (id: string) => void;
  onSwipeRight: (id: string) => void;
  onSwipeLeft: (id: string) => void;
  isActive: boolean;
  isDone: boolean;
};

export default function Exercise({
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
}: Props) {
  const [touchStartX, setTouchStartX] = useState(0);
  const deleteRef = useRef<HTMLDivElement>(null);
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    console.log("touchStartX:", touchStartX);
    console.log(e.changedTouches[0].screenX);
    const offset = e.changedTouches[0].screenX - touchStartX;
    console.log("offset:", offset);

    if (offset < 0) {
      console.log(
        "left",
        Number(deleteRef.current?.style.left.replace("px", ""))
      );
      deleteRef.current?.style.setProperty(
        "left",
        `${(
          Number(deleteRef.current?.style.left.replace("px", "")) +
          offset / 100
        ).toFixed()}px`
      );
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const triggerRange = 100;
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX < touchEndX + triggerRange) {
      // Swipe right
      console.log("Swipe to right, MARK AS DONE");
      onSwipeRight(id);
    }
    if (touchStartX > touchEndX + triggerRange) {
      // Swipe left
      console.log("Swipe to left, DELETE");
      onSwipeLeft(id);
    }
  };

  return (
    <button
      className={cn(
        "relative w-full h-full flex items-stretch rounded-lg bg-slate-300 overflow-hidden",
        isDone
          ? "bg-green-300"
          : "hover:bg-slate-400 transition-colors duration-200 ease-in-out",
        isActive && "border-2 border-slate-500"
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
          "absolute h-full left-0",
          isDone ? "bg-slate-300" : "bg-green-300"
        )}
      >
        {isDone ? "Undo" : "Do"}
      </div>
      <div
        className={cn("absolute w-full h-full left-full bg-red-400")}
        ref={deleteRef}
      >
        Delete
      </div>
    </button>
  );
}
