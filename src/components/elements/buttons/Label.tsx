import useLongPress from "@/hooks/useLongPress";
import { cn } from "@/lib/utils";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  text: string;
  onClick: () => void;
  onRemove: () => void;
  isActive?: boolean;
};

export function Label({ text, onClick, onRemove, isActive = false }: Props) {
  const [isDeleteToggled, setIsDeleteToggled] = React.useState(false);

  const handleLongPress = () => {
    console.log("long press");
    setIsDeleteToggled((prev) => !prev);
  };

  const handleClick = () => {
    console.log("click");
    if (!isDeleteToggled) {
      onClick();
    } else onRemove();
  };

  const handleOnBlur = () => {
    console.log("blur");
    setIsDeleteToggled(false);
  };

  const longPressEvents = useLongPress(handleLongPress, handleClick, {
    shouldPreventDefault: true,
    delay: 500,
  });

  return (
    <button
      {...longPressEvents}
      onBlur={handleOnBlur}
      className={cn(
        "relative w-max py-2 px-3 rounded-full border-slate-300 border transition-all duration-200 ease-in select-none",
        isActive && "bg-slate-100",
        isDeleteToggled && "bg-red-500 text-white"
      )}
    >
      {isDeleteToggled && (
        <FaRegTrashCan
          size={18}
          className="absolute m-auto left-0 right-0 top-0 bottom-0"
        />
      )}
      <p className={cn(isDeleteToggled && "invisible")}>{text}</p>
    </button>
  );
}
