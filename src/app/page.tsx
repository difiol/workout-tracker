import { UserAvatar } from "@/components/UserAvatar";
import { HomeView } from "@/components/views/HomeView";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-5">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Workout Tracker</h1>
        <ul className="flex space-x-4 items-center">
          <li>
            <UserAvatar
              src="https://github.com/shadcn.png"
              username="Jhon Doe"
            />
          </li>
        </ul>
      </nav>
      <HomeView />
    </main>
  );
}
