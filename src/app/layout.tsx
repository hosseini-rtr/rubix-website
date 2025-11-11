import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Rubix Core - Building Systems That Grow",
    template: "%s | Rubix Core",
  },
  description:
    "روبیکس کور - هسته‌ای برای نظم‌بخشی به تکنولوژی. ما سیستم‌هایی می‌سازیم که رشد می‌کنند.",
  keywords: [
    "Rubix Core",
    "AI Development",
    "Software Development",
    "Technical Consulting",
    "System Architecture",
    "توسعه نرم‌افزار",
    "هوش مصنوعی",
  ],
  authors: [{ name: "Rubix Core" }],
  creator: "Rubix Core",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fa_IR",
    url: "https://rubixcore.com",
    title: "Rubix Core - Building Systems That Grow",
    description:
      "هسته‌ای برای نظم‌بخشی به تکنولوژی. ما سیستم‌هایی می‌سازیم که رشد می‌کنند.",
    siteName: "Rubix Core",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubix Core - Building Systems That Grow",
    description:
      "هسته‌ای برای نظم‌بخشی به تکنولوژی. ما سیستم‌هایی می‌سازیم که رشد می‌کنند.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
