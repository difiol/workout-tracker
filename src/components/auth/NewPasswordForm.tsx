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
import { createClient } from "@/lib/supabase/client";

type Props = {
  onAfterAction?: () => void;
  className?: string;
};

interface LoginInputs {
  password: string;
  confirmPassword: string;
}

const client = createClient();

export function NewPasswordForm({ className, onAfterAction }: Props) {
  const t = useTranslations("Auth");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const updatePassword = async (password: string) =>
    client.auth.updateUser({ password });

  const { mutate, error, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: onAfterAction,
  });

  const onSubmit = (data: LoginInputs) => {
    mutate(data.password);
  };

  const errorMessage =
    error?.name === "AuthApiError"
      ? t("error-credentials")
      : t("error-general");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full flex flex-col items-center gap-3", className)}
    >
      <InputText
        name="password"
        label={t("password")}
        type="password"
        register={register}
        validate={(val: string) => {
          if (val) {
            if (val.length < 6) {
              return t("error-password-short", { length: 6 });
            }
          }
        }}
        errorMessage={errors.password?.message}
        className="w-full"
      />
      <InputText
        name="confirmPassword"
        label={t("confirm-password")}
        type="password"
        register={register}
        validate={(val: string) => {
          if (watch("password") != val) {
            return t("error-password-match");
          }
        }}
        errorMessage={errors.confirmPassword?.message}
        className="w-full"
      />
      <p className="text-red-500 text-sm">{error && errorMessage}</p>
      <Button type="submit" disabled={isPending}>
        {t("change-password")}
      </Button>
    </form>
  );
}
