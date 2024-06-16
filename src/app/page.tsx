"use client";
import { UserAvatar } from "@/components/UserAvatar";
import { ThemeSwitcher } from "@/components/elements/buttons/ThemeSwitcher";
import { HomeView } from "@/components/views/HomeView";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/store/usePreferences";

export default function Home() {
  const { theme } = usePreferences();
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-start",
        theme === "dark" ? "dark" : ""
      )}
    >
      <div className="min-h-screen h-full w-full p-5 dark:bg-slate-800 dark:text-white">
        <nav className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold">Workout Tracker</h1>
          <ul className="flex space-x-4 items-center">
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <UserAvatar
                src="https://github.com/shadcn.png"
                username="Jhon Doe"
              />
            </li>
          </ul>
        </nav>
        <HomeView />
      </div>
    </main>
  );
}
