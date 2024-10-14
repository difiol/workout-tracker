import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

type Props = {
  label?: string;
  options: { label: string; value: string }[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  classes?: {
    trigger?: string;
    content?: string;
    item?: string;
  };
};

export default function CustomSelect({
  label,
  options,
  value,
  placeholder = "Select an option",
  onChange,
  classes,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={classes?.trigger}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={classes?.content}>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value} className={classes?.item}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
