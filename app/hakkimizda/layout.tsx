import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Pelin Mercan Estetik ve Güzellik'i tanıyın — Çanakkale'de uzman ekip, hijyenik ortam ve kişiye özel bakım.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
