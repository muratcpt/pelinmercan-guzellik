"use client";

import Link from "next/link";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div
        className="animate-float"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(80px, 15vw, 160px)",
          fontWeight: 700,
          lineHeight: 1,
          backgroundImage: "linear-gradient(135deg, var(--primary), var(--gold))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        404
      </div>

      <p
        style={{
          fontFamily: "var(--font-script)",
          fontSize: "clamp(24px, 4vw, 32px)",
          color: "var(--primary-dark)",
          marginTop: "8px",
        }}
      >
        Sayfa Bulunamadı
      </p>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 36px)",
          color: "var(--text)",
          marginTop: "12px",
          maxWidth: 700,
        }}
      >
        Aradığınız Sayfa Mevcut Değil
      </h1>

      <p
        style={{
          color: "var(--text-muted)",
          fontSize: 16,
          marginTop: "16px",
          maxWidth: 520,
          lineHeight: 1.7,
        }}
      >
        Aradığınız sayfa kaldırılmış, adı değiştirilmiş ya da hiç var olmamış olabilir.
        Ana sayfaya dönerek Pelin Mercan Estetik ve Güzellik&apos;in sunduğu hizmetleri
        keşfedebilir veya doğrudan randevu oluşturabilirsiniz.
      </p>

      <div style={{ display: "flex", gap: 14, marginTop: 24, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn-primary">
          Ana Sayfaya Dön
        </Link>
        <AnimatedRandevuBtn />
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 32,
          fontSize: 14,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/hizmetler" style={{ color: "var(--text-muted)" }}>
          Hizmetlerimiz
        </Link>
        <Link href="/hakkimizda" style={{ color: "var(--text-muted)" }}>
          Hakkımızda
        </Link>
        <Link href="/galeri" style={{ color: "var(--text-muted)" }}>
          Galeri
        </Link>
        <Link href="/iletisim" style={{ color: "var(--text-muted)" }}>
          İletişim
        </Link>
      </div>
    </div>
  );
}
