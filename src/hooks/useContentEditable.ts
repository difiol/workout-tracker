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

  const onFocus = (e: FocusEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    // Ensure the target is the current element to avoid conflicts with child elements
    if (e.currentTarget === e.target) {
      const range = document.createRange();
      const sel = window.getSelection();

      // Select the entire content of the contentEditable element
      range.selectNodeContents(e.currentTarget);

      // Remove any existing selections
      sel?.removeAllRanges();

      // Apply the new range
      sel?.addRange(range);
    }
  };

  return {
    contentEditable: options.isEditable,
    suppressContentEditableWarning: true,
    onBlur,
    onKeyDown,
    onFocus,
  };
};
