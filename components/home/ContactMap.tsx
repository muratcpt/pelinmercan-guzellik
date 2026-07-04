"use client";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, slideInRight } from "@/lib/animations";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

type ContactItem = {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "📍",
    label: "Adres",
    value: SALON.address,
    href: SALON.googleMapsUrl,
    external: true,
  },
  {
    icon: "📞",
    label: "Telefon",
    value: SALON.phone,
    href: `tel:${SALON.phoneRaw}`,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Hemen yazın",
    href: `${SALON.whatsapp}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`,
    external: true,
  },
  {
    icon: "🕐",
    label: "Çalışma Saatleri",
    value: `Pzt-Cmt ${SALON.hours.weekdays} · Pazar ${SALON.hours.sunday}`,
  },
];

function CardInner({ item }: { item: ContactItem }) {
  return (
    <>
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
        <span style={{ color: "#fff" }}>{item.icon}</span>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginBottom: 2 }}>
          {item.label}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.4 }}>
          {item.value}
        </div>
      </div>
    </>
  );
}

export default function ContactMap() {
  return (
    <section className="section-pad" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          style={{ textAlign: "center" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(28px,3vw,36px)", color: "var(--primary-dark)" }}>
            Bize Ulaşın
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px,4vw,44px)",
              fontWeight: 700,
              color: "var(--text)",
              marginTop: 4,
            }}
          >
            İletişim
          </h2>
        </motion.div>

        <div
          className="map-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 32, marginTop: 48, alignItems: "stretch" }}
        >
          <div className="contact-grid" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONTACT_ITEMS.map((item) =>
              item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="card"
                  whileHover={{ x: 4 }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    padding: 20,
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <CardInner item={item} />
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  className="card"
                  whileHover={{ x: 4 }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ padding: 20, display: "flex", gap: 14, alignItems: "center" }}
                >
                  <CardInner item={item} />
                </motion.div>
              )
            )}
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
              allowFullScreen
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            marginTop: 40,
            borderRadius: 20,
            padding: "32px 28px",
            background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            color: "#fff",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18 }}>Hemen randevunuzu alın</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <AnimatedRandevuBtn style={{ background: "#fff", color: "var(--primary-dark)", boxShadow: "0 4px 20px rgba(0,0,0,.15)" }} />
            <a
              href={`${SALON.whatsapp}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
