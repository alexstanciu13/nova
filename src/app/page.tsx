import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import PricingPreviewSection from "@/components/home/PricingPreviewSection";
import VerticalsSection from "@/components/home/VerticalsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export const metadata: Metadata = {
  title: "nova — Website WordPress Gestionat, Creat cu AI în Câteva Minute",
  description:
    "Nova generează și lansează un website WordPress complet în câteva minute, cu AI. Hosting inclus, suport în română. Fără cunoștințe tehnice necesare.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PricingPreviewSection />
      <VerticalsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
