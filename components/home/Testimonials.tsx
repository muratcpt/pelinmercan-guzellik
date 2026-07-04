"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SALON, TESTIMONIALS } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section
      className="section-pad"
      style={{
        background: "var(--bg-alt)",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(180,120,150,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 32,
              color: "var(--primary-dark)",
              display: "block",
              marginBottom: 4,
            }}
          >
            Müşterilerimiz Ne Diyor
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 40px)",
              color: "var(--text)",
              margin: 0,
            }}
          >
            Yorumlar
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 18,
              padding: "8px 20px",
              borderRadius: 100,
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            ⭐ {SALON.rating} · {SALON.reviewCount} Google değerlendirmesi
          </div>
        </div>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 24,
            marginTop: 48,
            maxWidth: 1100,
            margin: "48px auto 0",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              className="card"
              style={{ padding: 28 }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: 48,
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg,var(--primary),var(--gold))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  lineHeight: 0.6,
                }}
              >
                &ldquo;
              </span>

              <div style={{ display: "flex", gap: 2, marginTop: 8 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>

              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--text)",
                  lineHeight: 1.7,
                  marginTop: 12,
                }}
              >
                {t.text}
              </p>

              <span
                className="btn-pill"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  fontSize: 13,
                  cursor: "default",
                }}
              >
                {t.services}
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--primary),var(--primary-dark))",
                    color: "#fff",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 14 }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    Google Yorumu ✅
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
