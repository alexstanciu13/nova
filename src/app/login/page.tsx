import type { Metadata } from "next";
import Link from "next/link";
import NovaIcon from "@/components/NovaIcon";

export const metadata: Metadata = {
  title: "Autentificare — nova",
  description: "Conectează-te la contul tău nova.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#EEF2FF] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <NovaIcon size={36} variant="dark" />
            <span
              className="text-[#0D1F5C] font-display text-2xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              nova
            </span>
          </Link>
          <h1
            className="text-2xl font-bold text-[#0D1F5C] mt-5 mb-1"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Bine ai revenit
          </h1>
          <p className="text-[#6B7A9A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
            Conectează-te la contul tău nova
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-[#EEF2FF] shadow-sm p-8">
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-[#0D1F5C] mb-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                placeholder="tu@afacerea-ta.ro"
                className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] placeholder:text-[#6B7A9A]/50 focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  className="text-sm font-medium text-[#0D1F5C]"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Parolă
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#0051CC] hover:text-[#0D1F5C] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Ai uitat parola?
                </Link>
              </div>
              <input
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="w-full border border-[#EEF2FF] rounded-xl px-4 py-3 text-sm text-[#0D1F5C] focus:outline-none focus:border-[#0051CC] focus:ring-2 focus:ring-[#0051CC]/10 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0D1F5C] hover:bg-[#0051CC] text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-md mt-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Autentifică-te
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EEF2FF]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs text-[#6B7A9A]" style={{ fontFamily: "var(--font-body)" }}>
                sau
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-[#EEF2FF] hover:border-[#0D1F5C]/30 rounded-xl py-3 text-sm text-[#0D1F5C] font-medium transition-all hover:shadow-sm"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continuă cu Google
          </button>
        </div>

        <p className="text-center text-sm text-[#6B7A9A] mt-6" style={{ fontFamily: "var(--font-body)" }}>
          Nu ai cont?{" "}
          <Link href="/start" className="text-[#0051CC] hover:text-[#0D1F5C] font-semibold transition-colors">
            Încearcă gratuit 14 zile
          </Link>
        </p>
      </div>
    </div>
  );
}
