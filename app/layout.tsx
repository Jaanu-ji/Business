import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AXIOM — Custom Web, Mobile & AI Systems for Modern Businesses",
  description:
    "We build custom websites, mobile apps, admin dashboards, AI automation, and WhatsApp integrations for startups and growing businesses.",
  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "WhatsApp integration",
    "admin dashboard",
    "business software",
    "CRM development",
    "custom software",
  ],
  openGraph: {
    title: "AXIOM — Custom Web, Mobile & AI Systems for Modern Businesses",
    description:
      "We help businesses automate operations, improve customer experience, and launch modern software solutions faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
