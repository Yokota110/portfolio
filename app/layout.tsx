import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yokota Ishun | Full Stack SaaS Engineer",
  description:
    "Portfolio of Yokota Ishun, a Japan-based full stack engineer building SaaS, DX, EC, and AI-enabled web applications.",
  openGraph: {
    title: "Yokota Ishun | Full Stack SaaS Engineer",
    description:
      "Next.js, React, TypeScript, NestJS, PostgreSQL, AWS, Docker, and product-minded SaaS delivery.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
