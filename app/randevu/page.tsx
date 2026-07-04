"use client";

import { motion } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, slideInRight } from "@/lib/animations";
import PhoneWidget from "@/components/ui/PhoneWidget";
import AppointmentWizard from "@/components/appointment/AppointmentWizard";

export default function RandevuPage() {
  const whatsappHref = `${SALON.whatsapp}?text=${encodeURIComponent(
    "Merhaba, randevu almak istiyorum."
  )}`;

  return (
    <>
      {/* ─── Hero ─── */}
      <section
        style={{
          background: "linear-gradient(160deg, var(--text), #2D1F2B)",
          position: "relative",
          overflow: "hidden",
          padding: "140px 24px 64px",
        }}
      >
        {/* Dekoratif bloblar */}
        <div
          className="animate-blob"
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 320,
            height: 320,
            background: "rgba(255,255,255,.06)",
            pointerEvents: "none",
          }}
        />
        <div
          className="animate-blob animation-delay-2000"
          style={{
            position: "absolute",
            bottom: -120,
            right: -60,
            width: 280,
            height: 280,
            background: "rgba(255,255,255,.06)",
            pointerEvents: "none",
          }}
        />
        <div
          className="animate-blob animation-delay-4000"
          style={{
            position: "absolute",
            top: "20%",
            right: "28%",
            width: 160,
            height: 160,
            background: "rgba(255,255,255,.06)",
            pointerEvents: "none",
          }}
        />
        {/* Nokta deseni overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ maxWidth: 640 }}
          >
            <span
              style={{
                fontFamily: "var(--font-script)",
                fontSize: 34,
                color: "var(--gold)",
                display: "block",
                marginBottom: 6,
              }}
            >
              Bize Katılın
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 22,
                lineHeight: 1.1,
              }}
            >
              Randevu Al
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <span className="btn-pill" style={{ cursor: "default" }}>
                ⭐ {SALON.rating}
              </span>
              <span className="btn-pill" style={{ cursor: "default" }}>
                💬 Hızlı Yanıt
              </span>
              <span className="btn-pill" style={{ cursor: "default" }}>
                🗓 Pzt-Cmt 09:00-20:00
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-float-card"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              display: "none",
            }}
          >
            <PhoneWidget variant="dark" />
          </motion.div>
        </div>
      </section>

      {/* ─── Randevu formu + yan panel ─── */}
      <section
        className="grid-randevu section-pad"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 32,
          padding: "64px 24px 96px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div>
          <AppointmentWizard />
        </div>

        <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Hızlı İletişim */}
          <div className="card" style={{ padding: 24 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 16,
              }}
            >
              Hızlı İletişim
            </h2>
            <div style={{ marginBottom: 16 }}>
              <PhoneWidget variant="light" />
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: "100%" }}
            >
              💬 WhatsApp&apos;tan Yaz
            </a>
          </div>

          {/* Çalışma Saatleri */}
          <div className="card" style={{ padding: 24 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 16,
              }}
            >
              Çalışma Saatleri
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid var(--border)",
                fontSize: 14,
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>
                Pazartesi – Cumartesi
              </span>
              <span style={{ fontWeight: 700, color: "var(--text)" }}>
                {SALON.hours.weekdays}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0 0",
                fontSize: 14,
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>Pazar</span>
              <span style={{ fontWeight: 700, color: "var(--text)" }}>
                {SALON.hours.sunday}
              </span>
            </div>
          </div>

          {/* Puan kartı */}
          <div
            style={{
              background: "var(--text)",
              color: "#fff",
              borderRadius: 20,
              padding: 20,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
              ⭐ {SALON.rating}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.7)" }}>
              {SALON.reviewCount} Google değerlendirmesi
            </div>
          </div>

          {/* Adres kartı */}
          <div className="card" style={{ padding: 24 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 10,
              }}
            >
              Adres
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                marginBottom: 14,
              }}
            >
              {SALON.addressShort}
            </p>
            <a
              href={SALON.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--primary-dark)",
                textDecoration: "none",
              }}
            >
              Yol Tarifi Al →
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
