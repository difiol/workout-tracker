import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/elements/shadcn/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  ReactNode,
} from "react";

import { Check } from "lucide-react";
import { Skeleton } from "../shadcn/skeleton";
import { cn } from "@/lib/utils";

export type Option = Record<"value" | "label", string> & Record<string, string>;

type Classes = {
  container?: string;
  input?: string;
  list?: string;
  item?: string;
  empty?: string;
};

type AutoCompleteProps = {
  options: Option[];
  emptyMessage: string;
  value?: Option;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inputIcon?: ReactNode | boolean;
  classes?: Classes;
  allowNotMatchingValue?: boolean;
  noBorder?: boolean;
  clearAfterSubmit?: boolean;
  onValueChange?: (value: Option) => void;
  onFocus?: () => void;
};

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  disabled,
  classes,
  inputIcon: icon,
  isLoading = false,
  allowNotMatchingValue = false,
  noBorder = false,
  clearAfterSubmit = false,
  onValueChange,
  onFocus,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value as Option);
  const [inputValue, setInputValue] = useState<string>(value?.label || "");

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!open) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        } else if (allowNotMatchingValue) {
          setSelected({ value: input.value, label: input.value });
          onValueChange?.({ value: input.value, label: input.value });
        }
        if (clearAfterSubmit) setInputValue("");
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [open, options, onValueChange]
  );

  const handleFocus = () => {
    setOpen(true);
    onFocus?.();
  };

  const handleBlur = useCallback(() => {
    setOpen(false);
    if (!clearAfterSubmit) setInputValue(selected?.label);
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onValueChange?.(selectedOption);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
        if (clearAfterSubmit) setInputValue("");
      }, 0);
    },
    [onValueChange]
  );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className={classes?.container}>
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          className={cn("text-base border-b-2", classes?.input)}
          noBorder={noBorder}
          icon={icon}
        />
      </div>
      <div className={cn("relative mt-1")}>
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white dark:bg-slate-800 outline-none",
            open ? "block" : "hidden"
          )}
        >
          <CommandList
            className={cn("rounded-lg ring-1 ring-slate-200", classes?.list)}
          >
            {isLoading ? (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            ) : null}
            {options.length > 0 && !isLoading ? (
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center gap-2",
                        !isSelected ? "pl-8" : null,
                        classes?.item
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}
            {!isLoading ? (
              <CommandPrimitive.Empty
                className={cn(
                  "select-none rounded-sm px-2 py-3 text-center text-sm",
                  classes?.empty
                )}
              >
                {emptyMessage}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
