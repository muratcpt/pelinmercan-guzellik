"use client";
import { motion } from "framer-motion";

interface Props {
  href?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  style?: React.CSSProperties;
}

export default function AnimatedRandevuBtn({ href = "/randevu", size = "md", label = "📅 Randevu Al", style: extra }: Props) {
  const padding = size === "lg" ? "17px 40px" : size === "sm" ? "10px 22px" : "13px 30px";
  const fontSize = size === "lg" ? 16 : size === "sm" ? 13 : 15;
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "relative", display: "inline-flex", alignItems: "center", gap: 8, padding,
        borderRadius: 100, background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
        color: "#fff", fontSize, fontWeight: 800, textDecoration: "none", overflow: "hidden", cursor: "pointer",
        boxShadow: "0 4px 20px rgba(184,132,154,.4)", border: "none", fontFamily: "inherit", ...extra,
      }}
    >
      <motion.span
        animate={{ x: ["-120%", "200%"] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
        style={{
          position: "absolute", inset: 0, width: "60%", skewX: "-15deg", pointerEvents: "none",
          borderRadius: "inherit",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,.32) 40%, rgba(255,255,255,.55) 50%, rgba(255,255,255,.32) 60%, transparent)",
        }}
      />
      <motion.span
        animate={{ scale: [1, 1.18], opacity: [0.45, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none",
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
    </motion.a>
  );
}
