import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Randevu Al",
  description:
    "Pelin Mercan Estetik ve Güzellik'te 3 adımda kolayca online randevu alın.",
  alternates: {
    canonical: "/randevu",
  },
};

export default function RandevuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
