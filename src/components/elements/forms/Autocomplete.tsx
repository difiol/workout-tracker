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
  name?: string;
  value?: Option;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  inputIcon?: ReactNode | boolean;
  inputButton?: ReactNode;
  classes?: Classes;
  allowNotMatchingValue?: boolean; //Allows the input value to be different from the options when submitting
  noBorder?: boolean;
  clearAfterSubmit?: boolean;
  onValueChange?: (value: Option) => void;
  onFocus?: () => void;
};

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  name,
  value,
  disabled,
  classes,
  inputIcon,
  inputButton,
  isLoading = false,
  allowNotMatchingValue = false,
  noBorder = false,
  clearAfterSubmit = false,
  onValueChange,
  onFocus,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(value as Option);
  const [inputValue, setInputValue] = useState<string>(value?.label || "");

  const submitValue = () => {
    const input = inputRef.current;
    if (!input || !input.value) {
      return;
    }

    const optionToSelect = options.find(
      (option) => option.label === input.value
    );
    if (optionToSelect) {
      onValueChange?.(optionToSelect);
    } else if (allowNotMatchingValue) {
      setSelected(null);
      onValueChange?.({ value: input.value, label: input.value });
    }
    if (clearAfterSubmit) setInputValue("");
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      // Keep the options displayed when the user is typing
      if (!open) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter") {
        //Hack to ensure submitValue executes after the user selects an option
        setTimeout(() => {
          submitValue();
        }, 0);
      }

      if (event.key === "Escape") {
        inputRef?.current?.blur();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open, options, onValueChange]
  );

  const handleFocus = () => {
    setOpen(true);
    onFocus?.();
  };

  const handleBlur = useCallback(() => {
    setOpen(false);
    if (!clearAfterSubmit) setInputValue(selected?.label ?? "");
  }, [selected, clearAfterSubmit]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onValueChange?.(selectedOption);
      if (clearAfterSubmit) {
        setInputValue("");
      }

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange, clearAfterSubmit]
  );

  const handleButtonClick = () => {
    submitValue();
  };

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className={classes?.container}>
      <div className="relative">
        <CommandInput
          ref={inputRef}
          name={name}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          className={cn("text-base border-b-2", classes?.input)}
          noBorder={noBorder}
          icon={inputIcon}
        />

        {inputButton && inputValue !== "" && (
          <button onClick={handleButtonClick}>{inputButton}</button>
        )}
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
                        !isSelected ? "pl-8" : null
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      <p className={classes?.item}>{option.label}</p>
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
