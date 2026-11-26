// ============================================================================
// PRIVACY POLICY & TERMS PAGE ("/privacy")
// ============================================================================

export const metadata = {
  title: "Privacy Policy & Terms — LEGAL ERA",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 site-container py-10 max-w-4xl flex flex-col gap-6">
      <div className="border-b-2 border-primary pb-4">
        <span className="font-label text-label-md uppercase text-breaking">Legal &amp; Compliance</span>
        <h1 className="font-display text-display-md text-primary mt-1">
          Privacy Policy &amp; Terms of Use
        </h1>
        <p className="font-mono text-mono-sm text-on-surface-variant mt-1">
          Last Updated: 24 Nov 2026 · LEGAL ERA Media Pvt. Ltd.
        </p>
      </div>

      <section className="flex flex-col gap-4 font-body text-body-md text-on-surface leading-relaxed">
        <h2 className="font-headline text-headline-sm text-primary">1. Editorial &amp; Informational Purpose</h2>
        <p className="text-on-surface-variant">
          Articles, case summaries, and regulatory alerts published on LEGAL ERA are provided for informational and journalistic purposes only and do not constitute formal legal advice.
        </p>

        <h2 className="font-headline text-headline-sm text-primary mt-2">2. Subscriber Data &amp; Privacy</h2>
        <p className="text-on-surface-variant">
          We collect only the work email and billing details needed to deliver The Morning Legal Brief, digital magazine editions, and event passes in accordance with India&apos;s Digital Personal Data Protection (DPDP) standards.
        </p>

        <h2 className="font-headline text-headline-sm text-primary mt-2">3. Saved Reading List</h2>
        <p className="text-on-surface-variant">
          Bookmarked articles are stored locally in your own browser storage (`localStorage`) for instant access without requiring an external account.
        </p>
      </section>
    </main>
  );
}
