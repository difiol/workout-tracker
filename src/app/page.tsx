import { UserAvatar } from "@/components/UserAvatar";
import { WorkoutExercises } from "@/components/workouts/WorkoutExercises";
import { WorkoutsSlider } from "@/components/workouts/WorkoutsSlider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-5">
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
      <WorkoutsSlider className="mt-8" />
      <WorkoutExercises />
      <footer className="w-full flex justify-center mt-auto">
        <button className="p-4 rounded-lg bg-slate-100 border-2 border-slate-400">
          Save workout
        </button>
      </footer>
    </main>
  );
}
