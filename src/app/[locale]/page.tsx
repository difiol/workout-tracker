"use client";
import Navbar from "@/components/navbar/Navbar";
import { HomeView } from "@/components/views/HomeView";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <div className="min-h-screen h-full w-full p-5 dark:bg-slate-800 dark:text-white">
        <Navbar />
        <HomeView />
      </div>
    </main>
  );
}
