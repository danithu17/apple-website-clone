"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="bg-transparent">
      <MagneticCursor />

      <section
        ref={heroRef}
        id="home"
        className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center gap-16 px-6 pb-32 pt-24 sm:px-10 sm:pt-32 lg:flex-row lg:items-stretch"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 26,
          }}
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
            Introducing
          </p>
          <h1 className="max-w-xl text-[3.7rem] font-semibold tracking-tight text-black sm:text-[4.8rem] lg:text-[5.4rem] lg:tracking-tighter leading-[0.88]">
            A new quiet
            <span className="block">for your day.</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
            Luna wraps technology in softness. It mutes the noise, sharpens the
            details, and turns every glance into a moment of calm.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <GlowButton label="Buy Luna" primary />
            <GlowButton label="Watch the film" />
          </div>
          <p className="mt-6 text-xs text-black/45">
            From $24.99/mo. or $599 before trade‑in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 28,
          }}
          className="mt-14 flex flex-1 items-center justify-center lg:mt-0"
        >
          <motion.div
            style={{
              y: heroImageY,
              scale: heroImageScale,
            }}
            className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2.4rem] border-[0.5px] border-white/60 bg-white/10 shadow-[0_40px_160px_rgba(0,0,0,0.5)] backdrop-blur-md lg:max-w-sm"
          >
            <div className="pointer-events-none absolute inset-[1.6px] rounded-[2.3rem] border-[0.5px] border-white/40 bg-gradient-to-b from-white/55 via-white/15 to-white/0" />
            <img
              src="https://images.unsplash.com/photo-1518112166137-85f9979a43a5?auto=format&fit=crop&w=1200&q=80"
              alt="Luna device on a minimal desk"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-t from-black/45 via-transparent to-transparent mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-gradient-to-tr from-white/10 via-transparent to-white/40 mix-blend-screen" />
            <div className="absolute inset-x-0 bottom-7 flex items-center justify-between px-8 text-[11px] text-white/70">
              <span>Midnight</span>
              <span>Ultra chip</span>
              <span>256 GB</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT'S NEW */}
      <section id="new" className="bg-black/85 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 26,
            }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              What’s New
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:tracking-tight">
              A new iOS‑glass experience for the web.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              Floating glass, deep contrast, and motion that feels heavy and
              precise. Built to launch a product like it deserves a stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 110, damping: 26 }}
            className="-mx-6 mb-12 sm:-mx-10"
          >
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:px-10">
              <NewCard
                title="Liquid glass dock"
                copy="A floating, blurred dock with a living highlight that slides exactly like iOS."
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80"
              />
              <NewCard
                title="Scroll‑driven reveal"
                copy="Every element fades and scales up as you scroll. Smooth, heavy springs—no jitter."
                image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
              />
              <NewCard
                title="Premium glass tiles"
                copy="Bento cards with ultra‑thin borders, noise, and highlights that feel tactile."
                image="https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1400&q=80"
              />
              <NewCard
                title="Whitespace, tuned"
                copy="Big typography, calm rhythm, and breathing room—so the product feels expensive."
                image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
            <FeatureBentoCard
              title="Spatial sound that follows you."
              description="Immersive audio that anchors voices and instruments precisely where they should be—as you move."
              badge="Audio"
              className="md:col-span-2"
              image="https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1200&q=80"
            />
            <FeatureBentoCard
              title="Battery that forgets the day."
              description="A new cell chemistry that quietly coasts through your longest flights and deepest focus."
              badge="Endurance"
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
            />
            <FeatureBentoCard
              title="Glass, sculpted by light."
              description="Nano‑textured glass diffuses glare without dulling highlights, so content feels painted in air."
              badge="Materials"
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            />
            <FeatureBentoCard
              title="Ultra chip, barely awake."
              description="Custom silicon that sips power while listening for you—and surges instantly when you glance."
              badge="Silicon"
              className="md:col-span-2"
              image="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </div>
      </section>

      <section id="radio" className="bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 26,
            }}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
                Radio
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A launch film, in glass.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
              Keynote‑style storytelling with a floating playback bar and
              captions that reveal as you scroll.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
            className="glass-ios glass-edge noise relative overflow-hidden rounded-[2.4rem] p-3 sm:p-4"
          >
            <div className="relative overflow-hidden rounded-[2.1rem]">
              <img
                src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=2200&q=80"
                alt="Launch film still"
                className="h-[380px] w-full object-cover sm:h-[460px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent mix-blend-multiply" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <div className="glass-ios-dark glass-edge noise flex items-center justify-between gap-4 rounded-[1.6rem] px-5 py-4">
                  <div className="flex items-center gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
                      <span className="text-sm">▶</span>
                    </button>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Luna — The film
                      </p>
                      <p className="text-xs text-white/60">
                        1:42 • Glass, sound, silence
                      </p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-3 sm:flex">
                    <span className="text-xs text-white/60">00:18</span>
                    <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/15">
                      <div className="h-full w-[22%] rounded-full bg-white/55" />
                    </div>
                    <span className="text-xs text-white/60">01:42</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div id="library" className="grid gap-7 md:grid-cols-3">
            <ProductCard
              label="Luna Air"
              title="Weightless focus."
              copy="Featherlight, breathable, and tuned for long creative days."
              chip="Air"
              tag="New finish"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            />
            <ProductCard
              label="Luna Studio"
              title="For the deep work."
              copy="Reference‑grade sound with adaptive room profiles."
              chip="Studio"
              tag="Pro"
              image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
            />
            <ProductCard
              label="Luna Travel"
              title="Silence, everywhere."
              copy="Adaptive noise cancelation that learns the way you move."
              chip="Travel"
              tag="Best seller"
              image="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="bg-black/90 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              Compare
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Choose your Luna.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              A clean, Apple‑style comparison—trim, readable, and quietly
              confident.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            <CompareCard
              name="Luna Air"
              price="From $24.99/mo."
              highlights={["Featherlight", "All‑day comfort", "Balanced sound"]}
            />
            <CompareCard
              name="Luna Studio"
              price="From $34.99/mo."
              highlights={["Reference audio", "Adaptive room profile", "Pro finish"]}
              featured
            />
            <CompareCard
              name="Luna Travel"
              price="From $29.99/mo."
              highlights={["Noise cancelation", "Flight‑ready battery", "Smart modes"]}
            />
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 120, damping: 26 }}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
                Accessories
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                The finishing touches.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
              A curated set of minimal add‑ons—built like jewelry for your
              setup.
            </p>
          </motion.div>

          <div className="-mx-6 sm:-mx-10">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 sm:px-10">
              <AccessoryCard
                name="Woven case"
                price="$79"
                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80"
              />
              <AccessoryCard
                name="Charging stand"
                price="$129"
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80"
              />
              <AccessoryCard
                name="Travel pouch"
                price="$59"
                image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=80"
              />
              <AccessoryCard
                name="Glass cloth"
                price="$19"
                image="https://images.unsplash.com/photo-1520975682031-a5f1fe1c1fe8?auto=format&fit=crop&w=1400&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="search" className="bg-transparent">
        <div className="mx-auto max-w-6xl px-6 pb-28 pt-8 sm:px-10 sm:pb-24">
          <div className="glass-ios glass-edge noise mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-[2rem] px-6 py-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
                Search
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-black">
                Find your Luna.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                This is a placeholder search panel so the dock has a real
                destination—wire it to your product data next.
              </p>
            </div>
            <div className="hidden w-80 sm:block">
              <div className="rounded-full border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/50">
                Search products, finishes, accessories…
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type GlowButtonProps = {
  label: string;
  primary?: boolean;
};

