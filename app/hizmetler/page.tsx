"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";
import { SALON, SERVICES } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Service = (typeof SERVICES)[number];

function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="card"
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ fontSize: 32, lineHeight: 1 }}>{service.icon}</div>

        {(service.popular || service.new) && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            {service.new && (
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "var(--gold)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                Yeni
              </span>
            )}
            {service.popular && (
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "var(--primary-dark)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                Popüler
              </span>
            )}
          </div>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 21,
          fontWeight: 700,
          color: "var(--text)",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {service.name}
      </h3>

      <p style={{ color: "var(--text-muted)", fontSize: 14.5, lineHeight: 1.65, margin: 0, flex: 1 }}>
        {service.desc}
      </p>

      <div style={{ fontSize: 12.5, color: "var(--text-light)", fontWeight: 600 }}>
        ⏱ {service.duration}
      </div>

      <Link
        href="/randevu"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginTop: 4,
          fontWeight: 700,
          fontSize: 14.5,
          textDecoration: "none",
          color: hovered ? "var(--primary-dark)" : "var(--text)",
          transition: "color .2s ease",
        }}
      >
        Randevu Al →
      </Link>
    </motion.div>
  );
}

function ServicesCTA() {
  return (
    <section
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #B8849A, #9A6A82, #C8B5D0)",
        padding: "88px 24px",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "#fff",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Aklınıza Yatan Bir Hizmet mi Var?
        </h2>
        <p style={{ marginTop: 14, color: "rgba(255,255,255,.85)", fontSize: 16, lineHeight: 1.7 }}>
          Hangi bakımın size en uygun olduğuna birlikte karar verelim. Hemen randevunuzu oluşturun ya da
          WhatsApp&apos;tan yazın.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}>
          <AnimatedRandevuBtn size="lg" />
          <a
            href={`${SALON.whatsapp}?text=${encodeURIComponent(
              "Merhaba, hizmetleriniz hakkında bilgi almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 WhatsApp&apos;tan Yaz
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default function HizmetlerPage() {
  return (
    <>
      <section style={{ background: "var(--bg-alt)", padding: "140px 24px 64px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ maxWidth: 860, margin: "0 auto" }}
        >
          <div
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(26px, 3.5vw, 34px)",
              color: "var(--gold)",
              marginBottom: 10,
            }}
          >
            Neler Sunuyoruz
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Hizmetlerimiz
          </h1>
          <p style={{ marginTop: 18, color: "var(--text-muted)", fontSize: 17, lineHeight: 1.75 }}>
            Cilt bakımından lazer epilasyona, kirpikten tırnağa kadar; Çanakkale&apos;de ihtiyacınıza özel, uzman
            ellerde profesyonel güzellik hizmetleri.
          </p>
        </motion.div>
      </section>

      <section className="section-pad" style={{ padding: "96px 24px" }}>
        <motion.div
          className="hizmet-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </section>

      <ServicesCTA />
    </>
  );
}
