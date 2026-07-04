import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import ContactMap from "@/components/home/ContactMap";
import { SALON, SERVICES } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pelin Mercan Estetik ve Güzellik | Çanakkale — Hydrafacial, Lazer Epilasyon",
  description:
    "Çanakkale'de Hydrafacial + Mercan Peeling, lazer epilasyon, cilt bakımı, kirpik ve tırnak hizmetleri. Hemen randevu alın: 0531 720 86 55.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SALON.name,
  image: "/images/hero-bg.jpg",
  url: "https://pelinmercan.vercel.app",
  description:
    "Çanakkale'de Hydrafacial + Mercan Peeling, lazer epilasyon, akne ve leke tedavisi, bölgesel incelme, ipek kirpik, kirpik lifting, protez tırnak, manikür ve kaş tasarımı hizmetleri sunan güzellik salonu.",
  telephone: SALON.phoneRaw,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Emile Vitalis Sk. No:5 Kat:3 D:7",
    addressLocality: "Çanakkale",
    addressRegion: "Çanakkale",
    postalCode: "17010",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SALON.geo.lat,
    longitude: SALON.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(SALON.rating),
    reviewCount: String(SALON.reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Güzellik Hizmetleri",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
  sameAs: [SALON.instagram, SALON.facebook],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesGrid />
      <AppointmentCTA />
      <GalleryPreview />
      <Testimonials />
      <ContactMap />
    </>
  );
}
