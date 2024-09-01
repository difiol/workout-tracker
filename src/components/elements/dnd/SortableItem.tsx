import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  children: React.ReactNode;
  classes?: {
    dragging?: string;
  };
};

export function SortableItem({ id, children, classes }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn("w-full list-none", {
        [`${classes?.dragging}`]: isDragging,
      })}
    >
      {children}
    </li>
  );
}
