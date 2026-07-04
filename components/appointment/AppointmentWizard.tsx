"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { SALON, SERVICES, TIME_SLOTS } from "@/lib/data";

type StepData = {
  services: string[];
  date: Date | null;
  time: string;
  name: string;
  phone: string;
  note: string;
};

const MONTH_NAMES = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];
const DAY_NAMES = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];

const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
const getFirstDay = (y: number, m: number) => (new Date(y, m, 1).getDay() + 6) % 7;

const stepLabels = ["Hizmet", "Tarih & Saat", "Bilgiler"];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

export default function AppointmentWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<StepData>({
    services: [],
    date: null,
    time: "",
    name: "",
    phone: "",
    note: "",
  });

  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const toggleService = (id: string) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const goTo = (target: 1 | 2 | 3) => {
    setDir(target > step ? 1 : -1);
    setStep(target);
  };

  const goNext = () => {
    if (step < 3) goTo((step + 1) as 1 | 2 | 3);
  };
  const goBack = () => {
    if (step > 1) goTo((step - 1) as 1 | 2 | 3);
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const selectDate = (day: number) => {
    setData((prev) => ({ ...prev, date: new Date(viewYear, viewMonth, day), time: "" }));
  };

  const buildWA = () => {
    const names = data.services
      .map((id) => SERVICES.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    const dateStr = data.date
      ? data.date.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
      : "";
    const msg = `Merhaba, randevu almak istiyorum.\n\nHizmet: ${names}\nTarih: ${dateStr}\nSaat: ${data.time}\nAd: ${data.name}\nTel: ${data.phone}${
      data.note ? `\nNot: ${data.note}` : ""
    }`;
    return `${SALON.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  const handleConfirm = () => {
    window.open(buildWA(), "_blank");
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDay(viewYear, viewMonth);
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="card" style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      {/* Adım göstergesi */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 48 }}>
        {[1, 2, 3].map((s, idx) => (
          <div key={s} style={{ display: "flex", alignItems: "center", flex: idx < 2 ? 1 : "0 0 auto", maxWidth: idx < 2 ? 160 : undefined }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <motion.div
                animate={{
                  background: s <= step ? "var(--primary-dark)" : "var(--border)",
                  scale: s === step ? 1.1 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" as const }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s <= step ? "#fff" : "var(--text-muted)",
                  fontWeight: 700,
                  fontSize: 15,
                  flexShrink: 0,
                }}
              >
                {s < step ? <Check size={18} /> : s}
              </motion.div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: s <= step ? "var(--primary-dark)" : "var(--text-light)",
                  whiteSpace: "nowrap",
                }}
              >
                {stepLabels[idx]}
              </span>
            </div>
            {idx < 2 && (
              <div
                style={{
                  flex: 1,
                  height: 3,
                  background: "var(--border)",
                  borderRadius: 2,
                  margin: "0 8px 20px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.div
                  animate={{ width: step > s ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    background: "var(--primary-dark)",
                    borderRadius: 2,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ overflow: "hidden", position: "relative", minHeight: 360 }}>
        <AnimatePresence mode="wait" custom={dir}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" as const }}
            >
              <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)", marginBottom: 20 }}>
                {data.services.length === 0
                  ? "Devam etmek için en az bir hizmet seçin"
                  : `${data.services.length} hizmet seçildi`}
              </p>
              <div
                className="service-card-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}
              >
                {SERVICES.map((s) => {
                  const selected = data.services.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      className={`service-card ${selected ? "selected" : ""}`}
                      onClick={() => toggleService(s.id)}
                    >
                      {selected && (
                        <div className="service-card-check">
                          <Check size={12} color="#fff" />
                        </div>
                      )}
                      <div className="service-card-icon">{s.icon}</div>
                      <span style={{ fontSize: 13, fontWeight: 700, textAlign: "center", color: "var(--text)" }}>
                        {s.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" as const }}
            >
              <div className="wizard-date-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {/* Takvim */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <button
                      type="button"
                      onClick={prevMonth}
                      aria-label="Önceki ay"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1.5px solid var(--border)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ChevronLeft size={18} color="var(--text)" />
                    </button>
                    <span style={{ fontWeight: 700, fontSize: 16, color: "var(--text)", fontFamily: "var(--font-display)" }}>
                      {MONTH_NAMES[viewMonth]} {viewYear}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      aria-label="Sonraki ay"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1.5px solid var(--border)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <ChevronRight size={18} color="var(--text)" />
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 6 }}>
                    {DAY_NAMES.map((d) => (
                      <div
                        key={d}
                        style={{
                          textAlign: "center",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--text-light)",
                        }}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
                    {cells.map((day, idx) => {
                      if (day === null) return <div key={`empty-${idx}`} />;
                      const cellDate = new Date(viewYear, viewMonth, day);
                      const isSunday = cellDate.getDay() === 0;
                      const isPast = cellDate < startOfToday;
                      const isDisabled = isSunday || isPast;
                      const isSelected =
                        !!data.date &&
                        data.date.getFullYear() === viewYear &&
                        data.date.getMonth() === viewMonth &&
                        data.date.getDate() === day;
                      return (
                        <div
                          key={day}
                          className={`calendar-day ${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : ""}`}
                          onClick={() => !isDisabled && selectDate(day)}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Saat seçimi */}
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 16 }}>
                    Uygun Saatler
                  </p>
                  {data.date ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                      {TIME_SLOTS.map((t) => (
                        <div
                          key={t}
                          className={`time-slot ${data.time === t ? "selected" : ""}`}
                          onClick={() => setData((prev) => ({ ...prev, time: t }))}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                      Lütfen önce bir tarih seçin
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" as const }}
            >
              <div className="card" style={{ padding: 20, marginBottom: 24, background: "var(--bg-alt)" }}>
                <p style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 10 }}>
                  Randevu Özeti
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 6 }}>
                  <strong style={{ color: "var(--text)" }}>Hizmetler: </strong>
                  {data.services.length > 0
                    ? data.services
                        .map((id) => SERVICES.find((s) => s.id === id)?.name)
                        .filter(Boolean)
                        .join(", ")
                    : "—"}
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 6 }}>
                  <strong style={{ color: "var(--text)" }}>Tarih: </strong>
                  {data.date
                    ? data.date.toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "—"}
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  <strong style={{ color: "var(--text)" }}>Saat: </strong>
                  {data.time || "—"}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Ad Soyad"
                  value={data.name}
                  onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                />
                <input
                  className="input-field"
                  type="tel"
                  placeholder="Telefon Numaranız"
                  value={data.phone}
                  onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
                />
                <textarea
                  className="input-field"
                  placeholder="Eklemek istediğiniz not (opsiyonel)"
                  rows={3}
                  value={data.note}
                  onChange={(e) => setData((prev) => ({ ...prev, note: e.target.value }))}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigasyon */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 32, gap: 12 }}>
        <div>
          {step > 1 && (
            <button type="button" className="btn-outline" onClick={goBack}>
              ← Geri
            </button>
          )}
        </div>
        <div>
          {step < 3 && (
            <button
              type="button"
              className="btn-primary"
              onClick={goNext}
              disabled={
                (step === 1 && data.services.length === 0) ||
                (step === 2 && (!data.date || !data.time))
              }
              style={{
                opacity:
                  (step === 1 && data.services.length === 0) ||
                  (step === 2 && (!data.date || !data.time))
                    ? 0.5
                    : 1,
                cursor:
                  (step === 1 && data.services.length === 0) ||
                  (step === 2 && (!data.date || !data.time))
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Devam Et →
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              className="btn-whatsapp"
              onClick={handleConfirm}
              disabled={!data.name || !data.phone}
              style={{
                opacity: !data.name || !data.phone ? 0.5 : 1,
                cursor: !data.name || !data.phone ? "not-allowed" : "pointer",
              }}
            >
              💬 WhatsApp ile Onayla
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
