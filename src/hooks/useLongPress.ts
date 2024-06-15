import { MouseEvent, TouchEvent, useCallback, useRef, useState } from "react";

type LongPressEvents =
  | MouseEvent<HTMLButtonElement>
  | TouchEvent<HTMLButtonElement>;

const useLongPress = (
  onLongPress: (event: LongPressEvents) => void,
  onClick: (event: LongPressEvents) => void,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: LongPressEvents) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event: LongPressEvents, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick(event);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e: MouseEvent<HTMLButtonElement>) => start(e),
    onTouchStart: (e: TouchEvent<HTMLButtonElement>) => start(e),
    onMouseUp: (e: MouseEvent<HTMLButtonElement>) => clear(e),
    onMouseLeave: (e: MouseEvent<HTMLButtonElement>) => clear(e, false),
    onTouchEnd: (e: TouchEvent<HTMLButtonElement>) => clear(e),
  };
};

const isTouchEvent = (event: any) => {
  return "touches" in event;
};

const preventDefault = (event: any) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;
