"use client";

import {
  HeroSection,
  WhatsNewSection,
} from "../components/LandingSections";

export default function StorePage() {
  return (
    <div className="bg-transparent">
      <HeroSection />
      <WhatsNewSection />
    </div>
  );
}

