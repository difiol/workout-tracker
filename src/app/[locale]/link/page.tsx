"use client";

import { NewPasswordForm } from "@/components/auth/NewPasswordForm";
import Navbar from "@/components/navbar/Navbar";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type FragmentParams = {
  access_token?: string;
  type?: string;
  expires_at?: string;
  expires_in?: string;
  refresh_token?: string;
  token_type?: string;
};

function getFragmentParams(): FragmentParams {
  // Obtain the fragment parameters from the URL and remove the leading `#`
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);

  const paramsObject = Array.from(params.entries()).reduce(
    (acc, [key, value]) => {
      acc[key as keyof FragmentParams] = value;
      return acc;
    },
    {} as FragmentParams
  );
  return paramsObject;
}

const client = createClient();

export default function LinkPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsloading] = useState(true);
  const { push } = useRouter();
  const t = useTranslations("Auth");

  const handleAfterAction = () => {
    push("/");
  };

  useEffect(() => {
    const initSession = async (access_token: string, refresh_token: string) => {
      await client.auth.setSession({
        access_token,
        refresh_token,
      });

      const {
        data: { user },
      } = await client.auth.getUser();

      setUser(user);
      setIsloading(false);
    };

    const params = getFragmentParams();
    if (!params.access_token || !params.refresh_token) {
      setIsloading(false);
      return;
    }

    initSession(params.access_token, params.refresh_token);
  }, []);

  if (isLoading)
    return (
      <main className="min-h-screen h-full w-full py-5 px-5 gap-8 flex flex-col justify-start items-center dark:bg-slate-800 dark:text-white">
        <Navbar hideAvatar className="m-0 mb-4" />
      </main>
    );

  return (
    <main className="min-h-screen h-full w-full py-5 px-5 flex flex-col justify-start items-center dark:bg-slate-800 dark:text-white">
      <Navbar hideAvatar className="m-0 mb-4" />
      {user ? (
        <>
          <div className="text-center mb-4">
            <h1 className="font-bold text-lg">
              {t("hello", { name: user?.email })}
            </h1>
            <p className="text-sm opacity-80">{t("change-password-message")}</p>
          </div>
          <NewPasswordForm
            onAfterAction={handleAfterAction}
            className="w-3/5 max-w-96"
          />
        </>
      ) : (
        <h1 className="font-semibold">{t("expired-link")}</h1>
      )}
    </main>
  );
}
