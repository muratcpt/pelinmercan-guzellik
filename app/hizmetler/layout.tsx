import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Hydrafacial, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleri.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
