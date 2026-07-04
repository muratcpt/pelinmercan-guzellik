"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

const VALUES = [
  {
    icon: "🎓",
    title: "Uzman Ekip",
    desc: "Alanında deneyimli ve güncel tekniklere hakim uzman ekibimizle hizmet veriyoruz.",
  },
  {
    icon: "🧼",
    title: "Hijyen & Sterilizasyon",
    desc: "Tüm uygulamalarımızda hijyen ve sterilizasyon standartlarına titizlikle uyuyoruz.",
  },
  {
    icon: "💎",
    title: "Kişiye Özel Bakım",
    desc: "Her müşterimizin cilt ve vücut ihtiyacına özel bakım planı oluşturuyoruz.",
  },
  {
    icon: "📍",
    title: "Merkezi Konum",
    desc: "Çanakkale Merkez, İsmetpaşa Mahallesi'nde kolay ulaşılabilir bir konumdayız.",
  },
  {
    icon: "💬",
    title: "Şeffaf İletişim",
    desc: "Uygulama öncesinde ve sonrasında sizi her adımda bilgilendiriyoruz.",
  },
  {
    icon: "🌸",
    title: "Sıcak Karşılama",
    desc: "Salonumuza attığınız ilk adımdan itibaren kendinizi değerli hissetmenizi isteriz.",
  },
];

const STEPS = [
  {
    no: "1",
    title: "Danışma",
    desc: "Beklentilerinizi ve cilt/vücut ihtiyaçlarınızı birlikte değerlendiriyoruz.",
  },
  {
    no: "2",
    title: "Kişiye Özel Plan",
    desc: "Size özel bir bakım ve uygulama planı hazırlıyoruz.",
  },
  {
    no: "3",
    title: "Sonuç ve Takip",
    desc: "Uygulama sonrasında sonucu birlikte değerlendirip gerektiğinde takip ediyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        className="section-pad"
        style={{
          padding: "140px 24px 64px",
          textAlign: "center",
          background: "var(--bg-alt)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: 860, margin: "0 auto" }}
        >
          <p
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--primary-dark)",
              fontSize: "clamp(24px, 3vw, 32px)",
              margin: "0 0 8px",
            }}
          >
            Hikayemiz
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4.5vw, 48px)",
              color: "var(--text)",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Pelin Mercan Estetik ve Güzellik
          </h1>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 17,
              lineHeight: 1.7,
              marginTop: 20,
            }}
          >
            Çanakkale merkezde, hijyenik bir ortamda ve uzman ellerde; cildiniz,
            vücudunuz ve kendinize olan güveniniz için kişiye özel güzellik
            bakımları sunuyoruz.
          </p>
        </motion.div>
      </section>

      {/* ─── Bizi Tanıyın ─── */}
      <section className="section-pad" style={{ padding: "96px 24px" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/about-salon.jpg"
              alt="Pelin Mercan Estetik ve Güzellik salon içi"
              fill
              style={{ objectFit: "cover" }}
            />

            <div
              className="about-float-badge"
              style={{
                position: "absolute",
                bottom: -16,
                left: 24,
                background: "#fff",
                borderRadius: 16,
                padding: "12px 18px",
                boxShadow: "0 12px 32px var(--shadow)",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                ⭐ {SALON.rating} Google Puanı
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                {SALON.reviewCount} değerlendirme
              </div>
            </div>

            <div
              className="about-float-location"
              style={{
                position: "absolute",
                top: 20,
                right: -16,
                background: "rgba(255,255,255,.75)",
                backdropFilter: "blur(10px)",
                borderRadius: 14,
                padding: "10px 16px",
                boxShadow: "0 8px 24px var(--shadow)",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              📍 {SALON.addressShort}
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-dark)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                margin: "0 0 8px",
              }}
            >
              Bizi Tanıyın
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.4vw, 38px)",
                color: "var(--text)",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Güzelliğinizi Ortaya Çıkarıyoruz
            </h2>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginTop: 20 }}>
              Pelin Mercan Estetik ve Güzellik, Çanakkale&apos;de sunduğu çeşitli
              güzellik bakımları ile fark yaratıyor. Müşterilerine daha
              pürüzsüz ve sıkı bir cilt, daha kendinden emin bir vücut ve genel
              olarak daha sağlıklı bir görünüm vaat ediyor.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginTop: 16 }}>
              Salonumuzun kalbinde her zaman müşteri memnuniyeti yer alıyor.
              Müşterilerimiz Pelin Hanım&apos;ın hijyen ve profesyonelliğine,
              güler yüzüne ve titiz çalışmasına güveniyor; her ziyaretinizde
              kendinizi rahat ve değerli hissetmenizi amaçlıyoruz.
            </p>

            <div style={{ marginTop: 32 }}>
              <AnimatedRandevuBtn />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Değerlerimiz ─── */}
      <section
        className="section-pad"
        style={{ padding: "96px 24px", background: "var(--bg-alt)" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
          >
            <p
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-dark)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                margin: "0 0 8px",
              }}
            >
              Neye İnanıyoruz
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.4vw, 38px)",
                color: "var(--text)",
                margin: 0,
              }}
            >
              Değerlerimiz
            </h2>
          </motion.div>

          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              marginTop: 48,
            }}
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="card"
                style={{ padding: "28px 24px" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--bg-alt)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 16,
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 19,
                    color: "var(--text)",
                    margin: "0 0 8px",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Süreç ─── */}
      <section className="section-pad" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}
          >
            <p
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-dark)",
                fontSize: "clamp(22px, 2.4vw, 28px)",
                margin: "0 0 8px",
              }}
            >
              Nasıl Çalışıyoruz
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.4vw, 38px)",
                color: "var(--text)",
                margin: 0,
              }}
            >
              Bakım Sürecimiz
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 20,
              marginTop: 56,
            }}
          >
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  flex: "1 1 260px",
                  maxWidth: 320,
                }}
              >
                <motion.div
                  variants={fadeUp}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      boxShadow: "0 8px 24px var(--shadow)",
                      flexShrink: 0,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 19,
                      color: "var(--text)",
                      margin: "16px 0 8px",
                      textAlign: "center",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </motion.div>

                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      alignSelf: "center",
                      fontSize: 22,
                      color: "var(--primary)",
                      opacity: 0.5,
                      marginTop: 14,
                    }}
                  >
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="section-pad"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #B8849A, #9A6A82, #C8B5D0)",
          padding: "96px 24px",
        }}
      >
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              fontSize: 28,
              color: "#fff",
              margin: "0 0 8px",
            }}
          >
            Bizi Tanımaya Hazır mısınız
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "#fff",
              fontSize: "clamp(26px, 3.6vw, 40px)",
              margin: 0,
            }}
          >
            Sizi Salonumuzda Ağırlamak İsteriz
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.9)",
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            {SALON.addressShort} adresindeki salonumuzda, size özel bir bakım
            deneyimi için randevunuzu oluşturun.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            <AnimatedRandevuBtn size="lg" />
            <a
              href={`${SALON.whatsapp}?text=${encodeURIComponent(
                "Merhaba, Pelin Mercan Estetik ve Güzellik hakkında bilgi almak istiyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 WhatsApp&apos;tan Yazın
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
