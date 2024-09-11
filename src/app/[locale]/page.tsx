import { HomeView } from "@/components/views/HomeView";
import { redirectIfNotAuthenticated } from "@/utils/server/redirect";

export default async function Home() {
  await redirectIfNotAuthenticated("/login");

  return (
    <main className="flex flex-col items-center justify-start dark:bg-slate-800 dark:text-white">
      <HomeView className="min-h-screen h-full w-full overflow-auto py-5" />
    </main>
  );
}
