import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import InputText from "@/components/elements/forms/InputText";
import { useUser } from "@/store/useUser";
import { usePreferences } from "@/store/usePreferences";
import { useWorkouts } from "@/store/useWorkouts";
import { useExercises } from "@/store/useExercises";
import { Button } from "@/components/elements/shadcn/button";

type Props = {
  onAfterLogin?: () => void;
  className?: string;
};

interface LoginInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, onAfterLogin }: Props) {
  const t = useTranslations("Auth");
  const { login } = useUser();
  const { loadUserPreferences } = usePreferences();
  const { loadWorkouts } = useWorkouts();
  const { loadExercises } = useExercises();
  const { register, handleSubmit } = useForm<LoginInputs>();
  const [error, setError] = useState<string>("");

  const onLogin = async (data: LoginInputs) => {
    const result = await login({
      email: data.email,
      password: data.password,
    });
    if (result.isSuccess) {
      await Promise.allSettled([
        loadUserPreferences(),
        loadWorkouts(),
        loadExercises(),
      ]);
      onAfterLogin?.();
    } else setError(result.error || "An error occurred");
  };

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className={cn("w-full flex flex-col items-center gap-4", className)}
    >
      <InputText
        name="email"
        label={t("email")}
        type="text"
        register={register}
      />
      <InputText
        name="password"
        label={t("password")}
        type="password"
        register={register}
      />
      <p className="text-red-500">{error}</p>
      <Button type="submit">{t("login")}</Button>
    </form>
  );
}
