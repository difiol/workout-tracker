import React from "react";
import AccountAvatar from "../user/AccountAvatar";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
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
      <ul className="flex space-x-4 items-center">
        <li>
          <AccountAvatar />
        </li>
      </ul>
    </nav>
  );
}
