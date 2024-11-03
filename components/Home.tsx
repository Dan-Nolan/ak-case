"use client";
import { useLogout, useUser } from "@account-kit/react";
import { SignMessageButton } from "./SignMessageButton";

export function Home({ client }: { client: any }) {
  const { logout } = useLogout();
  const user = useUser();

  return (
    <div className="flex flex-col gap-2 p-2">
      <p className="text-xl font-bold">Success!</p>
      You are logged in as {user?.email ?? "anon"}.
      {client && <SignMessageButton client={client} />}
      <button className="btn btn-primary mt-6" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
}
