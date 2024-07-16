import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

export function PreferencesDropdownItem({ children, label }: Props) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-xs">{label}</p>
      <span className="min-w-16">{children}</span>
    </div>
  );
}
