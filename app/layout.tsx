import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sun Villa Unawatuna | Affordable Villa in Unawatuna",
    template: "%s | Sun Villa Unawatuna",
  },
  description:
    "Sun Villa Unawatuna offers comfortable and affordable accommodation in Unawatuna near Galle, Sri Lanka. Perfect for travelers, couples, families, and backpackers seeking a relaxing stay close to the beach.",

  keywords: [
    "affordable villa in Unawatuna",
    "budget accommodation Unawatuna",
    "Unawatuna villa",
    "cheap stay in Unawatuna",
    "Unawatuna guest house",
    "villa near Unawatuna beach",
    "accommodation in Unawatuna",
    "Unawatuna Sri Lanka villa",
    "budget villa Galle",
    "Sun Villa Unawatuna",
    "Unawatuna affordable hotel",
    "family friendly villa Unawatuna",
  ],

  robots: {
    index: true,
    follow: true,
  },

  viewport: "width=device-width, initial-scale=1",

  openGraph: {
    title: "Sun Villa Unawatuna | Affordable Villa in Unawatuna, Sri Lanka",
    description:
      "Comfortable and budget-friendly villa accommodation in Unawatuna near Galle. Ideal for travelers visiting Sri Lanka's beautiful southern coast.",
    url: "https://www.sunvillaunawatuna.com", // ← Replace with your actual domain
    siteName: "Sun Villa Unawatuna",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/villa-exterior.webp", // ← Update to your actual image if needed
        width: 1200,
        height: 630,
        alt: "Sun Villa Unawatuna in Unawatuna",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sun Villa Unawatuna | Affordable Villa in Unawatuna",
    description:
      "Stay at Sun Villa Unawatuna, a comfortable and affordable villa in Unawatuna near Galle, Sri Lanka.",
    images: ["/images/villa-exterior.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}