function GlowButton({ label, primary }: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.06,
        y: -2,
      }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 22,
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-3.5 text-sm font-medium ${
        primary
          ? "bg-black text-white shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
          : "border border-black/10 bg-white/80 text-black shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.6),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.35),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2">
        {label}
        <span className="text-xs">›</span>
      </span>
    </motion.button>
  );
}

type FeatureBentoCardProps = {
  title: string;
  description: string;
  badge: string;
  image: string;
  className?: string;
};

function FeatureBentoCard({
  title,
  description,
  badge,
  image,
  className,
}: FeatureBentoCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });
  const springY = useSpring(rotateY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountX = -((y - centerY) / centerY) * 8;
    const rotateAmountY = ((x - centerX) / centerX) * 8;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 26,
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glass-ios-dark glass-edge noise group relative overflow-hidden rounded-[2rem] px-6 py-7 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.22),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(255,255,255,0.14),transparent_55%)]" />
      <div className="relative flex h-full flex-col gap-5">
        <div className="relative h-32 overflow-hidden rounded-[1.4rem] border-[0.5px] border-white/25 bg-white/5">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent mix-blend-multiply" />
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between text-[11px] text-white/55">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
              {badge}
            </span>
            <span className="h-[1px] w-10 bg-white/25" />
            <span>Adaptive</span>
          </div>
          <h3 className="text-base font-medium tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type ProductCardProps = {
  label: string;
  title: string;
  copy: string;
  chip: string;
  tag: string;
  image: string;
};

