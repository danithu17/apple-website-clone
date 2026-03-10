"use client";

import { motion } from "framer-motion";

export default function IPadPage() {
  return (
    <div className="bg-transparent">
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-16 sm:px-10 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 120, damping: 26 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            iPad
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl lg:tracking-tighter leading-[0.9]">
            A canvas of glass.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-black/60 sm:text-base">
            (Next) A 3D iPad slab model + pencil hover micro‑interactions.
          </p>
        </motion.div>

        <div className="glass-ios glass-edge noise rounded-[2.4rem] px-8 py-10">
          <p className="text-sm font-semibold tracking-tight text-black">
            Coming next
          </p>
          <p className="mt-2 text-sm text-black/60">
            Scroll‑synced 3D rotation and a bento feature grid.
          </p>
        </div>
      </section>
    </div>
  );
}

