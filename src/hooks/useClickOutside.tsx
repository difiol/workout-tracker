//This custom hook is used to trigger an action when clicking outside of a specific element.

import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (
  ref: MutableRefObject<any>,
  handler: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
