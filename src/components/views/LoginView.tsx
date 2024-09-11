"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "../auth/LoginForm";
import { useTranslations } from "next-intl";

export function LoginView() {
  const t = useTranslations("Auth");
  const { push } = useRouter();

  const handleAfterLogin = () => {
    push("/");
  };

  return (
    <div className="flex flex-col gap-8 py-20 px-5 flex flex-col justify-start items-center">
      <h1 className="font-bold text-lg text-center">{t("welcome-login")}</h1>
      <LoginForm
        onAfterLogin={handleAfterLogin}
        className="w-3/5 max-w-96 m-auto"
      />
    </div>
  );
}
