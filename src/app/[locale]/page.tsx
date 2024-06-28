"use client";
import AccountAvatar from "@/components/user/AccountAvatar";
import { HomeView } from "@/components/views/HomeView";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
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
