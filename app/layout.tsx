import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMove | Professional Moving & Relocation Services",
  description: "SwiftMove - Full-service residential and commercial moving. Licensed movers, secure storage, and professional packing services. Free quotes available.",
  keywords: "moving company, movers, residential moving, commercial relocation, packing services, storage, long distance moving",
  authors: [{ name: "SwiftMove" }],
  openGraph: {
    title: "SwiftMove | Professional Moving & Relocation Services",
    description: "Full-service residential and commercial moving. Licensed movers, secure storage, and professional packing services.",
    type: "website",
    url: "https://swiftmove.com",
    siteName: "SwiftMove",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SwiftMove Professional Moving Company",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftMove | Professional Moving & Relocation Services",
    description: "Full-service residential and commercial moving. Licensed movers, secure storage, and professional packing services.",
    images: ["https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "SwiftMove",
    description: "Professional moving company offering residential, commercial, and long-distance moving services.",
    url: "https://swiftmove.com",
    telephone: "+15553456683",
    email: "info@swiftmove.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "890 Commerce Blvd",
      addressLocality: "Springfield",
      addressRegion: "IL",
      postalCode: "62701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7817,
      longitude: -89.6501,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2847",
    },
    sameAs: [
      "https://facebook.com/swiftmove",
      "https://instagram.com/swiftmove",
      "https://twitter.com/swiftmove",
      "https://linkedin.com/company/swiftmove",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}
