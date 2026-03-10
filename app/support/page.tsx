"use client";

import { motion } from "framer-motion";
import { SearchSection } from "../components/LandingSections";

export default function SupportPage() {
  return (
    <div className="bg-transparent">
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 sm:px-10 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 120, damping: 26 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            Support
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Help, in glass.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-base">
            Quick answers, guides, and setup support—styled like iOS 26.
          </p>
        </motion.div>
      </section>

      <SearchSection />

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-8 sm:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Getting started",
              d: "Set up Luna, personalize sound, and sync your devices.",
            },
            {
              t: "Account & billing",
              d: "Payments, subscriptions, and trade‑in status.",
            },
            {
              t: "Repairs & service",
              d: "Warranty, diagnostics, and service options.",
            },
          ].map((x) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 120, damping: 26 }}
              className="glass-ios glass-edge noise rounded-[2rem] px-7 py-7"
            >
              <p className="text-sm font-semibold tracking-tight text-black">
                {x.t}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {x.d}
              </p>
              <button className="mt-5 rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition hover:bg-black/90">
                Open
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

