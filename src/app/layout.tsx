import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { theme } from "@/lib/data";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam Dahal — Resume",
  description:
    "Resume of Sam Dahal — Executive Director of Software Engineering. Enterprise data & platform strategy, Databricks, microservices, and global engineering leadership.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={theme} className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
