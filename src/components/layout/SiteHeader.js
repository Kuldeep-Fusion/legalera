"use client";

// ============================================================================
// MODERN NEWSROOM HEADER WITH DROPDOWNS & SAVED ARTICLES DRAWER
// ============================================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS, SITE_INFO } from "@/data/siteConfig";
import { BookmarkIcon, ChevronDownIcon, CloseIcon, MenuIcon, SearchIcon, ShareIcon } from "@/components/ui/Icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const [edition, setEdition] = useState("India");
  const [searchText, setSearchText] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [signedInUser, setSignedInUser] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [shareToast, setShareToast] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMegaRegion, setActiveMegaRegion] = useState("India");

  // Saved/Bookmarked articles stored in browser localStorage
  const [savedArticles, setSavedArticles] = useState([]);
  const [showSavedDrawer, setShowSavedDrawer] = useState(false);

  useEffect(() => {
    function loadSaved() {
      try {
        const raw = localStorage.getItem("legalera_saved_articles");
        setSavedArticles(raw ? JSON.parse(raw) : []);
      } catch {
        setSavedArticles([]);
      }
    }
    loadSaved();
    window.addEventListener("legalera-bookmarks-updated", loadSaved);
    return () => window.removeEventListener("legalera-bookmarks-updated", loadSaved);
  }, []);

  function removeSaved(slug) {
    const next = savedArticles.filter((a) => a.slug !== slug);
    setSavedArticles(next);
    try {
      localStorage.setItem("legalera_saved_articles", JSON.stringify(next));
      window.dispatchEvent(new Event("legalera-bookmarks-updated"));
    } catch {}
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    const cleanQuery = searchText.trim();
    if (!cleanQuery) return;
    setShowMobileSearch(false);
    router.push(`/search?q=${encodeURIComponent(cleanQuery)}`);
  }

  function handleSignInSubmit(e) {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSignedInUser(emailInput.split("@")[0]);
    setShowSignIn(false);
    setEmailInput("");
  }

  async function handleMobileShare(platform) {
    const url = typeof window !== "undefined" ? window.location.href : "https://legaleraonline.com";
    const title = typeof document !== "undefined" ? document.title : "LEGAL ERA";

    if (platform === "native" && typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or fallback to copy
      }
    }

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, "_blank", "noopener,noreferrer");
      return;
    }
    if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
      return;
    }
    if (platform === "x") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
      return;
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setShareToast("Link copied!");
    setTimeout(() => setShareToast(""), 2500);
  }

  return (
    <>
      {/* 1. Sleek Dark Ocean Top Strip */}
      <div className="bg-secondary text-white text-xs border-b border-white/10">
        <div className="site-container h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tabular-nums text-sky-100/80">
              {SITE_INFO.dateText}
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="uppercase tracking-wider text-[10px] font-bold text-accent">
                Edition
              </span>
              <button
                type="button"
                onClick={() => setEdition("India")}
                className={`text-[11px] font-bold transition-colors ${
                  edition === "India"
                    ? "text-white underline decoration-breaking decoration-2 underline-offset-4"
                    : "text-sky-100/60 hover:text-white"
                }`}
              >
                IN
              </button>
              <span className="text-white/25">/</span>
              <button
                type="button"
                onClick={() => setEdition("Global")}
                className={`text-[11px] font-bold transition-colors ${
                  edition === "Global"
                    ? "text-white underline decoration-breaking decoration-2 underline-offset-4"
                    : "text-sky-100/60 hover:text-white"
                }`}
              >
                GLOBAL
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/magazine"
              className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
            >
              E-Magazine
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link
              href="/about"
              className="hidden md:inline text-[11px] font-medium text-sky-100/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <div className="flex items-center gap-3 text-[11px] font-bold text-sky-100/80">
              <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
                IN
              </a>
              <a href="#x" aria-label="X" className="hover:text-white">
                X
              </a>
              <a href="#youtube" aria-label="YouTube" className="hover:text-white">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newspaper Masthead with Official Logo & Search */}
      <header className="bg-surface border-b border-outline-variant">
        <div className="site-container py-3 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/legalera-logo.png"
              alt="LEGAL ERA — Legal Media Group"
              className="h-9 sm:h-10 xl:h-11 w-auto object-contain"
            />
          </Link>

          {/* Integrated Pill Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden lg:flex items-center flex-1 max-w-[260px] xl:max-w-sm mx-2 relative"
          >
            <SearchIcon className="w-4 h-4 text-on-surface-variant absolute left-3 pointer-events-none" />
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search judgments, IBC, SEBI..."
              className="w-full pl-9 pr-14 py-1.5 rounded-full border border-outline-variant bg-surface-container-low text-on-surface font-body text-[13px] placeholder:text-on-surface-variant focus:bg-surface focus:border-primary focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1 px-2.5 py-1 rounded-full bg-primary text-white hover:bg-secondary font-label text-[10px] font-bold uppercase tracking-wide"
            >
              Go
            </button>
          </form>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setShowMobileSearch((prev) => !prev)}
              aria-label="Search LegalEra"
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-outline-variant bg-surface-container-low text-on-surface"
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            {/* Saved Articles Button */}
            <button
              type="button"
              onClick={() => setShowSavedDrawer(true)}
              aria-label="Saved Articles"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-outline-variant bg-surface text-primary hover:bg-primary-container font-label text-[11px] font-bold transition-colors"
            >
              <BookmarkIcon filled={savedArticles.length > 0} className="w-3.5 h-3.5 text-breaking" />
              <span className="hidden sm:inline">Saved</span>
              {savedArticles.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-breaking text-white text-[10px]">
                  {savedArticles.length}
                </span>
              )}
            </button>

            {signedInUser ? (
              <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-primary-container text-primary font-label text-label-md">
                {signedInUser}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setShowSignIn(true)}
                className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded border border-outline-variant bg-surface text-on-surface hover:border-primary hover:text-primary font-label text-label-md transition-colors"
              >
                Sign In
              </button>
            )}

            <Link
              href="/membership"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-breaking text-white hover:bg-breaking-dark font-label text-label-md uppercase tracking-wide transition-colors shadow-sm"
            >
              Subscribe
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-outline-variant text-on-surface"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Search Drawer */}
        {showMobileSearch && (
          <div className="lg:hidden bg-surface-container-low border-t border-outline-variant">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-2"
            >
              <input
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search judgments, acts, law firms..."
                autoFocus
                className="flex-1 px-3.5 py-2 rounded border border-outline bg-surface text-on-surface font-body text-body-sm focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-primary text-white font-label text-label-md"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>

      {/* 3. Sticky Section Bar (Desktop) */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:block sticky top-0 z-40 bg-surface border-b-2 border-primary shadow-sm"
      >
        <div className="site-container">
          <ul className="flex flex-wrap items-center gap-x-0.5 gap-y-0 whitespace-nowrap">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href.split("?")[0] && !item.href.includes("?");

              const hasDropdown = Boolean(item.subLinks || item.megaMenu);
              const activeRegionObj =
                item.megaMenu?.find((r) => r.region === activeMegaRegion) ||
                item.megaMenu?.[0];

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasDropdown) {
                      setOpenDropdown(item.label);
                      if (item.megaMenu) setActiveMegaRegion("India");
                    }
                  }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`inline-flex items-center gap-1 px-2.5 py-2.5 font-label text-[13px] font-bold tracking-tight border-b-[3px] transition-colors ${
                      isActive
                        ? "border-breaking text-breaking"
                        : item.isHighlight
                        ? "border-transparent text-accent-dark hover:text-breaking hover:border-breaking/40"
                        : "border-transparent text-on-surface hover:text-breaking hover:border-breaking/40"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && <ChevronDownIcon className="w-3.5 h-3.5 opacity-60" />}
                  </Link>

                  {/* Two-Pane Regional Mega Menu (for News) */}
                  {item.megaMenu && openDropdown === item.label && activeRegionObj && (
                    <div className="hidden md:flex absolute left-0 top-full w-[580px] lg:w-[640px] bg-surface border border-outline-variant rounded-b-xl shadow-2xl overflow-hidden z-50">
                      {/* Left Column: Regions with Symbols */}
                      <div className="w-48 bg-surface border-r border-outline-variant py-2 shrink-0">
                        {item.megaMenu.map((reg) => {
                          const isSelected = reg.region === activeRegionObj.region;
                          return (
                            <Link
                              key={reg.region}
                              href={reg.href}
                              onMouseEnter={() => setActiveMegaRegion(reg.region)}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-center justify-between px-4 py-2 font-label text-[12px] font-bold uppercase tracking-wide transition-colors ${
                                isSelected
                                  ? "bg-secondary text-white"
                                  : "text-on-surface hover:bg-surface-container-low hover:text-primary"
                              }`}
                            >
                              <span className="inline-flex items-center gap-2.5">
                                <span aria-hidden="true" className="text-[14px] leading-none">
                                  {reg.symbol}
                                </span>
                                <span>{reg.region}</span>
                              </span>
                              <span
                                aria-hidden="true"
                                className={`text-[13px] leading-none ${
                                  isSelected ? "text-accent" : "text-on-surface-variant/40"
                                }`}
                              >
                                &rsaquo;
                              </span>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Right Panel: Selected Region Categories Grid */}
                      <div className="flex-1 bg-gradient-to-br from-secondary via-primary to-[#0B3960] text-white p-5 flex flex-col justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-3">
                            <span className="inline-flex items-center gap-2 font-label text-[11px] font-bold uppercase tracking-widest text-accent">
                              <span aria-hidden="true" className="text-[14px]">
                                {activeRegionObj.symbol}
                              </span>
                              <span>{activeRegionObj.region} Desk</span>
                            </span>
                            <Link
                              href={activeRegionObj.href}
                              onClick={() => setOpenDropdown(null)}
                              className="font-label text-[10.5px] font-bold uppercase tracking-wider text-sky-100 hover:text-accent transition-colors"
                            >
                              View All →
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {activeRegionObj.subLinks.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setOpenDropdown(null)}
                                className="px-2.5 py-2 rounded-md font-label text-[12px] font-semibold uppercase tracking-wide text-white/95 hover:bg-white/10 hover:text-accent transition-colors whitespace-normal leading-snug"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-sky-100/70">
                          <span>Curated regional legal intelligence</span>
                          <Link
                            href="/search"
                            onClick={() => setOpenDropdown(null)}
                            className="font-semibold text-accent hover:text-white"
                          >
                            Search Archive →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Standard Compact Dropdown Sub-menu (Articles, Law Firms, Legal Era TV) */}
                  {item.subLinks && !item.megaMenu && openDropdown === item.label && (
                    <div className="hidden md:block absolute left-0 top-full w-72 bg-surface border border-outline-variant rounded-b-xl shadow-xl py-2 z-50 max-h-[420px] overflow-y-auto">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 font-label text-[12px] font-bold uppercase tracking-wide text-on-surface hover:bg-surface-container-low hover:text-breaking transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 4. Professional Mobile Slide-Out Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-secondary/60 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar Panel */}
          <aside
            aria-label="Mobile Sidebar Menu"
            className="relative z-10 w-[84%] max-w-[320px] h-full bg-surface shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Sidebar Top Header */}
            <div className="p-4 border-b border-outline-variant bg-surface flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center"
                >
                  <img
                    src="/images/legalera-logo.png"
                    alt="LEGAL ERA"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full bg-surface-container-low border border-outline-variant flex items-center justify-center text-on-surface hover:text-breaking"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Edition & Account Strip */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="inline-flex rounded-full bg-surface-container p-0.5 border border-outline-variant">
                  <button
                    type="button"
                    onClick={() => setEdition("India")}
                    className={`px-2.5 py-1 rounded-full font-label text-[10px] font-bold uppercase transition-colors ${
                      edition === "India"
                        ? "bg-primary text-white"
                        : "text-on-surface-variant"
                    }`}
                  >
                    India
                  </button>
                  <button
                    type="button"
                    onClick={() => setEdition("Global")}
                    className={`px-2.5 py-1 rounded-full font-label text-[10px] font-bold uppercase transition-colors ${
                      edition === "Global"
                        ? "bg-primary text-white"
                        : "text-on-surface-variant"
                    }`}
                  >
                    Global
                  </button>
                </div>

                {signedInUser ? (
                  <span className="px-2.5 py-1 rounded-full bg-primary-container text-primary font-label text-[11px] font-bold">
                    {signedInUser}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowSignIn(true);
                    }}
                    className="px-3 py-1 rounded-full border border-primary text-primary font-label text-[11px] font-bold"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar Scrollable Navigation */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
              <div>
                <span className="px-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Sections
                </span>
                <ul className="mt-2 flex flex-col gap-0.5">
                  {NAV_LINKS.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href.split("?")[0] && !item.href.includes("?");
                    const isSubOpen = mobileSubOpen === item.label;
                    const mobileSubItems =
                      item.subLinks ||
                      (item.megaMenu
                        ? item.megaMenu.map((reg) => ({
                            label: `${reg.symbol} ${reg.region}`,
                            href: reg.href,
                          }))
                        : null);

                    return (
                      <li key={item.label} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex-1 px-3 py-2.5 rounded-lg font-body text-[14px] font-semibold transition-colors ${
                              isActive
                                ? "bg-breaking-container text-breaking font-bold"
                                : "text-on-surface hover:bg-surface-container-low hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>

                          {mobileSubItems && (
                            <button
                              type="button"
                              onClick={() =>
                                setMobileSubOpen(isSubOpen ? null : item.label)
                              }
                              aria-label={`Toggle ${item.label} submenu`}
                              className="p-2 text-on-surface-variant hover:text-primary"
                            >
                              <ChevronDownIcon
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isSubOpen ? "rotate-180 text-breaking" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {mobileSubItems && isSubOpen && (
                          <div className="ml-4 pl-3 my-1 border-l-2 border-primary/20 flex flex-col gap-0.5">
                            {mobileSubItems.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 rounded-md font-body text-[13px] font-medium text-on-surface-variant hover:text-breaking hover:bg-surface-container-low"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-outline-variant pt-4">
                <span className="px-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  More
                </span>
                <div className="mt-2 flex flex-col gap-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowSavedDrawer(true);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-lg font-body text-[13.5px] font-medium text-on-surface hover:bg-surface-container-low"
                  >
                    <span>Saved Reading List</span>
                    {savedArticles.length > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-breaking text-white text-[10px] font-bold">
                        {savedArticles.length}
                      </span>
                    )}
                  </button>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg font-body text-[13.5px] font-medium text-on-surface hover:bg-surface-container-low"
                  >
                    About &amp; Contact
                  </Link>
                  <Link
                    href="/advertise"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg font-body text-[13.5px] font-medium text-on-surface hover:bg-surface-container-low"
                  >
                    Advertise With Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Pinned Bottom: Share Option */}
            <div className="border-t border-outline-variant bg-surface-container-low p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <ShareIcon className="w-3.5 h-3.5 text-breaking" />
                  <span>Share LEGAL ERA</span>
                </span>
                {shareToast && (
                  <span className="font-mono text-[11px] font-semibold text-success">
                    {shareToast}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => handleMobileShare("whatsapp")}
                  className="py-2 rounded-lg bg-white border border-outline-variant hover:border-primary text-on-surface font-label text-[11px] font-bold text-center transition-colors"
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileShare("linkedin")}
                  className="py-2 rounded-lg bg-white border border-outline-variant hover:border-primary text-on-surface font-label text-[11px] font-bold text-center transition-colors"
                >
                  LinkedIn
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileShare("x")}
                  className="py-2 rounded-lg bg-white border border-outline-variant hover:border-primary text-on-surface font-label text-[11px] font-bold text-center transition-colors"
                >
                  X
                </button>
                <button
                  type="button"
                  onClick={() => handleMobileShare("native")}
                  className="py-2 rounded-lg bg-primary text-white hover:bg-secondary font-label text-[11px] font-bold text-center transition-colors"
                >
                  Share
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Saved Articles Drawer */}
      {showSavedDrawer && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div className="bg-surface w-full max-w-md h-full p-6 flex flex-col gap-4 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-outline-variant pb-3">
              <div className="flex items-center gap-2">
                <BookmarkIcon filled={true} className="w-5 h-5 text-breaking" />
                <h2 className="font-headline text-headline-md text-primary">
                  Saved Reading List ({savedArticles.length})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowSavedDrawer(false)}
                aria-label="Close saved drawer"
                className="text-on-surface-variant hover:text-on-surface"
              >
                <CloseIcon />
              </button>
            </div>

            {savedArticles.length === 0 ? (
              <div className="py-12 text-center flex flex-col items-center gap-3 text-on-surface-variant">
                <BookmarkIcon className="w-10 h-10 text-outline" />
                <p className="font-body text-body-md">No saved articles yet.</p>
                <p className="font-body text-body-sm">
                  Open any article and click the bookmark icon to save it here for offline/quick reading!
                </p>
              </div>
            ) : (
              <div className="flex flex-col divide-y divide-outline-variant">
                {savedArticles.map((art) => (
                  <div key={art.slug} className="py-3.5 flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="font-label text-[10px] font-bold uppercase text-breaking">
                        {art.category}
                      </span>
                      <Link
                        href={`/news/${art.slug}`}
                        onClick={() => setShowSavedDrawer(false)}
                        className="font-headline text-[15px] font-bold text-on-surface hover:text-primary hover:underline"
                      >
                        {art.title}
                      </Link>
                      <span className="font-mono text-[11px] text-on-surface-variant">{art.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeSaved(art.slug)}
                      className="text-xs font-label text-on-surface-variant hover:text-breaking shrink-0"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-surface border border-outline-variant rounded-xl max-w-md w-full p-6 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-outline-variant pb-3">
              <h2 className="font-headline text-headline-md text-primary">Sign In to LEGAL ERA</h2>
              <button
                type="button"
                onClick={() => setShowSignIn(false)}
                aria-label="Close sign in"
                className="text-on-surface-variant hover:text-on-surface"
              >
                <CloseIcon />
              </button>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant">
              Enter your email to access saved stories, morning briefings, and member archives.
            </p>
            <form onSubmit={handleSignInSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="counsel@firm.com"
                className="w-full px-3.5 py-2.5 rounded border border-outline bg-surface text-on-surface font-body text-body-md focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded bg-primary text-white hover:bg-secondary font-label text-label-lg"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
