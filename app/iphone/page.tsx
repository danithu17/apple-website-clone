"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  LibrarySection,
  CompareSection,
  AccessoriesSection,
} from "../components/LandingSections";
import { Device3D } from "../components/Device3D";

export default function IPhonePage() {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const variants = {
    midnight: {
      label: "Midnight",
      accent: "#0f172a",
      gradient:
        "radial-gradient(circle at 10% 0%, rgba(15,23,42,0.6), transparent 55%), radial-gradient(circle at 90% 10%, rgba(15,23,42,0.4), transparent 55%)",
    },
    starlight: {
      label: "Starlight",
      accent: "#e5e7eb",
      gradient:
        "radial-gradient(circle at 10% 0%, rgba(254,249,195,0.55), transparent 55%), radial-gradient(circle at 90% 10%, rgba(209,213,219,0.55), transparent 55%)",
    },
    productRed: {
      label: "Product Red",
      accent: "#ff2d55",
      gradient:
        "radial-gradient(circle at 10% 0%, rgba(255,45,85,0.7), transparent 55%), radial-gradient(circle at 90% 10%, rgba(251,113,133,0.6), transparent 55%)",
    },
    silver: {
      label: "Silver",
      accent: "#e5e7eb",
      gradient:
        "radial-gradient(circle at 10% 0%, rgba(243,244,246,0.9), transparent 55%), radial-gradient(circle at 90% 10%, rgba(209,213,219,0.7), transparent 55%)",
    },
  } as const;

  type VariantKey = keyof typeof variants;
  const [active, setActive] = useState<VariantKey>("productRed");

  const activeVariant = variants[active];

  return (
    <div className="bg-transparent">
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:px-10 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
              iPhone
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:tracking-tighter leading-[0.9]">
              Glass, in motion.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
              A 3D hero that feels like Apple: soft light, clean edges, and a
              calm floating motion—wrapped in iOS 26 glass.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  if (experienceRef.current) {
                    experienceRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)] transition hover:bg-black/90"
              >
                Explore iPhone
              </button>
              <button className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-black shadow-[0_16px_50px_rgba(0,0,0,0.14)] backdrop-blur-md transition hover:bg-white/80">
                Watch the film
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
            ref={experienceRef}
            className="glass-ios glass-edge noise relative h-[420px] overflow-hidden rounded-[2.4rem] p-3 shadow-[0_40px_160px_rgba(0,0,0,0.25)] sm:h-[520px]"
          >
            <div
              className="absolute inset-0 opacity-80"
              style={{ backgroundImage: activeVariant.gradient }}
            />
            <Device3D accent={activeVariant.accent} className="relative h-full w-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent mix-blend-multiply" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4">
              <div className="flex gap-3 rounded-full bg-black/10 px-3 py-1.5 backdrop-blur-md">
                {(
                  Object.keys(variants) as VariantKey[]
                ).map((key) => {
                  const v = variants[key];
                  const selected = key === active;
                  const swatchColor =
                    key === "midnight"
                      ? "#020617"
                      : key === "starlight"
                      ? "#e5e7eb"
                      : key === "productRed"
                      ? "#ff2d55"
                      : "#f9fafb";
                  return (
                    <button
                      key={key}
                      onClick={() => setActive(key)}
                      className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium text-white/80 transition hover:text-white"
                      style={{
                        backgroundColor: selected ? "rgba(0,0,0,0.45)" : "transparent",
                      }}
                    >
                      <span
                        className="inline-block h-3.5 w-3.5 rounded-full border border-white/40"
                        style={{ backgroundColor: swatchColor }}
                      />
                      <span className="hidden sm:inline">{v.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LibrarySection />
      <CompareSection />
      <AccessoriesSection />
    </div>
  );
}

