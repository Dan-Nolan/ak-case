"use client";
import { useSignerStatus, useSmartAccountClient } from "@account-kit/react";
import { Home } from "@/components/Home";
import { Login } from "@/components/Login";
import { useSearchParams } from "next/navigation";

export default function Main() {
  // grab a couple query params named challenge and redirect
  // const searchParams = useSearchParams();
  // const challenge = searchParams.get("challenge");
  // const redirect = searchParams.get("redirect");

  const signerStatus = useSignerStatus();

  const { client } = useSmartAccountClient({ type: "LightAccount" });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
      {signerStatus.isInitializing ? (
        <>Loading...</>
      ) : client ? (
        <Home client={client} />
      ) : (
        <Login />
      )}
    </main>
  );
}
