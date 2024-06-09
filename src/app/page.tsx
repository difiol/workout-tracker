import { UserAvatar } from "@/components/UserAvatar";
import { Workout } from "@/components/Workout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-10 px-5">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Workout Tracker</h1>
        <ul className="flex space-x-4 items-center">
          <li className="h-fit">Rest</li>
          <li>
            <UserAvatar
              src="https://github.com/shadcn.png"
              username="Jhon Doe"
            />
          </li>
        </ul>
      </nav>
      <Workout />
    </main>
  );
}
