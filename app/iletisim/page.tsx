"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, slideInRight, staggerContainer } from "@/lib/animations";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

const CARD_TRANSITION = { duration: 0.25, ease: "easeOut" as const };

const ACTION_CARDS = [
  {
    icon: "📞",
    title: "Hemen Ara",
    desc: SALON.phone,
    href: `tel:${SALON.phoneRaw}`,
    external: false,
    iconBg: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
    btnLabel: "Ara",
    btnStyle: { background: "transparent" } as React.CSSProperties,
    btnClass: "btn-outline",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    desc: "Hemen yazın, hızlı yanıt alın",
    href: `${SALON.whatsapp}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`,
    external: true,
    iconBg: "#25D366",
    btnLabel: "Yaz",
    btnStyle: {} as React.CSSProperties,
    btnClass: "btn-whatsapp",
  },
  {
    icon: "📅",
    title: "Online Randevu",
    desc: "3 adımda kolayca randevu alın",
    href: "/randevu",
    external: false,
    iconBg: "var(--secondary)",
    btnLabel: "Randevu Al",
    btnStyle: { background: "var(--secondary)", color: "#fff", border: "none" } as React.CSSProperties,
    btnClass: "btn-outline",
  },
];

export default function IletisimPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SALON.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Koyu gradient hero bandı */}
      <section
        className="section-pad"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, var(--text), #4A3540)",
          padding: "140px 24px 64px",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.5,
          }}
        />
        <div
          className="animate-blob"
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(212,165,181,.16)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 860, margin: "0 auto" }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(28px,3vw,36px)", color: "var(--accent)" }}>
            Bize Ulaşın
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px,5vw,54px)",
              fontWeight: 700,
              color: "#fff",
              margin: "4px 0 0",
            }}
          >
            İletişim
          </h1>
          <p
            style={{
              marginTop: 16,
              color: "rgba(255,255,255,.78)",
              fontSize: "clamp(15px,1.6vw,17px)",
              lineHeight: 1.6,
            }}
          >
            Sorularınız ve randevu talepleriniz için bize telefon, WhatsApp veya online randevu
            sistemimiz üzerinden ulaşabilirsiniz.
          </p>
        </motion.div>
      </section>

      {/* Aksiyon kartları */}
      <section className="section-pad" style={{ padding: "64px 24px" }}>
        <motion.div
          className="action-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1280, margin: "0 auto" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ACTION_CARDS.map((item) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={CARD_TRANSITION}
              style={{
                padding: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: item.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--text)", margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: 0 }}>{item.desc}</p>
              <span className={item.btnClass} style={{ ...item.btnStyle, marginTop: 4, pointerEvents: "none" }}>
                {item.btnLabel}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Harita + bilgi kartları */}
      <section className="section-pad" style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="map-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 32, alignItems: "stretch" }}
          >
            <div className="contact-grid" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <motion.div
                className="card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  <span style={{ color: "#fff" }}>📍</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }}>
                    Adres
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.5 }}>
                    {SALON.address}
                  </div>
                  <a
                    href={SALON.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", marginTop: 8, fontSize: 13, fontWeight: 700, color: "var(--primary-dark)" }}
                  >
                    Yol Tarifi Al →
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  <span style={{ color: "#fff" }}>📞</span>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }}>
                    Telefon
                  </div>
                  <a
                    href={`tel:${SALON.phoneRaw}`}
                    style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", textDecoration: "none" }}
                  >
                    {SALON.phone}
                  </a>
                  <div style={{ marginTop: 10 }}>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="btn-pill"
                      style={{ border: "1.5px solid var(--border)" }}
                    >
                      {copied ? "✅ Kopyalandı" : "📋 Numarayı Kopyala"}
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    minWidth: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  <span style={{ color: "#fff" }}>🕐</span>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }}>
                    Çalışma Saatleri
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.6 }}>
                    Pazartesi - Cumartesi: {SALON.hours.weekdays}
                    <br />
                    Pazar: {SALON.hours.sunday}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                minHeight: 420,
                border: "1px solid var(--border)",
              }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SALON.address)}&z=17&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pelin Mercan Estetik ve Güzellik Konum"
              />
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(255,255,255,.9)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 12,
                  padding: "10px 16px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text)",
                  boxShadow: "0 4px 20px rgba(0,0,0,.1)",
                }}
              >
                📍 {SALON.addressShort}
              </div>
            </motion.div>
          </div>

          {/* Instagram kartı */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              marginTop: 32,
              background: "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F77737)",
              borderRadius: 20,
              padding: 28,
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 17 }}>
              📸 @pelinmercan.guzellik&apos;i takip edin
            </div>
            <a
              href={SALON.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ background: "#fff", color: "#833AB4", border: "none" }}
            >
              Takip Et
            </a>
          </motion.div>
        </div>
      </section>

      {/* Alt gradient CTA bandı */}
      <section
        className="section-pad"
        style={{
          padding: "72px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
        }}
      >
        <motion.div
          style={{ maxWidth: 860, margin: "0 auto" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px,3.4vw,38px)",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
            }}
          >
            Güzellik Yolculuğunuza Bugün Başlayın
          </h2>
          <p style={{ marginTop: 12, color: "rgba(255,255,255,.85)", fontSize: 15 }}>
            Sizi salonumuzda ağırlamaktan mutluluk duyarız.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <AnimatedRandevuBtn style={{ background: "#fff", color: "var(--primary-dark)", boxShadow: "0 4px 20px rgba(0,0,0,.15)" }} />
            <a
              href={`${SALON.whatsapp}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp
            </a>
            <a href={`tel:${SALON.phoneRaw}`} className="btn-outline" style={{ background: "rgba(255,255,255,.14)", borderColor: "rgba(255,255,255,.4)", color: "#fff" }}>
              📞 {SALON.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
