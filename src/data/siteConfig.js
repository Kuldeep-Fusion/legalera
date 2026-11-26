// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Edit this file to update the navigation menu, dropdown sub-links, or footer!
// ============================================================================

export const SITE_INFO = {
  shortLogo: "LE",
  name: "LEGAL ERA",
  tagline: "Law · Corporate · Policy",
  dateText: "Tuesday, 24 Nov 2026",
  copyright: "© 2026 LEGAL ERA Media Pvt. Ltd. All rights reserved.",
  cities: "Mumbai · New Delhi · London · Singapore",
  footerAbout:
    "India's authoritative legal media platform delivering breaking court coverage, corporate law intelligence, digital magazines, and flagship legal awards.",
};

// Navigation items — News uses regional megaMenu; Articles, Law Firms & TV use compact dropdowns
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "News",
    href: "/news",
    megaMenu: [
      {
        region: "Africa",
        symbol: "🌍",
        href: "/news?category=International",
        subLinks: [
          { label: "Cross-Border M&A", href: "/news?category=Law+Firms" },
          { label: "Energy & Mining Law", href: "/news?category=International" },
          { label: "IP & Patents", href: "/news?category=Corporate+Law" },
          { label: "African Arbitration", href: "/news?category=Litigation" },
          { label: "Banking & Infrastructure", href: "/news?category=International" },
          { label: "Regulatory Updates", href: "/news?category=India" },
        ],
      },
      {
        region: "Asia",
        symbol: "🌏",
        href: "/news?category=International",
        subLinks: [
          { label: "APAC M&A & JVs", href: "/news?category=Law+Firms" },
          { label: "SIAC Arbitration", href: "/news?category=Litigation" },
          { label: "Singapore Tax & Funds", href: "/news?category=International" },
          { label: "ASEAN Energy Deals", href: "/news?category=International" },
          { label: "Data & Cyber Laws", href: "/news?category=Corporate+Law" },
          { label: "Clean Tech Finance", href: "/news?category=International" },
        ],
      },
      {
        region: "India",
        symbol: "🇮🇳",
        href: "/news?category=India",
        subLinks: [
          { label: "Deal Street", href: "/news?category=Law+Firms" },
          { label: "High Court (India)", href: "/news?category=Judgments" },
          { label: "Hires & Moves", href: "/news?category=Law+Firms" },
          { label: "IBC Cases", href: "/search?q=IBC" },
          { label: "Policy & Law", href: "/news?category=India" },
          { label: "Tax Updates", href: "/news?category=India" },
          { label: "IP News", href: "/news?category=Corporate+Law" },
          { label: "Supreme Court (India)", href: "/news?category=Judgments" },
          { label: "Market Watch", href: "/news?category=Corporate+Law" },
          { label: "From The Courts", href: "/news?category=Judgments" },
        ],
      },
      {
        region: "Europe",
        symbol: "🇪🇺",
        href: "/news?category=International",
        subLinks: [
          { label: "EU AI Act & Privacy", href: "/news?category=Corporate+Law" },
          { label: "European Antitrust", href: "/news?category=Corporate+Law" },
          { label: "Green Finance & ESG", href: "/news?category=International" },
          { label: "Cross-Border Insolvency", href: "/news?category=Judgments" },
          { label: "EU Capital Markets", href: "/news?category=Law+Firms" },
          { label: "Tech Regulation", href: "/news?category=Corporate+Law" },
        ],
      },
      {
        region: "Middle East",
        symbol: "🇦🇪",
        href: "/news?category=International",
        subLinks: [
          { label: "DIFC & ADGM Courts", href: "/news?category=Litigation" },
          { label: "Green Hydrogen Deals", href: "/news?category=International" },
          { label: "Indo-Gulf Corridors", href: "/news?category=Law+Firms" },
          { label: "MENA Infrastructure", href: "/news?category=International" },
          { label: "Sovereign Wealth Funds", href: "/news?category=Law+Firms" },
          { label: "Legal Era ME Awards", href: "/events" },
        ],
      },
      {
        region: "UK",
        symbol: "🇬🇧",
        href: "/news?category=International",
        subLinks: [
          { label: "LCIA London Rulings", href: "/news?category=Litigation" },
          { label: "UK FCA ESG Rules", href: "/news?category=International" },
          { label: "Magic Circle Moves", href: "/news?category=Law+Firms" },
          { label: "English Commercial Courts", href: "/news?category=Judgments" },
          { label: "Private Credit & Funds", href: "/news?category=Law+Firms" },
          { label: "Cross-Border Tax", href: "/news?category=International" },
        ],
      },
      {
        region: "US",
        symbol: "🇺🇸",
        href: "/news?category=International",
        subLinks: [
          { label: "DOJ Antitrust Probes", href: "/news?category=Corporate+Law" },
          { label: "Industrial M&A Deals", href: "/news?category=Law+Firms" },
          { label: "US-India Tech Corridors", href: "/news?category=International" },
          { label: "SEC & Cross-Border IPOs", href: "/news?category=Corporate+Law" },
          { label: "AI & IP Litigation", href: "/news?category=Judgments" },
          { label: "Semiconductor Trade", href: "/news?category=Corporate+Law" },
        ],
      },
      {
        region: "Global Deals",
        symbol: "🌐",
        href: "/news?category=Law+Firms",
        subLinks: [
          { label: "Cross-Border M&A", href: "/news?category=Law+Firms" },
          { label: "Joint Ventures", href: "/news?category=International" },
          { label: "Project & Energy Finance", href: "/news?category=International" },
          { label: "Private Equity Buyouts", href: "/news?category=Law+Firms" },
          { label: "GIFT City Fund Flows", href: "/news?category=International" },
          { label: "Global Bond Issues", href: "/news?category=Law+Firms" },
        ],
      },
    ],
  },
  {
    label: "Articles",
    href: "/news?category=Articles",
    subLinks: [
      { label: "Aerospace", href: "/search?q=Aerospace" },
      { label: "Artificial Intelligence", href: "/search?q=AI" },
      { label: "Agriculture", href: "/search?q=Agriculture" },
      { label: "Alternate Dispute Resolution", href: "/news?category=Litigation" },
      { label: "Arbitration & Mediation", href: "/news?category=Litigation" },
      { label: "Banking And Finance", href: "/news?category=Corporate+Law" },
      { label: "Bankruptcy", href: "/search?q=IBC" },
      { label: "Book Review", href: "/news?category=Opinions" },
      { label: "Bribery & Corruption", href: "/search?q=Compliance" },
      { label: "Commercial Litigation", href: "/news?category=Litigation" },
      { label: "Competition Law", href: "/search?q=CCI" },
    ],
  },
  {
    label: "Law Firms",
    href: "/news?category=Law+Firms",
    subLinks: [
      { label: "Global Law Firm", href: "/news?category=Law+Firms" },
      { label: "Asia Law Firm", href: "/news?category=Law+Firms" },
      { label: "India Law Firm", href: "/news?category=Law+Firms" },
      { label: "Middle East Law Firm", href: "/news?category=Law+Firms" },
      { label: "Africa Law Firm", href: "/news?category=Law+Firms" },
    ],
  },
  { label: "Corporate Counsel", href: "/news?category=Corporate+Law" },
  { label: "Rankings", href: "/news?category=Rankings" },
  { label: "E-Magazine", href: "/magazine" },
  {
    label: "Legal Era TV",
    href: "/news?category=Interviews",
    subLinks: [
      { label: "Awards", href: "/events" },
      { label: "Interviews", href: "/news?category=Interviews" },
      { label: "Conferences", href: "/events#summits" },
      { label: "Press Release", href: "/news?category=Press+Release" },
    ],
  },
  { label: "Events", href: "/events", isHighlight: true },
];

// Footer link columns (4 columns: Company, Explore, Community, Legal)
export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Editorial Desk", href: "/about" },
      { label: "Events & Awards", href: "/events" },
      { label: "E-Magazine", href: "/magazine" },
      { label: "Media Kit", href: "/advertise" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Latest News", href: "/news" },
      { label: "Corporate Counsel", href: "/news?category=Corporate+Law" },
      { label: "Judgments", href: "/news?category=Judgments" },
      { label: "Law Firms & Deals", href: "/news?category=Law+Firms" },
      { label: "Search Archive", href: "/search" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Morning Legal Brief", href: "/membership" },
      { label: "Subscribe", href: "/membership" },
      { label: "Rankings 2026", href: "/news?category=Rankings" },
      { label: "GC Interviews", href: "/news?category=Interviews" },
      { label: "Submit a Story", href: "/about#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Contact", href: "/about#contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/privacy" },
      { label: "Editorial Policy", href: "/privacy" },
      { label: "Advertise", href: "/advertise" },
    ],
  },
];
