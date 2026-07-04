"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";

const CARD_TRANSITION = { duration: 0.25, ease: "easeOut" as const };

const trustPills = [
  `⭐ ${SALON.rating} Google Puanı`,
  "💬 Hızlı Yanıt",
  "🗓 Pzt-Cmt 09:00-20:00",
  "📍 Çanakkale Merkez",
];

export default function AppointmentCTA() {
  return (
    <section
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #B8849A, #9A6A82, #C8B5D0)",
        padding: "96px 24px",
      }}
    >
      {/* Dekoratif bloblar */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="animate-blob animation-delay-2000"
        style={{
          position: "absolute",
          bottom: -120,
          right: -80,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="animate-blob animation-delay-4000"
        style={{
          position: "absolute",
          top: "30%",
          right: "12%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="animate-blob animation-delay-2000"
        style={{
          position: "absolute",
          bottom: "12%",
          left: "18%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          filter: "blur(40px)",
        }}
      />

      {/* Nokta deseni overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />

      {/* İçerik */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: 30,
            color: "#fff",
            margin: "0 0 8px",
          }}
        >
          Güzellik Yolculuğunuz Başlıyor
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "#fff",
            fontSize: "clamp(28px, 4vw, 44px)",
            margin: 0,
          }}
        >
          Yerinizi Hemen Ayırtın
        </h2>

        <div
          className="action-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 48,
            textAlign: "left",
          }}
        >
          {/* Online Randevu */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={CARD_TRANSITION}
            style={{
              background: "rgba(255,255,255,.14)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              padding: 28,
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            <Link
              href="/randevu"
              style={{
                display: "block",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 16,
                }}
              >
                📅
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  margin: "0 0 8px",
                  color: "#fff",
                }}
              >
                Online Randevu
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,.85)",
                  margin: 0,
                }}
              >
                3 adımda kolayca randevu alın
              </p>
            </Link>
          </motion.div>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={CARD_TRANSITION}
            href={`${SALON.whatsapp}?text=${encodeURIComponent(
              "Merhaba, randevu almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#fff",
              background: "rgba(255,255,255,.14)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              padding: 28,
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                marginBottom: 16,
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                margin: "0 0 8px",
                color: "#fff",
              }}
            >
              WhatsApp
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,.85)",
                margin: 0,
              }}
            >
              Hemen yazın, hızlı yanıt alın
            </p>
          </motion.a>

          {/* Telefon */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={CARD_TRANSITION}
            href={`tel:${SALON.phoneRaw}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "#fff",
              background: "rgba(255,255,255,.14)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              padding: 28,
              border: "1px solid rgba(255,255,255,.25)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                marginBottom: 16,
              }}
            >
              📞
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                margin: "0 0 8px",
                color: "#fff",
              }}
            >
              Telefon
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,.85)",
                margin: 0,
              }}
            >
              {SALON.phone}
            </p>
          </motion.a>
        </div>

        {/* Güven pilleri */}
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 32,
          }}
        >
          {trustPills.map((pill) => (
            <span
              key={pill}
              style={{
                background: "rgba(255,255,255,.16)",
                borderRadius: 100,
                padding: "6px 14px",
                fontSize: 12.5,
                color: "#fff",
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
