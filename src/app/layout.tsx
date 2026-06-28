import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/crust/theme-provider";
import { themeInitScript } from "@/lib/crust/theme-init";

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

export const viewport: Viewport = {
  // Tells the browser UI (address bar, status bar) which palette to use.
  // Media query form lets the UA pick based on the active theme.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#14110D" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-hydration theme script — runs before paint so first byte
            already has .dark on <html> when ?theme=dark is in the URL. */}
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
