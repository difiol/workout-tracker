import { cn } from "@/lib/utils";
import { WorkoutExercise } from "@/types/exercise";
import React, {
  MouseEventHandler,
  ReactNode,
  TouchEvent,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { ExerciseField } from "../fields/ExerciseField";
import { ExerciseChartTrigger } from "@/components/dialogs/ExerciseChartTrigger";
import { AddPropertyDropdown } from "./AddPropertyDropdown";
import { usePathname } from "next/navigation";
import { usePreferences } from "@/store/usePreferences";
import { convertWeightFrom, convertWeightTo } from "@/utils/weight";
import { FaWeightHanging } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { ImAlarm } from "react-icons/im";
import { BiDumbbell } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { GoGraph } from "react-icons/go";
import { ExercisePyramidField } from "../fields/ExercisePyramidField";
import { capitalize } from "@/utils/text/capitalize";
import { EditableText } from "@/components/elements/inputs/EditableText";
import { useExercises } from "@/store/useExercises";

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
  isDragging?: boolean;
  className?: string;
};

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
  isDragging = false,
  className,
}: Props) {
  const { weightUnit } = usePreferences();
  const pathname = usePathname();
  const [touchStartX, setTouchStartX] = useState(0);
  const removeRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const { updateExercise: updateExerciseName } = useExercises();

  const { id, name, weight, reps, sets, time, material } = exercise;
  const hideEmptyDetails = !!(weight || reps || sets || time || material);
  const [detailsToShow, setDetailsToShow] = useState(
    hideEmptyDetails
      ? Object.entries(exercise)
          .filter(([key, value]) => value)
          .map(([key]) => key)
      : ["weight", "reps", "sets", "time", "material"]
  );

  const handleOnClick: MouseEventHandler = () => {
    onClick?.(id);
  };

  const handleChangeName = (name: string) => {
    updateExerciseName?.({ id, name });
    updateExercise?.({ ...exercise, name });
  };

  const handleUpdateValue = (
    property: string,
    value: string | number | string[] | number[]
  ) => {
    if (Array.isArray(value)) {
      const properties = {
        [property]: value[0],
        ...(value.length > 1 && { [`pyramid${capitalize(property)}`]: value }),
      };
      updateExercise?.({ ...exercise, ...properties });
    } else updateExercise?.({ ...exercise, [property]: value });
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleMouseDown: MouseEventHandler = (e) => {
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

  const handleMouseMove: MouseEventHandler = (e) => {
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

  const handleMouseUp: MouseEventHandler = (e) => {
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
        "relative w-full h-full py-1 flex items-stretch rounded-lg border-2 border-slate-200 bg-slate-100 shadow-lg overflow-hidden",
        "dark:bg-slate-700 dark:border-slate-600",
        isDone
          ? "bg-green-300 dark:bg-green-300 dark:bg-opacity-80"
          : "hover:bg-slate-200 transition-colors duration-200 ease-in-out",
        { "border-slate-300": isActive },
        className
      )}
    >
      <div className="w-full ">
        <div
          onClick={handleOnClick}
          {...(!isDragging && {
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
          })}
          className={"flex w-full p-3 self-center"}
          tabIndex={0}
          role="button"
        >
          <EditableText
            nonEditable={!isActive}
            notAllowNewLine
            classes={{
              container: "m-auto",
              text: "text-xl xs:text-2xl font-bold select-none",
            }}
            onChange={handleChangeName}
          >
            {capitalize(name)}
          </EditableText>
        </div>

        {isActive && (
          <div>
            <div className="w-full flex flex-wrap justify-evenly max-w-md m-auto align-top gap-6 p-2 px-4 sm:px-8 md:pt-2 text-md">
              <ExercisePyramidField
                property="weight"
                type="number"
                icon={<FaWeightHanging size={14} />}
                value={convertWeightTo(Number(weight ?? 0), weightUnit)}
                unit={weightUnit}
                hide={!detailsToShow.includes("weight")}
                sets={sets ?? 1}
                onChange={(values) => {
                  handleUpdateValue(
                    "weight",
                    values.map((value) =>
                      convertWeightFrom(Number(value), weightUnit)
                    )
                  );
                }}
              />
              <ExercisePyramidField
                property="reps"
                type="number"
                icon={<MdSportsMartialArts size={20} />}
                value={reps}
                hide={!detailsToShow.includes("reps")}
                sets={sets ?? 1}
                onChange={(values) => {
                  handleUpdateValue("reps", values.map(Number));
                }}
              />
              <ExerciseField
                property="sets"
                icon={<BsArrowRepeat size={18} />}
                value={sets}
                onChange={(value) => handleUpdateValue("sets", Number(value))}
                hide={!detailsToShow.includes("sets")}
              />
              <ExercisePyramidField
                property="time"
                type="time"
                icon={<ImAlarm size={16} />}
                value={time}
                hide={!detailsToShow.includes("time")}
                sets={sets ?? 1}
                onChange={(values) => {
                  handleUpdateValue("time", values.map(Number));
                }}
              />
              <ExerciseField
                property="material"
                type="text"
                icon={<BiDumbbell size={20} />}
                value={material}
                hide={!detailsToShow.includes("material")}
                onChange={(value) => {
                  handleUpdateValue("material", value);
                }}
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
              <ExerciseChartTrigger exerciseId={exercise.id}>
                <GoGraph />
              </ExerciseChartTrigger>
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
      <div
        className={cn("absolute w-[120%] h-full top-0 right-full")}
        ref={doneRef}
      >
        {swipeRightElement}
      </div>
      <div
        className={cn("absolute w-[120%] h-full top-0 left-full")}
        ref={removeRef}
      >
        {swipeLeftElement}
      </div>
    </div>
  );
}
