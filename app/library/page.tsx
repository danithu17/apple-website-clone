"use client";

import {
  AccessoriesSection,
  CompareSection,
  LibrarySection,
  MagneticCursor,
} from "../components/LandingSections";

export default function LibraryPage() {
  return (
    <div className="bg-transparent">
      <MagneticCursor />
      <LibrarySection />
      <CompareSection />
      <AccessoriesSection />
    </div>
  );
}

