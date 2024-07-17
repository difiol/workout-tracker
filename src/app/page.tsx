import { redirect } from "@/navigation";

export const dynamic = "force-dynamic";

export default function RootPage() {
  //Redirect to the English version of the site as fallback
  redirect("/en");
}
