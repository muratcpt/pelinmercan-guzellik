"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import PhoneWidget from "@/components/ui/PhoneWidget";

const VALUES = [
  { icon: "🎓", label: "Uzman Ekip" },
  { icon: "🧼", label: "Hijyen & Sterilizasyon" },
  { icon: "💎", label: "Kişiye Özel Bakım" },
  { icon: "📍", label: "Merkezi Konum (Çanakkale Merkez)" },
];

export default function AboutPreview() {
  return (
    <section className="section-pad" style={{ padding: "96px 24px" }}>
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            position: "relative",
            aspectRatio: "4 / 5",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/about-salon.jpg"
            alt="Pelin Mercan Estetik ve Güzellik salon içi"
            fill
            style={{ objectFit: "cover" }}
          />

          <div
            className="about-float-badge"
            style={{
              position: "absolute",
              bottom: -16,
              left: 24,
              background: "#fff",
              borderRadius: 16,
              padding: "12px 18px",
              boxShadow: "0 12px 32px var(--shadow)",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
              ⭐ {SALON.rating} Google Puanı
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
              {SALON.reviewCount} değerlendirme
            </div>
          </div>

          <div
            className="about-float-location"
            style={{
              position: "absolute",
              top: 20,
              right: -16,
              background: "rgba(255,255,255,.75)",
              backdropFilter: "blur(10px)",
              borderRadius: 14,
              padding: "10px 16px",
              boxShadow: "0 8px 24px var(--shadow)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            📍 {SALON.addressShort}
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--primary-dark)",
              fontSize: "clamp(22px, 2.4vw, 28px)",
            }}
          >
            Bizi Tanıyın
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: "var(--text)",
              marginTop: 8,
              lineHeight: 1.2,
            }}
          >
            Çanakkale&apos;de{" "}
            <em style={{ fontStyle: "italic", color: "var(--primary-dark)" }}>
              Güzelliğin Adresi
            </em>
          </h2>

          <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginTop: 20 }}>
            Pelin Mercan Estetik ve Güzellik, Çanakkale&apos;de sunduğu çeşitli güzellik
            bakımları ile fark yaratıyor. Müşterilerine daha pürüzsüz ve sıkı bir cilt, daha
            kendinden emin bir vücut ve genel olarak daha sağlıklı bir görünüm vaat eden Pelin
            Mercan Estetik ve Güzellik, güzelliğinizi ortaya çıkarmak için gereken tüm
            profesyonel hizmetleri sunuyor.
          </p>

          <motion.div
            className="values-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginTop: 32,
            }}
          >
            {VALUES.map((v) => (
              <div
                key={v.label}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 18px",
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{v.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
                  {v.label}
                </span>
              </div>
            ))}
          </motion.div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 32,
            }}
          >
            <Link href="/hakkimizda" className="btn-outline">
              Daha Fazla
            </Link>
            <PhoneWidget variant="light" size="sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
