"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NovaIcon from "./NovaIcon";

const navLinks = [
  { label: "Cum funcționează", href: "/#how-it-works" },
  { label: "Prețuri", href: "/pricing" },
  { label: "Exemple", href: "/templates" },
  { label: "Resurse", href: "/resources" },
  { label: "Parteneri", href: "/partners" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EEF2FF]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <NovaIcon size={32} variant="dark" />
            <span
              className="font-display font-800 text-xl tracking-tight text-[#0D1F5C]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              nova
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors ${isScrolled ? "text-[#6B7A9A] hover:text-[#0D1F5C]" : "text-white hover:text-white/80"}`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={`font-body text-sm font-medium px-4 py-2 rounded-lg transition-colors ${isScrolled ? "text-[#0D1F5C] hover:text-[#0051CC]" : "text-white hover:text-white/80"}`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Autentificare
            </Link>
            <Link
              href="/start"
              className="bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-body text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Încearcă gratuit 14 zile
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-[#0D1F5C] hover:bg-[#EEF2FF]" : "text-white hover:bg-white/10"}`}
            aria-label="Deschide meniu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#EEF2FF] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[#0D1F5C] hover:text-[#0051CC] hover:bg-[#EEF2FF] font-body text-sm font-medium px-4 py-3 rounded-lg transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-[#EEF2FF] mt-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-[#0D1F5C] border border-[#0D1F5C] font-body text-sm font-medium px-4 py-2.5 rounded-lg transition-colors hover:bg-[#EEF2FF]"
              >
                Autentificare
              </Link>
              <Link
                href="/start"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#00C2FF] hover:bg-[#0051CC] text-[#0D1F5C] hover:text-white font-body text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
              >
                Încearcă gratuit 14 zile
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
