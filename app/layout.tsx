import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMove | Professional Moving & Relocation Services",
  description: "SwiftMove - Full-service residential and commercial moving. Licensed movers, secure storage, and professional packing services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}