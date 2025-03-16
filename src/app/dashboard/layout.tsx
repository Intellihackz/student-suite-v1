import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link href="/dashboard" className=" flex text-xl font-bold text-primary">
              <Logo rotation={75}/>
              StudentSuite
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
