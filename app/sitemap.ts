import type { MetadataRoute } from "next";

const BASE = "https://pelinmercan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1.0, lastModified: new Date() },
    { url: `${BASE}/randevu`, changeFrequency: "monthly", priority: 1.0, lastModified: new Date() },
    { url: `${BASE}/hizmetler`, changeFrequency: "monthly", priority: 0.9, lastModified: new Date() },
    { url: `${BASE}/hakkimizda`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/iletisim`, changeFrequency: "monthly", priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/galeri`, changeFrequency: "weekly", priority: 0.7, lastModified: new Date() },
  ];
}
