import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Pelin Mercan Estetik ve Güzellik'ten gerçek uygulama ve sonuç fotoğrafları.",
  alternates: {
    canonical: "/galeri",
  },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
