import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
  title: {
    default: "nova — Website WordPress Gestionat, Creat cu AI în Câteva Minute",
    template: "%s | nova",
  },
  description:
    "Nova generează și lansează un website WordPress complet în câteva minute, cu AI. Hosting inclus, suport în română. Fără cunoștințe tehnice necesare.",
  keywords: [
    "website wordpress",
    "creare site web",
    "ai website generator",
    "hosting romania",
    "wordpress romania",
    "site web afaceri",
  ],
  authors: [{ name: "nova" }],
  creator: "nova",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://nova.ro",
    siteName: "nova",
    title: "nova — Website WordPress Gestionat, Creat cu AI în Câteva Minute",
    description:
      "Nova generează și lansează un website WordPress complet în câteva minute, cu AI. Hosting inclus, suport în română.",
  },
  twitter: {
    card: "summary_large_image",
    title: "nova — Website WordPress Gestionat cu AI",
    description:
      "Website profesional în câteva minute. WordPress + hosting + suport român inclus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
