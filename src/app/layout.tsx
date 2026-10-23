import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const siteUrl = "https://surhires.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Surhires — Good people. Great opportunities.",
    template: "%s | Surhires",
  },
  description:
    "Surhires connects thoughtful candidates with growing teams that publish transparent roles, clear compensation, and timely updates.",
  applicationName: "Surhires",
  keywords: [
    "Surhires",
    "recruitment platform",
    "find jobs",
    "hire faster",
    "post a job",
    "remote jobs India",
  ],
  openGraph: {
    type: "website",
    siteName: "Surhires",
    locale: "en_IN",
    url: siteUrl,
    title: "Surhires — Good people. Great opportunities.",
    description:
      "Explore curated roles with honest salary bands or publish a structured vacancy in minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surhires — Good people. Great opportunities.",
    description:
      "Explore curated roles with honest salary bands or publish a structured vacancy in minutes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
