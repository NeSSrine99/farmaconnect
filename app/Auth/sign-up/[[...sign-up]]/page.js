"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
<<<<<<< Updated upstream:app/sign-up/[[...sign-up]]/page.js
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
=======
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Centered card */}
      <div className="w-full max-w-md p-6">
        <SignUp
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#6D28D9", 
            },
            elements: {
              card: "shadow-2xl rounded-2xl bg-white dark:bg-gray-800",
              headerTitle: "text-3xl font-extrabold text-purple-700 mb-4",
              formButtonPrimary:
                "bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all",
              footerActionText: "text-sm text-gray-500 dark:text-gray-400",
              footerActionLink:
                "text-purple-600 hover:underline font-medium",
            },
          }}
        />
      </div>
>>>>>>> Stashed changes:app/Auth/sign-up/[[...sign-up]]/page.js
    </div>
  );
}
