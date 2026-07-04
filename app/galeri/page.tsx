"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

const FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "cilt", label: "Cilt Bakımı" },
  { key: "kirpik", label: "Kirpik" },
  { key: "tirnak", label: "Tırnak" },
  { key: "salon", label: "Salon" },
  { key: "epilasyon", label: "Epilasyon" },
];

const overlayBtnStyle: React.CSSProperties = {
  position: "absolute",
  background: "rgba(255,255,255,.12)",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#fff",
};

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all" ? GALLERY : GALLERY.filter((item) => item.tag === activeFilter);

  const activeImage = selectedIndex !== null ? filtered[selectedIndex] : null;

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    setSelectedIndex(null);
  };

  const showPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null || filtered.length === 0) return prev;
      return (prev - 1 + filtered.length) % filtered.length;
    });
  };

  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null || filtered.length === 0) return prev;
      return (prev + 1) % filtered.length;
    });
  };

  return (
    <>
      {/* Hero */}
      <section
        className="section-pad"
        style={{ padding: "140px 24px 64px", textAlign: "center", background: "var(--bg-alt)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ maxWidth: 860, margin: "0 auto" }}
        >
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: 36,
              color: "var(--primary-dark)",
              display: "block",
              marginBottom: 8,
            }}
          >
            Portföyümüz
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "var(--text)",
              margin: "0 0 16px",
            }}
          >
            Galeri
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Salonumuzda gerçekleştirdiğimiz uygulamalardan ve elde ettiğimiz gerçek sonuçlardan
            kareler.
          </p>
        </motion.div>

        {/* Filtre pilleri */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginTop: 40,
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`btn-pill${activeFilter === f.key ? " active" : ""}`}
              onClick={() => handleFilterChange(f.key)}
              style={{ fontFamily: "inherit" }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Galeri Grid */}
      <motion.section
        className="section-pad"
        style={{ padding: "64px 24px 96px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {filtered.map((item, idx) => (
            <motion.div
              key={item.image}
              variants={fadeUp}
              onClick={() => setSelectedIndex(idx)}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "28px 14px 12px",
                  background: "linear-gradient(to top, rgba(0,0,0,.65), transparent)",
                }}
              >
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            onClick={() => setSelectedIndex(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,.9)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              aria-label="Kapat"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              style={{ ...overlayBtnStyle, top: 24, right: 24, width: 44, height: 44 }}
            >
              <X size={22} />
            </button>

            <button
              aria-label="Önceki fotoğraf"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              style={{
                ...overlayBtnStyle,
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
              }}
            >
              <ChevronLeft size={26} />
            </button>

            <button
              aria-label="Sonraki fotoğraf"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              style={{
                ...overlayBtnStyle,
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
              }}
            >
              <ChevronRight size={26} />
            </button>

            <motion.div
              key={activeImage.image}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(90vw, 900px)",
                height: "min(80vh, 900px)",
              }}
            >
              <Image
                src={activeImage.image}
                alt={activeImage.label}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
              />
            </motion.div>

            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              {selectedIndex !== null ? `${selectedIndex + 1} / ${filtered.length}` : ""}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section
        className="section-pad"
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ maxWidth: 640, margin: "0 auto" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 36px)",
              color: "#fff",
              margin: "0 0 24px",
            }}
          >
            Beğendiniz mi? Randevunuzu Alın
          </h2>
          <AnimatedRandevuBtn size="lg" />
        </motion.div>
      </section>
    </>
  );
}
