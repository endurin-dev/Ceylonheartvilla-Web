import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ceylon Heart Villa | Budget & Affordable Hotel in Unawatuna",
    template: "%s | Ceylon Heart Villa",
  },
  description:
    "Ceylon Heart Villa offers budget-friendly and affordable accommodation in Unawatuna near Galle, Sri Lanka. Ideal for backpackers, couples, and travelers looking for a comfortable stay close to the beach.",

  keywords: [
    "budget hotel in Unawatuna",
    "cheap hotel in Unawatuna",
    "affordable hotel in Unawatuna",
    "backpacker accommodation Unawatuna",
    "Unawatuna budget hotel",
    "Unawatuna budget hotel deals",
    "budget accommodation in Unawatuna",
    "cheap accommodation in Unawatuna",
    "budget hotel near Unawatuna beach",
    "budget hotel in Galle",
    "cheap hotels in Galle Sri Lanka",
    "villa accommodation in Unawatuna",
    "Sri Lanka budget villa",
    "Ceylon Heart Villa",
  ],

  robots: {
    index: true,
    follow: true,
  },

  viewport: "width=device-width, initial-scale=1",

  openGraph: {
    title: "Ceylon Heart Villa | Budget Hotel in Unawatuna, Sri Lanka",
    description:
      "Affordable and comfortable villa accommodation in Unawatuna near Galle. Perfect for budget travelers and backpackers visiting Sri Lanka.",
    url: "https://www.ceylonheartvilla.com",
    siteName: "Ceylon Heart Villa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/villa-exterior.webp",
        width: 1200,
        height: 630,
        alt: "Ceylon Heart Villa in Unawatuna",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ceylon Heart Villa | Budget Hotel in Unawatuna",
    description:
      "Stay at Ceylon Heart Villa, a budget-friendly villa in Unawatuna near Galle, Sri Lanka.",
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
