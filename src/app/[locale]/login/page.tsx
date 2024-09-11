import { LoginView } from "@/components/views/LoginView";
import { redirectIfAuthenticated } from "@/utils/server/redirect";

export default async function LoginPage() {
  await redirectIfAuthenticated("/");

  return (
    <main className="min-h-screen h-full w-full dark:bg-slate-800 dark:text-white">
      <LoginView />
    </main>
  );
}
