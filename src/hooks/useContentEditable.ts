import { FocusEvent, KeyboardEvent } from "react";

/**
 * This hook provides the needed attributes and event handlers
 * to make an element content editable.
 */
type Options = { isEditable: boolean; isMultiline: boolean };

export const useContentEditable = (
  onChange: (value: string) => void,
  options: Options = { isEditable: true, isMultiline: false }
) => {
  const onBlur = (e: FocusEvent<HTMLParagraphElement>) => {
    onChange(e.currentTarget.textContent ?? "");
  };
  const onKeyDown = (e: KeyboardEvent<HTMLParagraphElement>) => {
    if (!options.isMultiline && e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  return {
    contentEditable: options.isEditable,
    onBlur,
    onKeyDown,
  };
};
