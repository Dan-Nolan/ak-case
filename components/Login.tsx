"use client";
import { useAuthModal } from "@account-kit/react";

export function Login() {
  const { openAuthModal } = useAuthModal();
  return (
    <button className="btn btn-primary" onClick={openAuthModal}>
      Login
    </button>
  );
}
