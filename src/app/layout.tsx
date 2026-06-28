import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swapna Construction | Excavation & Infrastructure Solutions Hyderabad",
  description:
    "Swapna Construction — trusted partner for excavation, earthwork, road works, drainage works, basement excavation and infrastructure support in Hyderabad. 20+ years of experience.",
  keywords: [
    "excavation Hyderabad",
    "earthwork contractor",
    "rock excavation",
    "basement excavation",
    "road works",
    "drainage works",
    "infrastructure support",
    "Swapna Construction",
    "Kondapur",
  ],
  authors: [{ name: "Swapna Construction" }],
  openGraph: {
    title: "Swapna Construction | Excavation & Infrastructure Solutions",
    description:
      "Trusted partner for excavation & infrastructure solutions. 20+ years of experience in Hyderabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Swapna Construction",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <StructuredData />
        <a href="#hero" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
