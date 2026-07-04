"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";
import { SALON, SERVICES } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const BENTO_IDS = [
  "hydrafacial-mercan-peeling",
  "lazer-epilasyon",
  "ipek-kirpik",
  "protez-tirnak",
  "akne-leke-tedavisi",
  "bolgesel-incelme",
];

const BENTO_STYLE: Record<string, React.CSSProperties> = {
  "hydrafacial-mercan-peeling": { gridColumn: "span 2", gridRow: "span 2", minHeight: 420 },
  "lazer-epilasyon": { minHeight: 200 },
  "ipek-kirpik": { minHeight: 200 },
  "protez-tirnak": { gridColumn: "span 2", minHeight: 200 },
  "akne-leke-tedavisi": { minHeight: 200 },
  "bolgesel-incelme": { minHeight: 200 },
};

const BENTO_SERVICES = BENTO_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(
  (s): s is (typeof SERVICES)[number] => Boolean(s)
);

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-pad" style={{ background: "var(--text)", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(22px,3vw,30px)", color: "var(--gold)", marginBottom: 6 }}>
            Neler Sunuyoruz
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4.5vw,48px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
            Hizmetlerimiz
          </h2>
          <p style={{ marginTop: 14, color: "rgba(255,255,255,.7)", fontSize: 16, lineHeight: 1.7 }}>
            Cilt bakımından tırnağa, kirpikten kaşa kadar ihtiyacınıza özel profesyonel uygulamalar.
          </p>
        </motion.div>

        <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 48 }}>
          {BENTO_SERVICES.map((service, index) => {
            const hovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  ...BENTO_STYLE[service.id],
                }}
              >
                <motion.div
                  animate={{ scale: hovered ? 1.08 : 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(61,43,53,.85) 0%, rgba(61,43,53,.25) 55%, rgba(61,43,53,.05) 100%)",
                  }}
                />

                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(184,132,154,.85), rgba(61,43,53,.75))",
                  }}
                />

                <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", zIndex: 2 }}>
                  {service.popular && (
                    <span
                      style={{
                        display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100,
                        background: "rgba(255,255,255,.9)", color: "var(--text)", fontSize: 11.5, fontWeight: 800,
                      }}
                    >
                      Popüler
                    </span>
                  )}
                  {service.new && (
                    <span
                      style={{
                        display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100,
                        background: "var(--gold)", color: "#fff", fontSize: 11.5, fontWeight: 800,
                        marginLeft: "auto",
                      }}
                    >
                      Yeni
                    </span>
                  )}
                </div>

                <div style={{ position: "absolute", left: 20, right: 20, bottom: 20, zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 28, lineHeight: 1 }}>{service.icon}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff",
                        fontSize: BENTO_STYLE[service.id].minHeight === 420 ? 26 : 18, lineHeight: 1.2,
                      }}
                    >
                      {service.name}
                    </span>
                  </div>

                  <motion.p
                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ marginTop: 10, color: "rgba(255,255,255,.85)", fontSize: 14, lineHeight: 1.55 }}
                  >
                    {service.shortDesc}
                  </motion.p>

                  <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ marginTop: 14 }}
                  >
                    <Link href="/randevu" style={{ color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                      Randevu Al →
                    </Link>
                  </motion.div>

                  <motion.div
                    animate={{ opacity: hovered ? 0 : 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ marginTop: 10, color: "rgba(255,255,255,.75)", fontSize: 12.5, fontWeight: 600 }}
                  >
                    ⏱ {service.duration}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: 14, fontWeight: 500 }}>
            ✨ 10 Hizmet · ⭐ {SALON.rating} · 🧼 Steril · 💬 WhatsApp
          </div>
          <AnimatedRandevuBtn size="md" />
        </div>
      </div>
    </section>
  );
}
