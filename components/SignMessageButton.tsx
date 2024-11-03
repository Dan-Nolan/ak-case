"use client";
import { useSignMessage } from "@account-kit/react";

export function SignMessageButton({ client }: { client: any }) {
  const { signMessageAsync } = useSignMessage({ client });

  async function handleSignMessage() {
    const result = await signMessageAsync({ message: "weee" });
    console.log(result);
  }

  return <button onClick={handleSignMessage}>Sign message</button>;
}
