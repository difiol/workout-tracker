import { cn } from "@/lib/utils";
import { WorkoutExercise } from "@/types/exercise";
import React, {
  MouseEventHandler,
  ReactNode,
  TouchEvent,
  useRef,
  useState,
} from "react";
import { ExerciseDetailItem } from "./ExerciseDetailItem";
import { AddPropertyDropdown } from "./AddPropertyDropdown";
import { getLastExerciseLogs } from "@/lib/supabase/requests/exercises";
import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FaWeightHanging } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { ImAlarm } from "react-icons/im";
import { BiDumbbell } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";

type Props = {
  exercise: WorkoutExercise;
  onClick?: (id: string) => void;
  swipeRightElement?: ReactNode;
  swipeLeftElement?: ReactNode;
  onSwipeRight?: (exercise: WorkoutExercise) => void;
  onSwipeLeft?: (exercise: WorkoutExercise) => void;
  updateExercise?: (exercise: WorkoutExercise) => void;
  isActive?: boolean;
  isDone?: boolean;
  className?: string;
};

const supabase = createClient();
const offsetLimit = 390;
const triggerRange = 125;

export function ExerciseItem({
  exercise,
  onClick,
  onSwipeRight,
  swipeLeftElement,
  swipeRightElement,
  onSwipeLeft,
  updateExercise,
  isActive = false,
  isDone = false,
  className,
}: Props) {
  const pathname = usePathname();
  const [touchStartX, setTouchStartX] = useState(0);
  const removeRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const { data: lastLogs } = useQuery({
    queryKey: ["lastLogs"],
    queryFn: () => getLastExerciseLogs(supabase, exercise.id),
    enabled: isActive,
  });

  const { id, name, weight, reps, sets, time, material } = exercise;
  const hideEmptyDetails = !!(weight || reps || sets || time || material);
  const [detailsToShow, setDetailsToShow] = useState(
    hideEmptyDetails
      ? Object.entries(exercise)
          .filter(([key, value]) => value)
          .map(([key]) => key)
      : ["weight", "reps", "sets", "time", "material"]
  );

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick?.(id);
  };

  const handleUpdateValue = (key: string, value: string | number) => {
    updateExercise?.({ ...exercise, [key]: value });
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
      onSwipeRight?.(exercise);
    }
    // Swipe left
    if (offset < -triggerRange) {
      onSwipeLeft?.(exercise);
    }

    //Reset swipe position
    removeRef.current?.style.setProperty("transform", "translateX(0)");
    doneRef.current?.style.setProperty("transform", "translateX(0)");
  };

  const handleMouseUp: MouseEventHandler<HTMLButtonElement> = (e) => {
    const offset = e.screenX - touchStartX;

    // Swipe right
    if (offset > triggerRange) {
      onSwipeRight?.(exercise);
    }
    // Swipe left
    if (offset < -triggerRange) {
      onSwipeLeft?.(exercise);
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
          className="w-full p-3 text-2xl font-bold self-center capitalize-first"
        >
          {name}
        </button>
        {isActive && (
          <div>
            <div className="grid grid-cols-3 align-top gap-6 p-2 md:px-8 md:pt-2">
              <ExerciseDetailItem
                property="weight"
                icon={<FaWeightHanging />}
                value={weight}
                unit="kg"
                exerciseLogs={lastLogs}
                onChange={(value) => handleUpdateValue("weight", value ?? 0)}
                hide={!detailsToShow.includes("weight")}
              />
              <ExerciseDetailItem
                property="reps"
                icon={<MdSportsMartialArts size={24} />}
                value={reps}
                exerciseLogs={lastLogs}
                onChange={(value) => handleUpdateValue("reps", value ?? 0)}
                hide={!detailsToShow.includes("reps")}
              />
              <ExerciseDetailItem
                property="sets"
                icon={<BsArrowRepeat size={24} />}
                value={sets}
                exerciseLogs={lastLogs}
                onChange={(value) => handleUpdateValue("sets", value ?? 0)}
                hide={!detailsToShow.includes("sets")}
              />
              <ExerciseDetailItem
                property="time"
                icon={<ImAlarm size={18} />}
                value={time}
                unit="min"
                exerciseLogs={lastLogs}
                onChange={(value) => handleUpdateValue("time", value ?? 0)}
                hide={!detailsToShow.includes("time")}
              />
              <ExerciseDetailItem
                property="material"
                icon={<BiDumbbell size={24} />}
                value={material}
                exerciseLogs={lastLogs}
                onChange={(value) =>
                  handleUpdateValue("material", value ?? "-")
                }
                hide={!detailsToShow.includes("material")}
              />
            </div>
            <div
              className={cn(
                "w-full flex justify-end items-center gap-2 mt-2 pb-5 px-5 text-lg",
                {
                  hidden: !isActive,
                }
              )}
            >
              <Link href={`${pathname}/exercises/${id}`}>
                <CgDetailsMore />
              </Link>
              <AddPropertyDropdown
                displayedProperties={detailsToShow}
                onSelect={(value) =>
                  setDetailsToShow([...detailsToShow, value])
                }
              >
                <IoIosAdd />
              </AddPropertyDropdown>
            </div>
          </div>
        )}
      </div>
      <div className={cn("absolute w-full h-full right-full")} ref={doneRef}>
        {swipeRightElement}
      </div>
      <div className={cn("absolute w-full h-full left-full")} ref={removeRef}>
        {swipeLeftElement}
      </div>
    </div>
  );
}
