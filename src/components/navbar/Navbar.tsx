import React from "react";
import AccountAvatar from "../user/AccountAvatar";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  hideAvatar?: boolean;
};

export default function Navbar({ className, hideAvatar = false }: Props) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between w-full max-w-xl m-auto",
        className
      )}
    >
      <Link href="/" className="text-2xl font-bold">
        Workout Tracker
      </Link>
      {!hideAvatar && (
        <ul className="flex space-x-4 items-center">
          <li>
            <AccountAvatar />
          </li>
        </ul>
      )}
    </nav>
  );
}
