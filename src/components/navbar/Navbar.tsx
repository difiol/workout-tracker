import React from "react";
import AccountAvatar from "../user/AccountAvatar";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex items-center justify-between w-full max-w-xl m-auto">
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
