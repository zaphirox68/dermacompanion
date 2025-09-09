import '../styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DermaCompanion – Dermatologie-Antworten in Stunden. Online.",
  description:
    "Lade Fotos hoch und erhalte in Stunden einen ärztlich geprüften Behandlungsplan – sicher, privat, EU-gehostet.",
  metadataBase: new URL("https://dermacompanion.com"),
  alternates: { canonical: "/" },
  applicationName: "DermaCompanion",
  openGraph: {
    title: "DermaCompanion – Dermatologie online in Stunden",
    description:
      "Board-zertifizierte Dermatologie, sicher in der EU gehostet. Warteliste jetzt beitreten.",
    url: "https://dermacompanion.com/",
    siteName: "DermaCompanion",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "DermaCompanion – Dermatologie online in Stunden",
    description:
      "Fotos hochladen, ärztlicher Review, Plan + e‑Rezept falls sinnvoll.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
