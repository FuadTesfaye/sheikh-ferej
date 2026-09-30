import type { Metadata } from "next";
import { Manrope, Inter, Amiri, Noto_Sans_Ethiopic } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sheikh Muhammed Ferej Megeno",
    default: "Sheikh Muhammed Ferej Megeno",
  },
  description: "Islamic Scholar, Educator & Sharia Consultant — Authentic Lectures, Articles, and Sharia Insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${amiri.variable} ${notoEthiopic.variable}`}
    >
      <body className="min-h-screen bg-surface text-text antialiased">
        {children}
      </body>
    </html>
  );
}
