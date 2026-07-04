"use client";

import { useState } from "react";
import Link from "next/link";
import { SALON, NAV_LINKS, SERVICES } from "@/lib/data";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

// lucide-react bu sürümde marka ikonlarını içermiyor; lucide çizgi stiline
// uygun (stroke=currentColor, strokeWidth=2) inline SVG kullanılıyor.
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function HoverLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: "#fff",
        opacity: hover ? 1 : 0.7,
        textDecoration: "none",
        fontSize: 14.5,
        transition: "opacity .25s ease",
      }}
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(255,255,255,.1)",
        color: "#fff",
        opacity: hover ? 1 : 0.6,
        transition: "opacity .25s ease",
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <footer style={{ background: "var(--text)", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 0" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: 48,
          }}
        >
          {/* Marka */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              {SALON.shortName}
            </div>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                opacity: 0.7,
                maxWidth: 320,
                marginBottom: 22,
              }}
            >
              Çanakkale&apos;de Hydrafacial, lazer epilasyon ve daha fazlasıyla
              cildinize ve güzelliğinize özenle dokunuyoruz.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <SocialIcon href={SALON.instagram} label="Instagram">
                <InstagramIcon size={18} />
              </SocialIcon>
              <SocialIcon href={SALON.facebook} label="Facebook">
                <FacebookIcon size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* Sayfalar */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 17,
                color: "#fff",
                marginBottom: 18,
              }}
            >
              Sayfalar
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV_LINKS.map((link) => (
                <HoverLink key={link.href} href={link.href}>
                  {link.label}
                </HoverLink>
              ))}
              <HoverLink href="/randevu">Randevu Al</HoverLink>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 17,
                color: "#fff",
                marginBottom: 18,
              }}
            >
              Hizmetlerimiz
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {featuredServices.map((service) => (
                <HoverLink key={service.id} href="/hizmetler">
                  {service.name}
                </HoverLink>
              ))}
            </div>
          </div>

          {/* İletişim */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 17,
                color: "#fff",
                marginBottom: 18,
              }}
            >
              İletişim
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                opacity: 0.7,
                marginBottom: 12,
                maxWidth: 280,
              }}
            >
              {SALON.address}
            </p>
            <a
              href={`tel:${SALON.phoneRaw}`}
              style={{
                display: "block",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              {SALON.phone}
            </a>
            <p style={{ fontSize: 13.5, opacity: 0.6, marginBottom: 20 }}>
              Pzt-Cmt 09:00-20:00 · Pazar Kapalı
            </p>
            <AnimatedRandevuBtn size="sm" />
          </div>
        </div>

        {/* Alt bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.12)",
            marginTop: 48,
            padding: "20px 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            opacity: 0.6,
          }}
        >
          <span>
            © {new Date().getFullYear()} Pelin Mercan Estetik ve Güzellik. Tüm
            hakları saklıdır.
          </span>
          <span>{SALON.phone}</span>
        </div>
      </div>
    </footer>
  );
}
