import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../elements/shadcn/dropdown-menu";
import { useTranslations } from "next-intl";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

type Props = {
  children: React.ReactNode;
  displayedProperties: string[];
  show: (value: string) => void;
  hide: (value: string) => void;
};

type Property = { name: string; visible: boolean };

export const exerciseProperties = [
  "weight",
  "reps",
  "sets",
  "time",
  "material",
];

export function AddPropertyDropdown({
  children,
  displayedProperties,
  show,
  hide,
}: Props) {
  const t = useTranslations("Exercise");

  const propertiesToDisplay = exerciseProperties.reduce(
    (acc: Property[], property) => {
      acc.push({
        name: property,
        visible: displayedProperties.includes(property),
      });
      return acc;
    },
    []
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("properties")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="w-fit flex flex-col">
          {propertiesToDisplay.map(({ name, visible }) => {
            return (
              <DropdownMenuItem
                key={name}
                onSelect={(e) => {
                  e.preventDefault();
                  visible ? hide(name) : show(name);
                }}
                className="flex gap-2 text-xs"
              >
                {visible ? <FiEye /> : <FiEyeOff />}
                <p>{t(name)}</p>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
