import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian Moving Co. | Premium Relocation Services",
  description: "Meridian Moving Co. — White-glove residential and commercial relocation. Licensed movers, climate storage, and custom packing. Chicago's premier moving company.",
  keywords: "moving company, premium movers, residential moving, commercial relocation, packing services, storage, long distance moving, Chicago movers",
  authors: [{ name: "Meridian Moving Co." }],
  openGraph: {
    title: "Meridian Moving Co. | Premium Relocation Services",
    description: "White-glove residential and commercial relocation. Chicago's premier moving company since 2010.",
    type: "website",
    url: "https://meridianmoving.com",
    siteName: "Meridian Moving Co.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Meridian Moving Co. — Premium Relocation Services",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Moving Co. | Premium Relocation Services",
    description: "White-glove residential and commercial relocation. Chicago's premier moving company since 2010.",
    images: ["https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=85"],
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
    name: "Meridian Moving Co.",
    description: "Premium relocation services for residential and commercial clients. White-glove handling, climate storage, and specialty transport.",
    url: "https://meridianmoving.com",
    telephone: "+15553456683",
    email: "hello@meridianmoving.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "890 Commerce Blvd",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60614",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9242,
      longitude: -87.6479,
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
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.97",
      reviewCount: "2847",
    },
    sameAs: [
      "https://facebook.com/meridianmoving",
      "https://instagram.com/meridianmoving",
      "https://linkedin.com/company/meridianmoving",
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
