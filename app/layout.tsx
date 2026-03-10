import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Dock } from "./components/Dock";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apple-esque Landing",
  description: "A minimalist, premium Apple-style landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="mesh-gradient" />
          </div>
          <header className="sticky top-0 z-40 bg-transparent">
            {/* iOS-style status bar (mobile) */}
            <div className="mx-auto max-w-6xl px-4 pt-[max(10px,env(safe-area-inset-top))] sm:px-10">
              <div className="glass-ios glass-edge noise mx-auto flex h-9 w-full max-w-[520px] items-center justify-between rounded-full px-4 text-[11px] font-semibold text-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:hidden">
                <span>9:41</span>
                <span className="text-black/35">Luna</span>
                <span className="flex items-center gap-1.5 text-black/75">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 14.5v3.5M10 12.5v5.5M14 10.5v7.5M18 8.5v9.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 9.5a11 11 0 0 1 15 0M7.4 12.4a7 7 0 0 1 9.2 0M10.2 15.2a3 3 0 0 1 3.6 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect
                      x="5.2"
                      y="8"
                      width="13.8"
                      height="8"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M19.6 11v2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <rect
                      x="6.6"
                      y="9.4"
                      width="9.2"
                      height="5.2"
                      rx="1.4"
                      fill="currentColor"
                      opacity="0.18"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Premium glass top nav */}
            <nav className="glass-ios glass-edge noise mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between rounded-full px-5 text-xs text-black/70 shadow-[0_18px_70px_rgba(0,0,0,0.18)] sm:mt-4 sm:h-16 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight sm:text-base">
                  Luna
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-black/40 sm:inline-flex" />
                <span className="hidden text-[11px] tracking-[0.18em] text-black/35 sm:inline">
                  QUIET OBJECTS
                </span>
              </div>
              <div className="flex items-center gap-3 sm:gap-6">
                <button className="hidden text-[11px] font-medium text-black/65 transition hover:text-black sm:inline-flex">
                  Products
                </button>
                <button className="hidden text-[11px] font-medium text-black/65 transition hover:text-black sm:inline-flex">
                  Stories
                </button>
                <button className="hidden rounded-full border-[0.5px] border-white/70 bg-white/60 px-4 py-1.5 text-[11px] font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:bg-white/80 sm:inline-flex">
                  Sign in
                </button>

                {/* iOS-style actions on mobile */}
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-white/60 bg-white/35 text-black/70 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md transition hover:bg-white/50 sm:hidden">
                  <span className="text-lg leading-none">···</span>
                </button>
                <button className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-[0.5px] border-white/60 bg-white/35 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md transition hover:bg-white/50 sm:hidden">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-black/30 to-black/10" />
                </button>
              </div>
            </nav>
          </header>
          <main className="pb-28 sm:pb-24">{children}</main>

          <footer className="fixed inset-x-0 bottom-0 z-40 pb-[max(10px,env(safe-area-inset-bottom))]">
            <div className="mx-auto max-w-6xl px-4 sm:px-10">
              <Dock />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
