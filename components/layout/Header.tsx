"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SALON, NAV_LINKS } from "@/lib/data";
import { fadeUp, staggerContainerFast } from "@/lib/animations";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";
import PhoneWidget from "@/components/ui/PhoneWidget";

const HEADER_HEIGHT = 76;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;
  // Menü açıkken veya iç sayfalarda/scroll sonrası her zaman opak zemin.
  const solid = !isTransparent || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken sayfa scroll'unu kilitle.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mobileLinks = [...NAV_LINKS, { href: "/randevu", label: "Randevu Al" }];

  const isActiveLink = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: HEADER_HEIGHT,
          transition: "all .35s ease",
          background: solid ? "rgba(253,248,245,.96)" : "transparent",
          backdropFilter: solid ? "blur(18px)" : "none",
          WebkitBackdropFilter: solid ? "blur(18px)" : "none",
          borderBottom: solid ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: solid ? "0 4px 24px rgba(180,120,150,.12)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: ".01em",
              color: solid ? "var(--text)" : "#fff",
              textShadow: solid ? "none" : "0 2px 12px rgba(0,0,0,.35)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "color .35s ease, text-shadow .35s ease",
              flexShrink: 0,
            }}
          >
            {SALON.shortName}
          </Link>

          {/* Masaüstü nav */}
          <nav
            className="header-desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 28 }}
          >
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    fontSize: 15,
                    fontWeight: active ? 700 : 500,
                    color: solid ? (active ? "var(--primary-dark)" : "var(--text)") : "#fff",
                    opacity: solid ? 1 : active ? 1 : 0.88,
                    textShadow: solid ? "none" : "0 2px 10px rgba(0,0,0,.35)",
                    textDecoration: "none",
                    paddingBottom: 4,
                    borderBottom: active
                      ? `2px solid ${solid ? "var(--primary-dark)" : "#fff"}`
                      : "2px solid transparent",
                    transition: "color .25s ease, opacity .25s ease, border-color .25s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Masaüstü CTA */}
          <div
            className="header-desktop-cta"
            style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}
          >
            <PhoneWidget variant={isTransparent ? "dark" : "light"} size="sm" />
            <AnimatedRandevuBtn size="sm" />
          </div>

          {/* Hamburger — sadece mobilde görünür (CSS class hallediyor) */}
          <button
            type="button"
            className="header-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "none",
              background: "transparent",
              color: solid ? "var(--text)" : "#fff",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobil menü paneli */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" as const }}
            style={{
              position: "fixed",
              top: HEADER_HEIGHT,
              left: 0,
              right: 0,
              zIndex: 49,
              overflow: "hidden",
              background: "var(--bg)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 16px 32px rgba(61,43,53,.16)",
            }}
          >
            <motion.div
              variants={staggerContainerFast}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "20px 24px 28px",
              }}
            >
              {mobileLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <motion.div key={link.href} variants={fadeUp}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        fontSize: 17,
                        fontWeight: active ? 700 : 500,
                        color: active ? "var(--primary-dark)" : "var(--text)",
                        textDecoration: "none",
                        padding: "12px 4px",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={fadeUp} style={{ marginTop: 16 }}>
                <AnimatedRandevuBtn size="md" style={{ width: "100%", justifyContent: "center" }} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
