import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | StudentSuite",
  description: "Create a new StudentSuite account",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
      <SignUp />
    </div>
  );
}
