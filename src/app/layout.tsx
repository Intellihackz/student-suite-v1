import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "StudentSuite: The All-in-One Productivity Hub for Students",
  description:
    "Streamline your academic life with StudentSuite. Manage schedules, track assignments, take notes, and collaborate with classmates—all in one powerful platform.",
  keywords: [
    "student productivity",
    "student organizer",
    "academic tools",
    "schedule management",
    "assignment tracker",
    "note-taking app",
    "collaboration tools",
    "student planner",
    "digital learning",
    "education",
  ],
  authors: [
    {
      name: "Your Friend's Name/Student Suite Team", // Replace with the actual author/team name
      url: "https://studentsuite.com", // Replace with your website URL
    },
  ],
  openGraph: {
    title: "StudentSuite: The All-in-One Productivity Hub for Students",
    description:
      "Streamline your academic life with StudentSuite. Manage schedules, track assignments, take notes, and collaborate with classmates—all in one powerful platform.",
    url: "https://studentsuite.com", // Replace with your website URL
    siteName: "StudentSuite",
    images: [
      {
        url: "https://studentsuite.com/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "StudentSuite - The Ultimate Productivity Hub for Students",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}