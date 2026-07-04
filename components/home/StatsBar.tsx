"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = to / 40;
    const t = setInterval(() => {
      s += step;
      if (s >= to) {
        setV(to);
        clearInterval(t);
      } else setV(Math.round(s));
    }, 45);
    return () => clearInterval(t);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

function StatIcon({ icon }: { icon: string }) {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--bg-alt)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        margin: "0 auto 16px",
      }}
    >
      {icon}
    </div>
  );
}

const numberStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(28px, 3vw, 40px)",
  fontWeight: 700,
  color: "var(--primary-dark)",
  lineHeight: 1.1,
};

const labelStyle: CSSProperties = {
  color: "var(--text-muted)",
  fontSize: 14,
  marginTop: 6,
};

function StatCard({
  icon,
  children,
  label,
}: {
  icon: string;
  children: ReactNode;
  label: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" as const }}
      style={{ padding: "8px 12px" }}
    >
      <StatIcon icon={icon} />
      <div style={numberStyle}>{children}</div>
      <div style={labelStyle}>{label}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "#fff",
        padding: "56px 24px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="stats-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          textAlign: "center",
        }}
      >
        <StatCard icon="⭐" label={`${SALON.reviewCount} değerlendirme`}>
          4.7
        </StatCard>

        <StatCard icon="💬" label="mutlu müşteri yorumu">
          <Counter to={24} />
        </StatCard>

        <StatCard icon="📸" label="@pelinmercan.guzellik">
          <Counter to={3100} suffix="+" />
        </StatCard>

        <StatCard icon="📅" label="Pazartesi-Cumartesi">
          <Counter to={6} />
        </StatCard>
      </motion.div>
    </section>
  );
}
