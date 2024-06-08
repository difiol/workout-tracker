import { UserAvatar } from "@/components/UserAvatar";
import Exercise from "@/components/exercises/ExerciseItem";

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
      <section className="w-full flex flex-col items-center gap-4 py-10">
        <Exercise
          id="1"
          name="Bench Press"
          weight={100}
          reps={10}
          sets={3}
          time={0}
          material="Barbell"
        />
        <Exercise
          id="2"
          name="Deadlift"
          weight={150}
          reps={8}
          sets={3}
          time={0}
          material="Barbell"
        />
      </section>
    </main>
  );
}
