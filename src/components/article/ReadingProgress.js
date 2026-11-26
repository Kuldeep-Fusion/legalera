"use client";

// ============================================================================
// READING PROGRESS BAR
// ============================================================================
// Shows a thin crimson line across the top of the screen showing how far
// down the article you have read!
// ============================================================================

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setProgress(pct);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-breaking transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
