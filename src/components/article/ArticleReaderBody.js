"use client";

// ============================================================================
// ARTICLE READER BODY (FONT SIZE + COPY CITATION)
// ============================================================================
// Lets readers pick Small / Medium / Large text size and copy the official
// case citation with 1 click!
// ============================================================================

import { useState } from "react";

export default function ArticleReaderBody({ sections, quote, citationText, citationId = "sec-citation" }) {
  const [fontSize, setFontSize] = useState("md");
  const [copiedCitation, setCopiedCitation] = useState(false);

  const textSizeClass =
    fontSize === "sm"
      ? "text-[15px] leading-[1.7]"
      : fontSize === "lg"
      ? "text-[19px] leading-[1.8]"
      : "text-[17px] leading-[1.75]";

  function handleCopyCitation() {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(citationText).catch(() => {});
    }
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Reader Text Size Bar */}
      <div className="flex items-center justify-between py-2 px-3.5 rounded-lg bg-surface-container-low border border-outline-variant">
        <span className="font-label text-[11px] uppercase tracking-wider text-on-surface-variant">
          Reading Comfort
        </span>
        <div className="flex items-center gap-1">
          {[
            { id: "sm", label: "A-" },
            { id: "md", label: "A" },
            { id: "lg", label: "A+" },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFontSize(opt.id)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
                fontSize === opt.id
                  ? "bg-primary text-white"
                  : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Article Paragraphs */}
      <div className={`max-w-prose flex flex-col gap-5 font-body text-on-surface ${textSizeClass}`}>
        {sections.map((sec, idx) => (
          <div key={sec.id} id={sec.id} className="flex flex-col gap-4">
            {idx > 0 && (
              <h2 className="font-headline text-headline-md text-primary mt-2">{sec.heading}</h2>
            )}
            {sec.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="text-pretty">
                {para}
              </p>
            ))}
            {idx === 0 && quote && (
              <blockquote className="my-2 pl-5 border-l-4 border-breaking bg-surface-container-low py-4 pr-4 rounded-r-lg font-headline text-headline-sm text-primary italic">
                {quote}
              </blockquote>
            )}
          </div>
        ))}

        {/* Reference / Citation Box with 1-click Copy */}
        <div
          id={citationId}
          className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="font-mono text-mono-sm text-on-surface">
            <strong>Reference:</strong> {citationText}
          </div>
          <button
            type="button"
            onClick={handleCopyCitation}
            className="shrink-0 px-3 py-1.5 rounded bg-primary text-white hover:bg-secondary font-label text-[11px] uppercase tracking-wider"
          >
            {copiedCitation ? "Copied!" : "Copy Citation"}
          </button>
        </div>
      </div>
    </div>
  );
}
