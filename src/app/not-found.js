// ============================================================================
// CUSTOM 404 NOT FOUND PAGE
// ============================================================================

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 site-container py-20 text-center flex flex-col items-center gap-4">
      <span className="px-3 py-1 rounded-sm bg-breaking text-white font-label text-label-md uppercase">
        404 · Page Not Found
      </span>
      <h1 className="font-display text-display-md text-primary">
        We Could Not Find That Legal Story
      </h1>
      <p className="font-body text-body-md text-on-surface-variant max-w-md">
        The link may have moved or expired. Return to the LEGAL ERA front page or search our archive.
      </p>
      <div className="flex items-center gap-3 mt-2">
        <Link
          href="/"
          className="px-5 py-2.5 rounded bg-primary text-white hover:bg-secondary font-label text-label-md uppercase"
        >
          Go to Homepage
        </Link>
        <Link
          href="/search"
          className="px-5 py-2.5 rounded border border-primary text-primary hover:bg-primary-container font-label text-label-md uppercase"
        >
          Search Archive
        </Link>
      </div>
    </main>
  );
}
