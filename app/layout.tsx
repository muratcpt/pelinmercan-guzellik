import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import CursorFollower from "@/components/ui/CursorFollower";
import ScrollProgress from "@/components/ui/ScrollProgress";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://pelinmercan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Pelin Mercan Estetik ve Güzellik | Çanakkale",
    template: "%s | Pelin Mercan Estetik ve Güzellik",
  },
  description:
    "Çanakkale'de Hydrafacial, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleri. Pelin Mercan Estetik ve Güzellik'te hemen randevu alın: 0531 720 86 55.",
  keywords: [
    "güzellik salonu Çanakkale",
    "lazer epilasyon Çanakkale",
    "hydrafacial Çanakkale",
    "ipek kirpik Çanakkale",
    "protez tırnak Çanakkale",
    "cilt bakımı Çanakkale",
    "Pelin Mercan",
  ],
  authors: [{ name: "Pelin Mercan Estetik ve Güzellik" }],
  creator: "Pelin Mercan Estetik ve Güzellik",
  publisher: "Pelin Mercan Estetik ve Güzellik",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Pelin Mercan Estetik ve Güzellik",
    title: "Pelin Mercan Estetik ve Güzellik | Çanakkale",
    description:
      "Çanakkale'de Hydrafacial, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleri. Hemen randevu alın.",
    images: [{ url: "/images/hero-bg.jpg", width: 1440, height: 900, alt: "Pelin Mercan Estetik ve Güzellik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelin Mercan Estetik ve Güzellik | Çanakkale",
    description: "Çanakkale'de Hydrafacial, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleri.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        <ScrollProgress />
        <CursorFollower />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
