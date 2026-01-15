"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-text text-bg cursor-pointer rounded-full px-[24px] py-[10px] transition-opacity duration-300 hover:opacity-90 disabled:opacity-50"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}
