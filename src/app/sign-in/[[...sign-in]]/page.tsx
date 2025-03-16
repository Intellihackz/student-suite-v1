import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | StudentSuite",
  description: "Sign in to your StudentSuite account",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
      <SignIn />
    </div>
  );
}
