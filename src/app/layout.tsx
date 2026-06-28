import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crust — Components with a crust. Soft inside, sharp outside.",
  description:
    "Crust is a production-grade CSS component library. 100 hand-crafted effects. Swiss-grid meets editorial. Developer-first, no fluff.",
  keywords: [
    "Crust",
    "CSS components",
    "component library",
    "design system",
    "Tailwind",
    "React",
    "editorial",
    "brutalist",
  ],
  authors: [{ name: "Crust" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Crust — Components with a crust",
    description:
      "A production-grade CSS component library. 100 effects, editorial design, developer-first.",
    siteName: "Crust",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crust — Components with a crust",
    description: "100 hand-crafted CSS effects. No fluff.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
