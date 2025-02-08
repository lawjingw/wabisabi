import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wabisabi.vercel.app"),
  title: {
    default: "WabiSabi | Japanese-Inspired Homeware",
    template: "%s | WabiSabi",
  },
  description:
    "Discover our curated collection of Japanese-inspired homeware, where beauty meets simplicity in everyday objects.",
  keywords: [
    "Japanese homeware",
    "minimalist design",
    "home decor",
    "Japanese design",
    "wabi-sabi",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wabisabi.vercel.app",
    siteName: "WabiSabi",
    title: "WabiSabi | Japanese-Inspired Homeware",
    description:
      "Discover our curated collection of Japanese-inspired homeware, where beauty meets simplicity in everyday objects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WabiSabi Japanese Homeware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WabiSabi | Japanese-Inspired Homeware",
    description:
      "Discover our curated collection of Japanese-inspired homeware, where beauty meets simplicity in everyday objects.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="container mx-auto px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
