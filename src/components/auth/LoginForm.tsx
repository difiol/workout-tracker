import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { InputText } from "@/components/elements/inputs/InputText";
import { useUser } from "@/store/useUser";
import { usePreferences } from "@/store/usePreferences";
import { useWorkouts } from "@/store/useWorkouts";
import { useExercises } from "@/store/useExercises";
import { Button } from "@/components/elements/shadcn/button";
import { useMutation } from "@tanstack/react-query";

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

  const handleAfterLogin = async () => {
    await Promise.allSettled([
      loadUserPreferences(),
      loadWorkouts(),
      loadExercises(),
    ]);
    onAfterLogin?.();
  };

  const { mutate, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: handleAfterLogin,
  });

  const onLogin = (data: LoginInputs) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  const errorMessage =
    error?.name === "AuthApiError"
      ? t("error-credentials")
      : t("error-general");

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className={cn("w-full flex flex-col items-center gap-3", className)}
    >
      <InputText
        name="email"
        label={t("email")}
        type="text"
        register={register}
        hideErrorMessageSpace
      />
      <InputText
        name="password"
        label={t("password")}
        type="password"
        register={register}
        hideErrorMessageSpace
      />
      <p className="text-red-500 text-sm">{error && errorMessage}</p>
      <Button type="submit" disabled={isPending}>
        {t("login")}
      </Button>
    </form>
  );
}
