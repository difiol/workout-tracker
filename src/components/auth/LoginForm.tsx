import { createClient } from "@/lib/supabase/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../elements/buttons/Button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import InputText from "../elements/forms/InputText";

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
  const { register, handleSubmit } = useForm<LoginInputs>();
  const [error, setError] = React.useState<string | null>(null);
  const supabase = createClient();

  const onLogin = async (data: LoginInputs) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setError(error.message);
    } else {
      onAfterLogin?.();
    }
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
