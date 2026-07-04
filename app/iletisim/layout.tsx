import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Pelin Mercan Estetik ve Güzellik'e ulaşın — adres, telefon, WhatsApp ve harita.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
