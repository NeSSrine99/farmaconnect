"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SignUp
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#6D28D9",
          },
          elements: {
            card: "shadow-xl rounded-xl",
            headerTitle: "text-2xl font-bold text-purple-700",
            formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
            footerActionText: "text-sm text-gray-600",
            footerActionLink: "text-purple-600 hover:underline",
          },
        }}
      />
    </div>
  );
}
