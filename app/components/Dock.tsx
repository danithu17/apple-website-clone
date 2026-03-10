"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type DockItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};

export function Dock() {
  const [scrolled, setScrolled] = useState(false);
  const activeTints: Record<string, string> = {
    "/": "#111111",
    "/store": "#0a84ff",
    "/iphone": "#ff2d55",
    "/support": "#34c759",
    "/search": "#111111",
    // legacy routes (kept working)
    "/new": "#0a84ff",
    "/radio": "#af52de",
    "/library": "#ff2d55",
  };
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: DockItem[] = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        href: "/",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M5.5 10.6 12 4.75l6.5 5.85V18a1.75 1.75 0 0 1-1.75 1.75H7.25A1.75 1.75 0 0 1 5.5 18v-7.4Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 19.25v-4.25a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        id: "store",
        label: "Store",
        href: "/store",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M6.8 9.5h10.4l-1.1 10.2a1.8 1.8 0 0 1-1.8 1.6H9.7a1.8 1.8 0 0 1-1.8-1.6L6.8 9.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M9 9.5a3 3 0 0 1 6 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        id: "iphone",
        label: "iPhone",
        href: "/iphone",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <rect
              x="7"
              y="3.9"
              width="10"
              height="16.2"
              rx="2.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M10 6.3h4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="12" cy="18.1" r="0.7" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "support",
        label: "Support",
        href: "/support",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M12 20.5a8.5 8.5 0 1 1 8.5-8.5c0 2.3-.95 4.38-2.48 5.88"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M9.2 9.6a3 3 0 0 1 5.9.7c0 2.1-2 2.4-2 3.7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="12.1" cy="16.9" r="0.8" fill="currentColor" />
          </svg>
        ),
      },
      {
        id: "search",
        label: "Search",
        href: "/search",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <circle
              cx="11"
              cy="11"
              r="4.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="m15 15 3.4 3.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
    []
  );

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="dock-scrim" />
      <div
        className={`glass-ios glass-edge noise mx-auto flex h-[68px] w-full items-center justify-between gap-1.5 rounded-[1.85rem] px-1.5 text-[11px] transition-all duration-200 ${
          scrolled
            ? "shadow-[0_40px_140px_rgba(0,0,0,0.30)]"
            : "shadow-[0_30px_110px_rgba(0,0,0,0.22)]"
        }`}
      >
        {items.map((item) => {
          const isActive = pathname === item.href;
          const tint = isActive ? activeTints[item.href] ?? "#ff2d55" : undefined;
          return (
            <motion.button
              key={item.id}
              onClick={() => {
                router.push(item.href);
              }}
              whileHover={{
                y: -1,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 140, damping: 22 }}
              className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-[1.45rem] py-2 text-[10px] font-medium transition ${
                isActive ? "" : "hover:bg-black/5"
              }`}
              aria-label={item.label}
            >
              {isActive ? (
                <motion.span
                  layoutId="dock-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 26,
                    mass: 0.7,
                  }}
                  className="absolute inset-0 rounded-[1.45rem]"
                  style={{
                    background: tint
                      ? `color-mix(in srgb, ${tint} 20%, transparent)`
                      : "rgba(0,0,0,0.04)",
                    boxShadow: tint
                      ? `0 0 0 1px color-mix(in srgb, ${tint} 55%, transparent), 0 10px 30px color-mix(in srgb, ${tint} 30%, transparent)`
                      : "0 0 0 1px rgba(0,0,0,0.12)",
                  }}
                />
              ) : null}

              <span className="flex h-6 w-6 items-center justify-center">
                <motion.span
                  className="relative transition-opacity"
                  animate={{
                    color: isActive ? tint ?? "#111111" : "rgba(0,0,0,0.62)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 22,
                    mass: 0.7,
                  }}
                >
                  {item.icon}
                </motion.span>
              </span>
              <span
                className="text-[10px] font-medium"
                style={{ color: isActive ? tint ?? "#111111" : "rgba(0,0,0,0.55)" }}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

