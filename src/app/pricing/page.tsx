import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Prețuri — Planuri WordPress gestionat pentru orice afacere",
  description:
    "Core 149 RON/lună, Growth 239 RON/lună, Pro 399 RON/lună. Toate includ WordPress gestionat, hosting și suport în română. 14 zile gratuit.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
