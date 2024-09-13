import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
  children: string;
  classes?: {
    container?: ClassValue;
    text?: ClassValue;
    icons?: ClassValue;
  };
  onChange?: (value: string) => void;
  nonEditable?: boolean;
  notAllowNewLine?: boolean;
};

export function EditableText({
  children,
  classes,
  onChange,
  nonEditable = false,
  notAllowNewLine = false,
}: Props) {
  const [value, setValue] = useState(children);
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleEdit: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    setTimeout(() => {
      ref.current?.focus();
      ref.current?.select();
    }, 0);
  };

  const handleDone: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    onChange?.(value);
  };

  const handleReset: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsEditing(false);
    setValue(children);
  };

  const handleKeyDown: KeyboardEventHandler = (e) => {
    e.stopPropagation();
    if (notAllowNewLine && e.key === "Enter") {
      e.preventDefault();
      setIsEditing(false);
      onChange?.(value);
    }
  };

  return (
    <span className={cn("flex items-center gap-2", classes?.container)}>
      {isEditing && !nonEditable ? (
        <textarea
          value={value}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "bg-transparent rounded-lg resize-none w-full",
            "[field-sizing:content]",
            { "px-2 border-2 dark:border-slate-400": isEditing },
            classes?.text
          )}
          ref={ref}
        />
      ) : (
        <div className={cn(classes?.text)}>{value}</div>
      )}
      {!nonEditable && (
        <span className="flex items-center gap-2">
          {!isEditing ? (
            <FaEdit onClick={handleEdit} />
          ) : (
            <>
              <FaCheck onClick={handleDone} className="text-green-500" />
              <IoClose
                size={20}
                onClick={handleReset}
                className="text-red-500"
              />
            </>
          )}
        </span>
      )}
    </span>
  );
}
