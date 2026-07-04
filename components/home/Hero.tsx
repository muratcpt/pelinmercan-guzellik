"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";
import PhoneWidget from "@/components/ui/PhoneWidget";
import { SALON, SERVICES } from "@/lib/data";

const LEAF_SVGS = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="66" viewBox="0 0 60 66"><path d="M30 2C14 14 4 30 8 46c2 8 10 16 22 18 12-2 20-10 22-18 4-16-6-32-22-44z" fill="COLOR"/><path d="M30 8v52" stroke="rgba(120,70,95,.35)" stroke-width="1.2"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="66" height="50" viewBox="0 0 66 50"><ellipse cx="33" cy="25" rx="31" ry="17" fill="COLOR"/><path d="M4 25h58" stroke="rgba(120,70,95,.3)" stroke-width="1.2"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="70" viewBox="0 0 40 70"><path d="M20 2C8 18 4 40 10 58c2 6 6 9 10 10 4-1 8-4 10-10 6-18 2-40-10-56z" fill="COLOR"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="60" viewBox="0 0 52 60"><ellipse cx="26" cy="30" rx="22" ry="28" fill="COLOR"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g fill="COLOR"><ellipse cx="30" cy="12" rx="9" ry="13"/><ellipse cx="30" cy="48" rx="9" ry="13"/><ellipse cx="12" cy="30" rx="13" ry="9"/><ellipse cx="48" cy="30" rx="13" ry="9"/><ellipse cx="17" cy="17" rx="10" ry="7" transform="rotate(-45 17 17)"/><ellipse cx="43" cy="43" rx="10" ry="7" transform="rotate(-45 43 43)"/></g><circle cx="30" cy="30" r="6" fill="rgba(201,168,124,.9)"/></svg>`,
];
const COLORS = [
  "rgba(255,240,246,.88)", "rgba(255,255,255,.80)", "rgba(253,225,240,.84)",
  "rgba(255,230,242,.78)", "rgba(240,215,230,.82)", "rgba(255,200,220,.75)", "rgba(255,245,250,.85)",
];

const LEAVES = Array.from({ length: 10 }, (_, i) => {
  const svg = LEAF_SVGS[i % LEAF_SVGS.length].replace(/COLOR/g, COLORS[i % COLORS.length]);
  const sway = (i % 2 === 0 ? 1 : -1) * (28 + (i % 4) * 14);
  const rot = (i % 2 === 0 ? 1 : -1) * (200 + (i % 3) * 75);
  return {
    id: i,
    dataUri: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    left: 4 + (i * 9.2) % 88,
    dur: `${9 + (i % 5) * 1.8}s`,
    delay: `${(i % 10) * 0.22}s`,
    scale: 1.1 + (i % 4) * 0.28,
    opacity: 0.82 + (i % 3) * 0.06,
    sx1: `${sway}px`,
    sx2: `${Math.round(sway * 0.6)}px`,
    r1: `${Math.round(rot * 0.5)}deg`,
    r2: `${rot}deg`,
  };
});

const FEATURED_SERVICES = SERVICES.filter((s) => s.popular).slice(0, 4);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
      <motion.div
        style={{ y: photoY, position: "absolute", inset: 0, willChange: "transform" }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image src="/images/hero-bg.jpg" alt="Pelin Mercan Estetik ve Güzellik" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
      </motion.div>

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(61,43,53,.75) 0%, rgba(61,43,53,.42) 50%, rgba(61,43,53,.10) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(253,248,245,.95) 0%, transparent 38%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(212,165,181,.16), rgba(200,181,208,.10))" }} />
      <div
        style={{
          position: "absolute", inset: 0, opacity: 0.22, pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {LEAVES.map((l) => (
        <div
          key={l.id}
          className="leaf-item"
          style={
            {
              left: `${l.left}%`,
              "--dur": l.dur, "--delay": l.delay, "--ls": l.scale, "--lo": l.opacity,
              "--sx1": l.sx1, "--sx2": l.sx2, "--r1": l.r1, "--r2": l.r2,
            } as React.CSSProperties
          }
        >
          <img src={l.dataUri} alt="" width="60" height="66" style={{ display: "block" }} />
        </div>
      ))}

      <motion.div
        style={{ opacity: fadeOut, position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 20px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 100,
            background: "rgba(255,255,255,.16)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.3)",
            color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 22,
          }}
        >
          ⭐ {SALON.rating.toFixed(1)} Google Puanı · {SALON.reviewCount} Değerlendirme · ✅ Doğrulanmış
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ fontFamily: "var(--font-script)", fontSize: "clamp(24px,3vw,32px)", color: "rgba(255,240,246,.92)", marginBottom: 8 }}
        >
          Güzelliğin En İyi Hali
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px,7vw,86px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, maxWidth: 860, textShadow: "0 2px 24px rgba(0,0,0,.2)" }}
        >
          Pelin Mercan <br />
          <em style={{ fontStyle: "italic", background: "linear-gradient(135deg, #F3D9E4, #E8D5C4)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Estetik ve Güzellik
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ marginTop: 20, maxWidth: 620, color: "rgba(255,255,255,.82)", fontSize: "clamp(15px,1.6vw,18px)", lineHeight: 1.6 }}
        >
          Çanakkale&apos;de Hydrafacial + Mercan Peeling, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleriyle
          güzelliğinizi ortaya çıkarıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 32 }}
        >
          <AnimatedRandevuBtn size="lg" />
          <Link
            href="/hizmetler"
            className="btn-outline"
            style={{ background: "rgba(255,255,255,.14)", borderColor: "rgba(255,255,255,.4)", color: "#fff" }}
          >
            Hizmetlerimiz
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 28, maxWidth: 640 }}
        >
          {FEATURED_SERVICES.map((s, i) => (
            <span
              key={s.id}
              className="animate-float"
              style={{
                animationDelay: `${i * 0.4}s`,
                display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 100,
                background: "rgba(255,255,255,.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.28)",
                color: "#fff", fontSize: 12.5, fontWeight: 600,
              }}
            >
              {s.icon} {s.name}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="hero-float-card" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", zIndex: 10, display: "none" }}>
        <PhoneWidget variant="dark" />
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "rgba(255,255,255,.75)", fontSize: 12, fontWeight: 600 }}
      >
        <span>Keşfet</span>
        <div style={{ width: 22, height: 34, borderRadius: 12, border: "1.5px solid rgba(255,255,255,.5)", display: "flex", justifyContent: "center", paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, background: "#fff" }} />
        </div>
      </motion.div>

      <div style={{ position: "absolute", bottom: 90, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.65)", fontSize: 12 }}>
        <MapPin size={13} /> {SALON.addressShort}
      </div>
    </section>
  );
}
