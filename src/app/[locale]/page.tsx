"use client";
import UserPreferencesDropdown from "@/components/elements/dropdowns/UserAvatarDropdown";
import AccountAvatar from "@/components/user/AccountAvatar";
import { HomeView } from "@/components/views/HomeView";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/store/usePreferences";
import { useUser } from "@/store/useUser";
import { useEffect } from "react";

export default function Home() {
  const { theme } = usePreferences();

  const { user } = useUser();

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <main
      className={cn(
        "flex flex-col items-center justify-start",
        theme === "dark" ? "dark" : ""
      )}
    >
      <div className="min-h-screen h-full w-full p-5 dark:bg-slate-800 dark:text-white">
        <nav className="flex items-center justify-between w-full max-w-xl m-auto">
          <h1 className="text-2xl font-bold">Workout Tracker</h1>
          <ul className="flex space-x-4 items-center">
            <li>
              <AccountAvatar />
            </li>
          </ul>
        </nav>
        <HomeView />
      </div>
    </main>
  );
}
