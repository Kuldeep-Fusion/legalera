// ============================================================================
// MEMBERSHIP PLANS, BENEFITS & FAQ DATA
// ============================================================================
// Edit this file to change subscription prices, features, or FAQ answers!
// ============================================================================

export const MEMBERSHIP_PLANS = [
  {
    id: "digital-reader",
    eyebrow: "Individual",
    name: "Digital Reader",
    description: "Essential daily news, court coverage, and briefings for practicing advocates.",
    annualPrice: "₹2,999",
    annualPeriod: "/ year",
    monthlyPrice: "₹299",
    monthlyPeriod: "/ month",
    highlighted: false,
    buttonText: "Start Digital Access",
    features: [
      { text: "Unlimited articles, breaking news & court updates", included: true },
      { text: "Daily Morning Legal Brief (7:30 AM IST)", included: true },
      { text: "Ad-free reading & saved article library", included: true },
      { text: "Monthly digital magazine PDF archive", included: false },
    ],
  },
  {
    id: "counsel-partner",
    eyebrow: "Recommended",
    badge: "Most Popular",
    name: "Counsel & Partner",
    description: "Complete editorial, magazine archive, and regulatory intelligence for senior practitioners.",
    annualPrice: "₹7,499",
    annualPeriod: "/ year",
    monthlyPrice: "₹749",
    monthlyPeriod: "/ month",
    highlighted: true,
    buttonText: "Join Counsel Tier",
    features: [
      { text: "Everything in Digital Reader", included: true },
      { text: "Full LEGAL ERA Magazine + 10-year PDF archive", included: true },
      { text: "SEBI, IBC, CCI & RBI regulatory tracker alerts", included: true },
      { text: "25% priority discount on Legal Era Summits & Awards", included: true },
    ],
  },
  {
    id: "law-firm-corporate",
    eyebrow: "Teams & Institutions",
    name: "Law Firm & Corporate",
    description: "Multi-seat institutional access for law firms, in-house legal teams, and universities.",
    annualPrice: "₹45,000",
    annualPeriod: "/ year (10 seats)",
    monthlyPrice: "₹4,500",
    monthlyPeriod: "/ month (10 seats)",
    highlighted: false,
    buttonText: "Request Firm Access",
    features: [
      { text: "Full Counsel & Partner access for 10+ members", included: true },
      { text: "Consolidated GST invoicing & seat management", included: true },
      { text: "2 VIP passes to Annual Indian Legal Awards", included: true },
      { text: "Dedicated practice-area research concierge", included: true },
    ],
  },
];

export const MEMBER_BENEFITS = [
  {
    icon: "gavel",
    title: "Judgment Digests",
    description: "Same-day structured summaries of Constitution Bench, NCLAT, and High Court rulings with citations.",
  },
  {
    icon: "menu_book",
    title: "Digital Magazine",
    description: "Monthly special editions, Managing Partner rankings, and downloadable high-resolution PDFs.",
  },
  {
    icon: "notifications_active",
    title: "Regulatory Alerts",
    description: "Real-time notifications on SEBI circulars, IBBI amendments, DPDP rules, and tax notifications.",
  },
  {
    icon: "emoji_events",
    title: "Summit Priority",
    description: "Reserved delegate pricing and VIP networking lounges at LegalEra's flagship conclaves.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '"LegalEra\'s Morning Brief and IBC tracker save our corporate litigation team hours of statutory monitoring every week."',
    name: "Priya Subramanian",
    role: "Group General Counsel, Horizon Infra",
    image: "/images/portrait_gc_expert.jpg",
  },
  {
    quote:
      '"The digital magazine archive and Supreme Court Constitution Bench analyses are indispensable for appellate preparation."',
    name: "Arvind Narayan",
    role: "Senior Advocate, Supreme Court of India",
    image: "/images/portrait_justice_interview.jpg",
  },
];

export const MEMBERSHIP_FAQS = [
  {
    question: "Do law firm and corporate plans include GST tax invoices?",
    answer:
      "Yes. All Counsel & Partner and Law Firm memberships include automated GST-compliant invoices with your firm's GSTIN for seamless input tax credit.",
    defaultOpen: true,
  },
  {
    question: "Can I add or reassign seats within a Law Firm subscription?",
    answer:
      "Firm administrators can add, remove, or reassign partner and associate seats at any time from the institutional billing portal.",
    defaultOpen: false,
  },
  {
    question: "Is print delivery of LEGAL ERA Magazine available with membership?",
    answer:
      "Counsel & Partner and Law Firm members in India can opt in to complimentary monthly print courier delivery alongside instant digital PDF access.",
    defaultOpen: false,
  },
  {
    question: "What is the cancellation and refund policy?",
    answer:
      "Monthly plans can be cancelled anytime before the next billing cycle. Annual plans include a 14-day full-refund window from activation.",
    defaultOpen: false,
  },
];