function ProductCard({
  label,
  title,
  copy,
  chip,
  tag,
  image,
}: ProductCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });
  const springY = useSpring(rotateY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountX = -((y - centerY) / centerY) * 6;
    const rotateAmountY = ((x - centerX) / centerX) * 6;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 26,
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="glass-ios glass-edge noise group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] px-7 py-8"
    >
      <div className="pointer-events-none absolute inset-0 opacity-75 [background:radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_100%_70%,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="relative flex flex-1 flex-col gap-6">
        <div className="relative h-32 overflow-hidden rounded-[1.4rem] border-[0.5px] border-black/5 bg-black/5">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent mix-blend-multiply" />
        </div>

        <div className="flex items-center justify-between text-[11px] text-black/55">
          <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
            {tag}
          </span>
          <span>{chip} chip</span>
        </div>
        <div className="mt-1">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
            {label}
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-black">
            {title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/60">{copy}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-[11px] text-black/55">
          <span>From $19.99/mo.</span>
          <motion.button
            whileHover={{ scale: 1.06, x: 2 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 22,
            }}
            className="inline-flex items-center gap-1 rounded-full bg-black px-3.5 py-1.5 text-[11px] font-medium text-white shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
          >
            Configure
            <span>›</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function NewCard({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 120, damping: 26 }}
      className="glass-ios-dark glass-edge noise snap-start shrink-0 w-[78vw] max-w-[460px] overflow-hidden rounded-[2rem] p-3 shadow-[0_30px_110px_rgba(0,0,0,0.55)]"
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <img src={image} alt={title} className="h-44 w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent mix-blend-multiply" />
      </div>
      <div className="px-2 pb-2 pt-5">
        <p className="text-sm font-medium tracking-tight text-white">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/65">{copy}</p>
      </div>
    </motion.div>
  );
}

function CompareCard({
  name,
  price,
  highlights,
  featured,
}: {
  name: string;
  price: string;
  highlights: string[];
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 120, damping: 26 }}
      className={`glass-ios-dark glass-edge noise relative overflow-hidden rounded-[2.2rem] px-7 py-8 ${
        featured ? "ring-1 ring-white/20" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.20),transparent_45%),radial-gradient(circle_at_100%_80%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              {name}
            </p>
            <p className="mt-2 text-sm text-white/60">{price}</p>
          </div>
          {featured ? (
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Best value
            </span>
          ) : null}
        </div>
        <div className="mt-6 space-y-3">
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-3 text-sm text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span>{h}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="w-full rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-black shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition hover:bg-white">
            Compare
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function AccessoryCard({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 120, damping: 26 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-ios glass-edge noise snap-start shrink-0 w-[72vw] max-w-[420px] overflow-hidden rounded-[2rem] p-3 shadow-[0_28px_100px_rgba(0,0,0,0.22)]"
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <img src={image} alt={name} className="h-52 w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent mix-blend-multiply" />
      </div>
      <div className="px-2 pb-2 pt-5">
        <p className="text-sm font-semibold tracking-tight text-black">{name}</p>
        <p className="mt-2 text-sm text-black/60">{price}</p>
      </div>
    </motion.div>
  );
}

function MagneticCursor() {
  // Disabled on home page – keep native cursor.
  return null;
}
