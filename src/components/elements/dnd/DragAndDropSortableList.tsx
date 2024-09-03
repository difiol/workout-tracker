import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
} from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { cn } from "@/lib/utils";

const axisRestrictions = {
  vertical: restrictToVerticalAxis,
  horizontal: restrictToHorizontalAxis,
};

const sortingStrategies = {
  vertical: verticalListSortingStrategy,
  horizontal: horizontalListSortingStrategy,
};

type Props = {
  items: any[];
  direction?: "vertical" | "horizontal";
  draggingClass?: string;
  renderItem: (item: any) => React.ReactNode;
  onDragEnd: (resortedItems: any[], event: DragEndEvent) => void;
  onDragStart?: (event: DragStartEvent) => void;
  onDragMove?: (event: DragEndEvent) => void;
  onDragCancel?: (event: DragEndEvent) => void;
  onDragOver?: (event: DragEndEvent) => void;
};

export function DragAndDropSortableList({
  items,
  direction = "vertical",
  draggingClass,
  renderItem,
  onDragEnd,
  onDragStart,
  onDragMove,
  onDragCancel,
  onDragOver,
}: Props) {
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const resortedItems = arrayMove(items, oldIndex, newIndex);
      onDragEnd(resortedItems, event);
    }
  };

  return (
    <DndContext
      modifiers={[axisRestrictions[direction]]}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragMove={onDragMove}
      onDragCancel={onDragCancel}
      onDragOver={onDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={sortingStrategies[direction]}>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            draggingClass={cn(
              "opacity-80 outline-dashed outline-2 outline-slate-400 dark:outline-white",
              draggingClass
            )}
          >
            {renderItem(item)}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}
