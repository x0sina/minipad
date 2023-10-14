import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minipad",
  description:
    "Discover Minipad, your go-to platform for crafting and sharing notes with the world. Create, organize, and share your ideas and insights effortlessly. Join a global community of note-takers today!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="minipad-theme-2">{children}</ThemeProvider>
      </body>
    </html>
  );
}
