"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SALON, GALLERY } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const PREVIEW_ITEMS = GALLERY.slice(0, 6);

export default function GalleryPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-pad" style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ textAlign: "center", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}
      >
        <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(22px,3vw,30px)", color: "var(--primary-dark)", marginBottom: 6 }}>
          Portföyümüz
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "var(--text)" }}>
          Galeri
        </h2>
        <p style={{ marginTop: 14, color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
          Salonumuzdan ve uygulamalarımızdan kareler. Sonuçlarımızı ve çalışma ortamımızı yakından keşfedin.
        </p>
      </motion.div>

      <div
        className="gallery-preview-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: 260, gap: 14, marginTop: 48 }}
      >
        {PREVIEW_ITEMS.map((item, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={item.image}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                gridRow: item.big ? "span 2" : "span 1",
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <motion.div
                animate={{ scale: isHovered ? 1.06 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(61,43,53,.78) 0%, rgba(61,43,53,.15) 55%, transparent 100%)",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity .35s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 18,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    opacity: isHovered ? 1 : 0,
                    transition: "all .35s ease",
                  }}
                >
                  {item.label}
                </span>
                <Link
                  href="/randevu"
                  style={{
                    marginTop: 8,
                    color: "var(--accent)",
                    fontWeight: 600,
                    fontSize: 13.5,
                    display: "inline-block",
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    opacity: isHovered ? 1 : 0,
                    transition: "all .4s ease .05s",
                  }}
                >
                  Randevu Al →
                </Link>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "rgba(255,255,255,.85)",
                  borderRadius: 100,
                  padding: 6,
                  fontSize: 14,
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🔍
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 40 }}>
        <Link href="/galeri" className="btn-primary">
          Galeriyi Gör
        </Link>
        <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Instagram&apos;da Takip Et
        </a>
      </div>
    </section>
  );
}
