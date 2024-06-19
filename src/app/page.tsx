"use client";
import { redirect } from "next/navigation";

export default function RootPage() {
  //Redirect to the English version of the site as fallback
  redirect("/en");
}
