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

type Props = {
  children: React.ReactNode;
  displayedProperties: string[];
  onSelect: (value: string) => void;
};

const properties = ["weight", "reps", "sets", "time", "material"];

export function AddPropertyDropdown({
  children,
  displayedProperties,
  onSelect,
}: Props) {
  const t = useTranslations("Exercise");

  const propertiesToDisplay = properties.filter(
    (property) => !displayedProperties.includes(property)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("properties")}</DropdownMenuLabel>
        {propertiesToDisplay.length ? (
          propertiesToDisplay.map((property) => {
            return (
              <DropdownMenuItem
                key={property}
                onClick={() => onSelect(property)}
                className="text-xs"
              >
                {t(property)}
              </DropdownMenuItem>
            );
          })
        ) : (
          <DropdownMenuItem className="opacity-80">
            {t("no-properties")}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
