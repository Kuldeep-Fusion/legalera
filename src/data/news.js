// ============================================================================
// ALL NEWS & STORIES DATA
// ============================================================================
// Think of this file as the "Newspaper Drawer"!
// Every headline, photo, author, and full article text lives right here.
//
// HOW TO ADD A NEW STORY (super easy!):
// 1. Copy one of the story boxes { slug: "...", title: "...", ... }
// 2. Give it a unique "slug" (like "my-new-story" — no spaces, use dashes)
// 3. Change the title, category, author, date, image, and paragraphs!
// ============================================================================

// Moving headlines in the red "Breaking News" bar at the top
export const BREAKING_TICKER = [
  {
    text: "Supreme Court 5-Judge Bench upholds IBC waterfall priority for secured financial creditors over statutory tax dues",
    slug: "constitution-bench-ibc-resolution-priority",
  },
  {
    text: "SEBI notifies stricter related-party transaction thresholds for top 500 listed entities effective Q1 2027",
    slug: "sebi-related-party-disclosure-norms",
  },
  {
    text: "Delhi High Court grants dynamic injunction against unauthorized AI voice cloning in landmark personality rights suit",
    slug: "delhi-hc-ai-voice-cloning-order",
  },
];

// The main big story on the top-left of the Homepage
export const HERO_LEAD_STORY = {
  slug: "constitution-bench-ibc-resolution-priority",
  badge: "Supreme Court · Lead",
  category: "Judgments",
  subcategory: "Supreme Court",
  date: "24 Nov 2026",
  publishedFull: "Published 24 Nov 2026, 09:15 AM IST · New Delhi",
  readTime: "6 min read",
  title: "Constitution Bench Clarifies IBC Resolution Priority Over State Tax Claims in Landmark Ruling",
  summary:
    "Affirming creditor certainty under Section 53 of the Insolvency and Bankruptcy Code, the five-judge bench held that statutory crown debts cannot override perfected security interests.",
  author: "Ananya Deshmukh",
  authorRole: "Senior Legal Correspondent",
  authorImage: "/images/portrait_gc_expert.jpg",
  image: "/images/hero_supreme_court.jpg",
  imageAlt: "Supreme Court of India dome at golden hour",
  imageCaption:
    "The Supreme Court of India in New Delhi. Five-judge Constitution Bench delivered the unanimous ruling on Tuesday morning. (Photo: LegalEra Archive)",
  citation: "2026 INSC 842 · Civil Appeal No. 4118 of 2025 · Bench: 5-Judge Constitution Bench",
  quote:
    '"The economic architecture of the Insolvency and Bankruptcy Code rests on a transparent, predictable waterfall. Permitting unrecorded statutory charges to leapfrog financial institutions would destabilize distressed asset resolution."',
  sections: [
    {
      id: "sec-1",
      heading: "Core Holding on Section 53 Waterfall",
      paragraphs: [
        "NEW DELHI: In a decisive boost to credit market predictability, a five-judge Constitution Bench of the Supreme Court of India ruled on Tuesday that secured financial creditors retain statutory priority over state government tax dues under Section 53 of the Insolvency and Bankruptcy Code, 2016 (IBC).",
        "Writing for the unanimous bench, the Court resolved a lingering conflict arising from earlier two-judge rulings that had treated certain state Value Added Tax (VAT) first-charge clauses as elevating tax authorities to the status of 'secured creditors' under Section 3(30) of the Code.",
      ],
    },
    {
      id: "sec-2",
      heading: "Harmonizing State VAT Statutes With IBC",
      paragraphs: [
        "The bench examined Section 238 of the IBC—which contains a broad non-obstante clause—and held that Parliament deliberately placed government dues at Rank (e) in the liquidation waterfall, below workmen's dues and financial debts owed to secured lenders.",
      ],
    },
    {
      id: "sec-3",
      heading: "Impact on Pending NCLT Resolution Plans",
      paragraphs: [
        "Insolvency practitioners note that over INR 42,000 crore worth of resolution plans currently pending before various benches of the National Company Law Tribunal (NCLT) had faced stay applications from state commercial tax departments. Tuesday's clarification clears the path for immediate Committee of Creditors (CoC) implementation.",
      ],
    },
  ],
};

// Two medium cards directly underneath the hero story
export const HERO_MEDIUM_STORIES = [
  {
    slug: "sebi-related-party-disclosure-norms",
    category: "Corporate Law",
    title: "SEBI Overhauls Related-Party Disclosure Norms for Listed Conglomerates",
    summary:
      "Audit committees face expanded valuation review mandates for cross-border subsidiary transfers above INR 500 crore.",
    author: "Rohan Kulkarni",
    date: "24 Nov 2026",
    readTime: "4 min read",
    image: "/images/news_corporate_boardroom.jpg",
    imageAlt: "Corporate law boardroom in Mumbai",
    featuredTag: "Featured Analysis",
  },
  {
    slug: "siac-iiac-bilateral-protocol-disputes",
    category: "International",
    eyebrow: "International Arbitration",
    title: "SIAC & IIAC Sign Bilateral Protocol for Fast-Track Infrastructure Disputes",
    summary:
      "Joint procedural framework cuts emergency arbitrator appointment timelines to 48 hours for cross-border energy contracts.",
    author: "Meera Krishnan",
    date: "23 Nov 2026",
    readTime: "5 min read",
    image: "/images/news_arbitration_hearing.jpg",
    imageAlt: "International commercial arbitration room",
  },
];

// Three small quick headlines at the bottom of the hero left column
export const HERO_MINI_HEADLINES = [
  {
    slug: "bombay-hc-gst-saas-exports",
    category: "Judgments",
    eyebrow: "High Courts",
    title: "Bombay HC Quashes Retrospective GST Show-Cause Notices on SaaS Exports",
    timeAgo: "2 hours ago",
    date: "24 Nov 2026",
    author: "Siddharth Menon",
    image: "/images/news_high_court_gavel.jpg",
  },
  {
    slug: "cam-trilegal-renewable-energy-merger",
    category: "Law Firms",
    eyebrow: "Law Firms",
    title: "Cyril Amarchand & Trilegal Advise on $1.8B Renewable Energy Merger",
    timeAgo: "4 hours ago",
    date: "24 Nov 2026",
    author: "Rohan Kulkarni",
    image: "/images/news_deal_signing.jpg",
  },
  {
    slug: "dpdp-rules-72-hour-breach-reporting",
    category: "Corporate Law",
    eyebrow: "Tech & Privacy",
    title: "DPDP Rules Draft Mandates 72-Hour Breach Reporting for Fintechs",
    timeAgo: "5 hours ago",
    date: "24 Nov 2026",
    author: "Kavita Rao",
    image: "/images/news_ai_regulation.jpg",
  },
];

// Right sidebar: Top 5 Trending News
export const TRENDING_NEWS = [
  {
    rank: "01",
    slug: "delhi-hc-ai-voice-cloning-order",
    category: "Judgments",
    title: "Delhi HC Restrains Unauthorized AI Voice Cloning in Landmark Personality Rights Order",
    meta: "Judgments · 18.4k reads",
    date: "24 Nov 2026",
    author: "Ananya Deshmukh",
    image: "/images/news_ai_regulation.jpg",
  },
  {
    rank: "02",
    slug: "bci-foreign-law-firm-fly-in-guidelines",
    category: "Law Firms",
    title: "BCI Releases Updated Guidelines on Foreign Law Firm Fly-In Advisory Practice",
    meta: "Law Firms · 14.2k reads",
    date: "23 Nov 2026",
    author: "Meera Krishnan",
    image: "/images/news_corporate_boardroom.jpg",
  },
  {
    rank: "03",
    slug: "nclat-coc-operational-creditor-haircut",
    category: "Litigation",
    title: "NCLAT Sets Aside CoC Approval Over Unfair Operational Creditor Haircut",
    meta: "Litigation · 11.9k reads",
    date: "23 Nov 2026",
    author: "Vikramaditya Sen",
    image: "/images/news_high_court_gavel.jpg",
  },
  {
    rank: "04",
    slug: "cci-penalty-digital-marketplace-algorithm",
    category: "Corporate Law",
    title: "CCI Imposes INR 210 Cr Penalty in Digital Marketplace Algorithm Probe",
    meta: "Corporate · 9.6k reads",
    date: "22 Nov 2026",
    author: "Rohan Kulkarni",
    image: "/images/news_ipr_tech.jpg",
  },
  {
    rank: "05",
    slug: "partner-promotions-top-10-law-firms",
    category: "Law Firms",
    title: "2026 Partner Promotions: Top 10 Indian Law Firms Expand M&A & Disputes Benches",
    meta: "Law Firms · 8.3k reads",
    date: "22 Nov 2026",
    author: "LegalEra Desk",
    image: "/images/news_counsel_team.jpg",
  },
];

// Section 2: Latest Legal News
export const LATEST_LEGAL_NEWS = [
  {
    slug: "madras-hc-e-stamping-commercial-leases",
    category: "Judgments",
    eyebrow: "Supreme Court & HC",
    title: "Madras High Court Upholds Validity of E-Stamping in Commercial Lease Deeds",
    summary:
      "Digital execution coupled with Aadhaar e-sign satisfies evidentiary admissibility under Section 65B.",
    author: "Siddharth Menon",
    date: "24 Nov 2026",
    image: "/images/news_high_court_gavel.jpg",
  },
  {
    slug: "meity-algorithmic-accountability-framework",
    category: "Corporate Law",
    eyebrow: "Corporate Law",
    title: "MeitY Releases Algorithmic Accountability Framework for Financial AI Models",
    summary:
      "Banks and NBFCs using automated credit scoring must maintain explainability audit logs for 5 years.",
    author: "Kavita Rao",
    date: "23 Nov 2026",
    image: "/images/news_ai_regulation.jpg",
  },
  {
    slug: "arbitral-tribunals-commercial-risk-allocation-sc",
    category: "Litigation",
    eyebrow: "Litigation",
    title: "Arbitral Tribunals Cannot Rewrite Commercial Risk Allocation, Rules SC",
    summary:
      "Setting aside a INR 340 crore award, the Court reiterated strict boundaries under Section 34.",
    author: "Vikramaditya Sen",
    date: "23 Nov 2026",
    image: "/images/news_arbitration_hearing.jpg",
  },
  {
    slug: "rbi-co-lending-escrow-rules-nbfc",
    category: "Corporate Law",
    eyebrow: "Banking & FinTech",
    title: "RBI Tightens Co-Lending Escrow Rules for NBFC Partnerships",
    summary:
      "Updated master directions require real-time reconciliation and explicit borrower consent disclosures.",
    author: "Kavita Rao",
    date: "23 Nov 2026",
    image: "/images/news_ai_regulation.jpg",
  },
  {
    slug: "cci-clears-telecom-tower-consolidation",
    category: "Corporate Law",
    eyebrow: "Competition Law",
    title: "CCI Clears $2.4B Telecom Tower Consolidation With Behavioral Remedies",
    summary:
      "Non-discriminatory infrastructure access commitments secured for tier-2 regional carriers.",
    author: "Meera Krishnan",
    date: "22 Nov 2026",
    image: "/images/news_arbitration_hearing.jpg",
  },
  {
    slug: "ibbi-pre-packaged-insolvency-expansion",
    category: "Corporate Law",
    eyebrow: "IBC & Restructuring",
    title: "IBBI Proposes Pre-Packaged Insolvency Expansion for Mid-Market Firms",
    summary:
      "Consultation paper outlines faster 90-day resolution windows for non-MSME corporate debtors.",
    author: "Ananya Deshmukh",
    date: "21 Nov 2026",
    image: "/images/hero_supreme_court.jpg",
  },
  {
    slug: "cbdt-safe-harbour-margins-gcc",
    category: "India",
    eyebrow: "Tax & Trade",
    title: "CBDT Clarifies Safe Harbour Margins for Global Capability Centres",
    summary:
      "Transfer pricing certainty extended through FY 2028-29 for R&D and enterprise software hubs.",
    author: "Siddharth Menon",
    date: "20 Nov 2026",
    image: "/images/news_tax_finance.jpg",
  },
  {
    slug: "cross-border-group-insolvency-european-waterfall",
    category: "International",
    eyebrow: "Analysis",
    title: "Cross-Border Group Insolvency: Lessons From European Waterfall Frameworks",
    summary:
      "Comparative study on how UNCITRAL Model Law coordinates multi-jurisdictional asset pools and creditor rankings.",
    author: "Rohan Kulkarni",
    date: "18 Nov 2026",
    image: "/images/news_corporate_boardroom.jpg",
  },
];

// Section 2A: Within The Circle
export const WITHIN_THE_CIRCLE = {
  lead: {
    slug: "governing-ai-from-within-in-house-playbook",
    eyebrow: "In-House Counsel Playbook",
    category: "Corporate Law",
    title: "Governing AI from Within: The In-House Counsel's Playbook for Accountability and Assurance",
    summary:
      "How Chief Legal Officers are structuring internal AI governance boards, vendor risk audits, and DPDP compliance.",
    image: "/images/portrait_justice_interview.jpg",
    date: "22 Nov 2026",
    author: "LegalEra Editorial",
  },
  subCards: [
    {
      slug: "10-years-of-ibc-decade-in-review",
      eyebrow: "IBC Special",
      category: "India",
      title: "10 Years of the Insolvency and Bankruptcy Code, 2016: A Decade in Review",
      image: "/images/news_high_court_gavel.jpg",
      date: "21 Nov 2026",
      author: "Ananya Deshmukh",
    },
    {
      slug: "reinventing-general-counsel-enterprise-risk",
      eyebrow: "Leadership",
      category: "Opinions",
      title: "Reinventing the General Counsel in the Age of Enterprise Risk",
      image: "/images/news_counsel_team.jpg",
      date: "20 Nov 2026",
      author: "Priya Subramanian",
    },
  ],
  rightGrid: [
    {
      slug: "governance-before-complexity-growing-businesses",
      category: "Corporate Law",
      title: "Governance Before Complexity: The Decisions Growing Businesses Must Clarify Early",
      image: "/images/portrait_gc_expert.jpg",
      date: "19 Nov 2026",
      author: "Rohan Kulkarni",
    },
    {
      slug: "malaysia-72-hour-breach-notification-regime",
      category: "International",
      title: "Beyond Compliance: Navigating Malaysia's 72-Hour Breach Notification Regime",
      image: "/images/news_corporate_boardroom.jpg",
      date: "18 Nov 2026",
      author: "Meera Krishnan",
    },
    {
      slug: "15th-annual-india-legal-conclave-2026",
      category: "India",
      title: "15th Annual India Legal Conclave 2026 to Bring Together Global General Counsel",
      image: "/images/event_legal_awards.jpg",
      date: "17 Nov 2026",
      author: "LegalEra Events Desk",
    },
    {
      slug: "7th-annual-middle-east-law-awards-2026",
      category: "International",
      title: "7th Annual Legal Era Middle East Law Awards 2026 Celebrates Regional Excellence",
      image: "/images/news_arbitration_hearing.jpg",
      date: "16 Nov 2026",
      author: "LegalEra Global Desk",
    },
  ],
};

// Section 2B: Deal Street
export const DEAL_STREET = [
  {
    slug: "khaitan-smartcoin-series-c-deal",
    firm: "Khaitan & Co",
    dealType: "INR 58 Cr · Series C",
    sector: "FinTech M&A",
    leadPartner: "Sanchit Agarwal",
    category: "Law Firms",
    title: "Khaitan & Co Advised Smartcoin Financials on INR 58 Crore Extended Series C Funding Round",
    footer: "Lead Partner: Sanchit Agarwal · FinTech M&A",
    image: "/images/news_deal_signing.jpg",
    date: "24 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "khaitan-eclerx-acquisition-regedge",
    firm: "Khaitan & Co",
    dealType: "M&A Acquisition",
    sector: "Corporate M&A",
    leadPartner: "Niren Patel",
    category: "Law Firms",
    title: "Khaitan & Co Advised eClerx Services Limited on Acquisition of RegEdge",
    footer: "Lead Partner: Niren Patel · Corporate M&A",
    image: "/images/news_corporate_boardroom.jpg",
    date: "23 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "cam-nelnet-entab-infotech-acquisition",
    firm: "CAM",
    dealType: "100% Buyout",
    sector: "Cross-Border Tech",
    leadPartner: "CAM M&A Desk",
    category: "Law Firms",
    title: "Cyril Amarchand Mangaldas Advised Nelnet on Acquisition of 100% Shareholding in Entab Infotech",
    footer: "Cross-Border Tech Acquisition · New Delhi",
    image: "/images/news_counsel_team.jpg",
    date: "22 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "trilegal-temasek-healthquad-stake-sale",
    firm: "Trilegal",
    dealType: "USD 140M · PE Exit",
    sector: "Healthcare M&A",
    leadPartner: "Kosturi Ghosh",
    category: "Law Firms",
    title: "Trilegal Advised Global Consortium On USD 140 Million Secondary Buyout In Healthtech Rollout",
    summary:
      "Lead counsel structuring secondary share transfers, CCI merger exemption analysis, and healthcare regulatory sign-offs.",
    footer: "Lead Partner: Kosturi Ghosh · Healthcare M&A",
    image: "/images/news_global_skyline.jpg",
    date: "21 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "sam-adani-green-project-bond-refinancing",
    firm: "SAM & Co",
    dealType: "USD 450M · Debt",
    sector: "Renewable Energy",
    leadPartner: "MKS & Energy Desk",
    category: "Law Firms",
    title: "Shardul Amarchand Mangaldas Advises Joint Bookrunners On USD 450 Million Green Bond Issue",
    summary:
      "Cross-border debt capital markets transaction financing solar-wind hybrid capacity across Rajasthan and Gujarat.",
    footer: "Renewable Debt · Mumbai",
    image: "/images/news_tax_finance.jpg",
    date: "20 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "azb-bain-capital-fintech-growth-round",
    firm: "AZB & Partners",
    dealType: "INR 920 Cr · Growth",
    sector: "Digital Lending",
    leadPartner: "Vaidhyanadhan Iyer",
    category: "Law Firms",
    title: "AZB & Partners Advised Bain Capital On INR 920 Crore Growth Investment In Enterprise NBFC",
    summary:
      "Structured compulsorily convertible preference instruments with RBI change-in-control clearances.",
    footer: "Private Equity · Bengaluru",
    image: "/images/news_ai_regulation.jpg",
    date: "19 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "jsa-advises-tata-electronics-semiconductor-jv",
    firm: "JSA Advocates",
    dealType: "Joint Venture",
    sector: "Semiconductors",
    leadPartner: "Aashish Gupta",
    category: "Law Firms",
    title: "JSA Advises Industrial Partners On Semiconductor OSAT Joint Venture Structuring",
    summary:
      "Negotiated technology transfer licensing, PLI subsidy milestones, and sovereign land lease covenants.",
    footer: "Manufacturing & Tech · Gujarat",
    image: "/images/news_ipr_tech.jpg",
    date: "18 Nov 2026",
    author: "Deal Street Desk",
  },
  {
    slug: "luthra-icici-ventures-logistics-reit",
    firm: "Luthra & Luthra",
    dealType: "INR 1,800 Cr · REIT",
    sector: "Infrastructure",
    leadPartner: "Karan Mitroo",
    category: "Law Firms",
    title: "Luthra And Luthra Guides INR 1,800 Crore Warehousing Platform Towards InvIT Consolidation",
    summary:
      "Executed multi-state title diligence, SEBI trust structuring, and anchor investor commitments across 9 corridors.",
    footer: "Real Assets & InvIT · Delhi NCR",
    image: "/images/news_courtroom_bench.jpg",
    date: "17 Nov 2026",
    author: "Deal Street Desk",
  },
];

// Section 2C: Leading Law Firms (Branded Logo Directory)
export const LEADING_LAW_FIRMS = [
  {
    name: "Cyril Amarchand Mangaldas",
    logo: "/images/logos/cam.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Adams & Adams",
    logo: "/images/logos/adams-adams.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Addleshaw Goddard",
    logo: "/images/logos/addleshaw-goddard.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Khaitan & Co",
    logo: "/images/logos/khaitan.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Dentons Acas-Law",
    logo: "/images/logos/dentons.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Trilegal",
    logo: "/images/logos/trilegal.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "AZB & Partners",
    logo: "/images/logos/azb.svg",
    href: "/news?category=Law+Firms",
  },
  {
    name: "Shardul Amarchand Mangaldas",
    logo: "/images/logos/sam.svg",
    href: "/news?category=Law+Firms",
  },
];

// Section 2D: Hire & Moves
export const HIRE_AND_MOVES = [
  {
    slug: "rohit-bhansali-joins-tata-starbucks",
    tag: "In-House Move",
    org: "Tata Starbucks",
    category: "Law Firms",
    title: "Rohit Bhansali Joins Tata Starbucks As Head – Legal, Permits & Licensing",
    summary:
      "Veteran retail counsel takes charge of national expansion compliance, franchise licensing, and commercial disputes.",
    image: "/images/portrait_justice_interview.jpg",
    date: "24 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "ravi-srivastava-joins-ndtv",
    tag: "Media & Regulatory",
    org: "NDTV",
    category: "Law Firms",
    title: "Ravi Srivastava Joins NDTV As Chief Legal & Regulatory Officer",
    summary:
      "Brings two decades of broadcast, MIB licensing, and defamation litigation strategy to the media network.",
    image: "/images/portrait_gc_expert.jpg",
    date: "23 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "akash-singh-joins-axis-max-life",
    tag: "Insurance & Litigation",
    org: "Axis Max Life",
    category: "Law Firms",
    title: "Akash Singh Joins Axis Max Life Insurance As AVP – Legal & Head – Litigation",
    summary:
      "Leads pan-India IRDAI regulatory advisory, consumer forum defence, and high-value policy litigation.",
    image: "/images/portrait_justice_interview.jpg",
    date: "22 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "megha-kapoor-partner-cyril-amarchand-ma",
    tag: "Lateral Partner",
    org: "Cyril Amarchand",
    category: "Law Firms",
    title: "Megha Kapoor Joins Cyril Amarchand Mangaldas As Private Equity Partner In Mumbai",
    summary:
      "Transitions from a rival Tier-1 firm with a track record spanning buyouts, sovereign wealth deals, and exits.",
    image: "/images/news_counsel_team.jpg",
    date: "21 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "devansh-verma-general-counsel-razorpay",
    tag: "Fintech GC",
    org: "Razorpay",
    category: "Law Firms",
    title: "Devansh Verma Elevated To Group General Counsel Ahead Of Fintech Restructuring",
    summary:
      "Oversees RBI payment aggregator approvals, cross-border merchant settlement rules, and board governance.",
    image: "/images/news_corporate_boardroom.jpg",
    date: "20 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "nandini-rao-trilegal-competition-bench",
    tag: "Partner Hire",
    org: "Trilegal",
    category: "Law Firms",
    title: "Trilegal Strengthens Antitrust Practice With Appointment Of Nandini Rao In Delhi",
    summary:
      "Former CCI advisor bolsters merger control clearances and digital markets cartel defence mandates.",
    image: "/images/portrait_gc_expert.jpg",
    date: "19 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "kabir-sethi-khaitan-ibc-restructuring",
    tag: "Restructuring",
    org: "Khaitan & Co",
    category: "Law Firms",
    title: "Kabir Sethi Joins Khaitan & Co's Insolvency & Stressed Assets Desk As Partner",
    summary:
      "Advises committees of creditors, credit funds, and resolution applicants in complex NCLT restructurings.",
    image: "/images/news_deal_signing.jpg",
    date: "18 Nov 2026",
    author: "People Desk",
  },
  {
    slug: "ishita-bose-head-legal-jio-blackrock",
    tag: "Asset Management",
    org: "Jio BlackRock",
    category: "Law Firms",
    title: "Ishita Bose Appointed Head – Legal & Regulatory Risk For Asset Management JV",
    summary:
      "Spearheads SEBI mutual fund product approvals, GIFT City distribution, and institutional mandates.",
    image: "/images/news_tax_finance.jpg",
    date: "17 Nov 2026",
    author: "People Desk",
  },
];

// Section 2E: Zoom-In
export const ZOOM_IN = [
  {
    slug: "ecl-finance-sc-judgment-analysis",
    eyebrow: "IBC Deep Dive",
    category: "Judgments",
    title: "Lender Protections Or Grounds For Disqualification? Analysis Of Supreme Court's Judgment In ECL Finance Ltd.",
    image: "/images/news_high_court_gavel.jpg",
    date: "23 Nov 2026",
    author: "Ananya Deshmukh",
  },
  {
    slug: "merchant-shipping-rules-2026-compliance",
    eyebrow: "Maritime Law",
    category: "India",
    title: "The Merchant Shipping (Registration Of Vessels) Rules, 2026: Key Compliance Shifts",
    image: "/images/news_corporate_boardroom.jpg",
    date: "22 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "dpdp-act-unregulated-financial-sector",
    eyebrow: "Data Privacy",
    category: "Corporate Law",
    title: "Data Protection At The Margins: The DPDP Act And India's Unregulated Financial Sector",
    image: "/images/news_ai_regulation.jpg",
    date: "21 Nov 2026",
    author: "Kavita Rao",
  },
];

// Section 2F: Global Insights (1 lead feature + 4 grid cards + 3 right-rail trend briefs)
export const GLOBAL_INSIGHTS = [
  {
    slug: "dla-piper-allegion-overly-door",
    eyebrow: "Global M&A & Regulatory",
    category: "International",
    title: "DLA Piper Advised Allegion On Acquisition Of Overly Door Company",
    summary:
      "Cross-border industrial M&A structuring across US antitrust clearance, defence-grade manufacturing contracts, and transitional IP licensing.",
    footer: "Cross-Border Industrial M&A · US",
    image: "/images/news_global_skyline.jpg",
    date: "23 Nov 2026",
    author: "Meera Krishnan",
  },
  {
    slug: "linklaters-pttgc-scg-chemicals-jv",
    eyebrow: "ASEAN & Energy",
    category: "International",
    title: "Linklaters Advised PTTGC On Strategic Petrochemical Joint Venture With SCG Chemicals",
    summary:
      "Structuring multi-jurisdictional feedstock supply covenants, governance rights, and project finance terms across Southeast Asian hubs.",
    footer: "Southeast Asia & Energy",
    image: "/images/news_deal_signing.jpg",
    date: "22 Nov 2026",
    author: "Arjun Malhotra",
  },
  {
    slug: "addleshaw-goddard-jordan-green-hydrogen",
    eyebrow: "Clean Energy Law",
    category: "International",
    title: "Addleshaw Goddard Advised The Government Of Jordan On Green Hydrogen Infrastructure",
    summary:
      "Sovereign concession frameworks, port export agreements, and bankable off-take templates powering MENA's decarbonisation corridor.",
    footer: "MENA Clean Energy Advisory",
    image: "/images/news_corporate_boardroom.jpg",
    date: "21 Nov 2026",
    author: "Ananya Deshmukh",
  },
  {
    slug: "eu-ai-act-cross-border-compliance-2026",
    eyebrow: "AI & Privacy",
    category: "International",
    title: "EU AI Act Enforcement Playbook For Multinational General Counsel In 2027",
    summary:
      "Harmonising European high-risk AI conformity audits with India's DPDP Act and UK Sectoral AI Safety Rules.",
    footer: "Global Digital Regulation · Brussels",
    image: "/images/news_ai_regulation.jpg",
    date: "20 Nov 2026",
    author: "Kavita Rao",
  },
  {
    slug: "siac-lcia-dual-seat-enforcement-trends",
    eyebrow: "Arbitration Desk",
    category: "International",
    title: "SIAC & LCIA Award Enforcement: Balancing Public Policy Across Asian Courts",
    summary:
      "Comparative review of Singapore, London, and Delhi High Court decisions on emergency arbitrator interim relief.",
    footer: "International Arbitration · Singapore",
    image: "/images/news_arbitration_hearing.jpg",
    date: "19 Nov 2026",
    author: "Vikramaditya Sen",
  },
  {
    slug: "clifford-chance-japan-offshore-wind-finance",
    eyebrow: "Project Finance",
    category: "International",
    title: "Clifford Chance Advises Consortium On JPY 320B Japanese Offshore Wind Financing",
    summary:
      "Multi-tranche ECA and commercial debt structuring sets a new benchmark for Asia-Pacific renewable infrastructure.",
    footer: "APAC Energy & Infrastructure · Tokyo",
    image: "/images/news_global_skyline.jpg",
    date: "19 Nov 2026",
    author: "Meera Krishnan",
  },
  {
    slug: "gift-city-ifsca-fund-domiciliation-wave",
    eyebrow: "Cross-Border Funds",
    category: "International",
    title: "Global PE Sponsors Accelerate Fund Domiciliation Shifts Into GIFT City IFSC",
    summary:
      "Harmonised IFSCA tax neutrality and streamlined RBI outbound norms draw Mauritius and Singapore feeder vehicles onshore.",
    footer: "International Financial Services · GIFT City",
    image: "/images/news_courtroom_bench.jpg",
    date: "18 Nov 2026",
    author: "Arjun Malhotra",
  },
  {
    slug: "uk-fca-esg-anti-greenwashing-disclosures",
    eyebrow: "ESG & Finance",
    category: "International",
    title: "UK FCA Tightens Anti-Greenwashing Disclosures For Global Private Credit Funds",
    summary:
      "Updated sustainability labelling mandates reshape fundraise offer documents and LP side letters across London and GIFT City.",
    footer: "Sustainable Finance · London",
    image: "/images/news_tax_finance.jpg",
    date: "18 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "us-doj-antitrust-ai-pricing-scrutiny",
    eyebrow: "Competition Law",
    category: "International",
    title: "DOJ And European Commission Escalate Audits Into Algorithmic Pricing Cartels",
    summary:
      "New dawn-raid protocols and API discovery guidelines put enterprise SaaS vendors under heightened cross-border scrutiny.",
    footer: "Global Antitrust · Washington",
    image: "/images/news_ipr_tech.jpg",
    date: "17 Nov 2026",
    author: "Rohan Kulkarni",
  },
  {
    slug: "difc-adgm-common-law-commercial-hubs",
    eyebrow: "Middle East Desk",
    category: "International",
    title: "How DIFC & ADGM Courts Are Winning High-Value Indo-Gulf Commercial Disputes",
    summary:
      "Reciprocal recognition treaties and specialist technology benches accelerate asset recovery across MENA corridors.",
    footer: "GCC Commercial Courts · Dubai",
    image: "/images/news_counsel_team.jpg",
    date: "16 Nov 2026",
    author: "Aarav Sharma",
  },
];

// Interactive 4-question Fast Four quiz displayed in the Global Insights right rail
export const GLOBAL_LAW_QUIZ = [
  {
    question: "Which arbitration centre updated its expedited emergency interim relief rules alongside SIAC in 2026?",
    options: ["LCIA London", "WIPO Geneva", "ICSID Washington"],
    answerIndex: 0,
  },
  {
    question: "What maximum penalty threshold applies under India's DPDP Act for severe data fiduciary breaches?",
    options: ["INR 50 Crore", "INR 250 Crore", "INR 500 Crore"],
    answerIndex: 1,
  },
  {
    question: "Which GCC financial hub operates an independent English common-law court in Abu Dhabi?",
    options: ["DIFC Courts", "ADGM Courts", "QFC Tribunal"],
    answerIndex: 1,
  },
  {
    question: "Under SEBI's 2026 framework, cross-border FPI disclosures are routed through which onshore IFSC?",
    options: ["GIFT City", "BKC FinHub", "Dholera IFSC"],
    answerIndex: 0,
  },
];

// Section 2G: Alternative Dispute Resolution
export const ADR_STORIES = [
  {
    slug: "waiver-acquiescence-arbitral-tribunal",
    eyebrow: "Arbitration",
    category: "Litigation",
    title: "Waiver And Acquiescence In Challenges To Arbitral Tribunal Constitution",
    image: "/images/news_arbitration_hearing.jpg",
    date: "22 Nov 2026",
    author: "Vikramaditya Sen",
  },
  {
    slug: "express-waiver-section-12-5-arbitration",
    eyebrow: "Section 12(5)",
    category: "Litigation",
    title: "Express Waiver And Arbitrator Ineligibility Under Section 12(5): Recalibrating Party Autonomy",
    image: "/images/news_courtroom_bench.jpg",
    date: "21 Nov 2026",
    author: "Meera Krishnan",
  },
  {
    slug: "hpcl-v-bcl-secure-non-signatories",
    eyebrow: "Tribunal Powers",
    category: "Litigation",
    title: "Power Of Tribunal To Implead Non-Signatories In An Arbitration Proceeding: HPCL V. BCL Secure",
    image: "/images/news_counsel_team.jpg",
    date: "20 Nov 2026",
    author: "Vikramaditya Sen",
  },
];

// Section 2H: IPR & Tech Law
export const IPR_TECH_STORIES = [
  {
    slug: "combating-smuggling-counterfeiting-2026",
    eyebrow: "Brand Enforcement",
    category: "Corporate Law",
    title: "Combating Smuggling And Counterfeiting In 2026: Global Legal And Enforcement Strategies",
    summary:
      "Customs border seizures, dynamic web-blocking orders, and AI supply-chain tracing against grey-market syndicates.",
    image: "/images/news_ipr_tech.jpg",
    date: "22 Nov 2026",
    author: "Kavita Rao",
  },
  {
    slug: "copyright-law-creator-economy-ai",
    eyebrow: "Copyright & AI",
    category: "Opinions",
    title: "Copyright Law And The Creator Economy: Transformative Use And Due Process In The Digital Age",
    summary:
      "Examining licensing royalties, synthetic voice cloning remedies, and fair-dealing boundaries for LLM training data.",
    image: "/images/news_ai_regulation.jpg",
    date: "21 Nov 2026",
    author: "Rohan Kulkarni",
  },
  {
    slug: "delhi-hc-strikes-down-trademark-squatters",
    eyebrow: "Trademarks",
    category: "Judgments",
    title: "Prior Use Triumphs Over Bad Faith Registration: Delhi High Court Strikes Down Trademark Squatters",
    summary:
      "Commercial division awards exemplary costs and directs immediate cancellation of opportunistic domain filings.",
    image: "/images/news_high_court_gavel.jpg",
    date: "20 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "ai-inventorship-patents-delhi-hc-2026",
    eyebrow: "Patents & AI",
    category: "Judgments",
    title: "Delhi High Court Clarifies Patentability Standards For Generative AI & Software Algorithms",
    summary:
      "Technical effect thresholds under Section 3(k) gain sharper contours for enterprise healthtech and chip-design claims.",
    image: "/images/news_global_skyline.jpg",
    date: "19 Nov 2026",
    author: "Kavita Rao",
  },
  {
    slug: "dpdp-rules-consent-manager-compliance-2026",
    eyebrow: "Data Privacy",
    category: "Corporate Law",
    title: "MeitY Notifies Technical Standards For Registered Consent Managers Under DPDP Rules",
    summary:
      "Interoperable consent dashboards, 72-hour breach logging, and algorithmic verifiable parental consent protocols take effect.",
    image: "/images/news_corporate_boardroom.jpg",
    date: "18 Nov 2026",
    author: "Rohan Kulkarni",
  },
  {
    slug: "sep-frand-licensing-telecom-litigation",
    eyebrow: "SEP & FRAND",
    category: "Litigation",
    title: "Dynamic FRAND Security Deposits Reshape 5G Standard Essential Patent Suits In India",
    summary:
      "Division bench rulings harmonise global portfolio rate benchmarks with provisional escrow safeguards.",
    image: "/images/news_arbitration_hearing.jpg",
    date: "17 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "semiconductor-ip-protection-cross-border-licensing",
    eyebrow: "DeepTech & Chips",
    category: "Corporate Law",
    title: "Drafting Cross-Border Fab Technology Transfers & Mask-Work IP Protections",
    summary:
      "Export control compliance, joint-development foreground IP ownership, and escrow triggers for foundry deals.",
    image: "/images/news_deal_signing.jpg",
    date: "16 Nov 2026",
    author: "Meera Krishnan",
  },
  {
    slug: "deepfake-personality-rights-bombay-hc-injunctions",
    eyebrow: "Personality Rights",
    category: "Judgments",
    title: "Bombay High Court Issues John Doe Dynamic Injunctions Against AI Voice-Cloning Ads",
    summary:
      "Social platforms directed to deploy automated hash-matching takedowns within 24 hours of verified complaints.",
    image: "/images/news_courtroom_bench.jpg",
    date: "15 Nov 2026",
    author: "Ananya Deshmukh",
  },
  {
    slug: "open-source-ai-model-licensing-liability",
    eyebrow: "AI Licensing",
    category: "Corporate Law",
    title: "Open-Weight AI Model Licences: Indemnification Gaps & Enterprise Procurement",
    summary:
      "How GCs negotiate training-data warranties and downstream copyright indemnities in vendor MSAs.",
    image: "/images/news_ai_regulation.jpg",
    date: "14 Nov 2026",
    author: "Kavita Rao",
  },
  {
    slug: "madras-hc-pharma-patent-evergreening-section-3d",
    eyebrow: "Pharma Patents",
    category: "Judgments",
    title: "Madras High Court Tightens Enhanced Therapeutic Efficacy Proof Under Section 3(d)",
    summary:
      "Clinical bio-availability data benchmarks clarified for secondary formulation patent opposition proceedings.",
    image: "/images/news_high_court_gavel.jpg",
    date: "13 Nov 2026",
    author: "Siddharth Menon",
  },
];

// Section 2I: Tax
export const TAX_STORIES = [
  {
    slug: "structuring-holding-company-singapore",
    eyebrow: "International Tax",
    category: "International",
    title: "Structuring A Holding Company In Singapore: Treaty & Substance Considerations",
    image: "/images/news_global_skyline.jpg",
    date: "22 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "delhi-hc-fis-ruling-secondment",
    eyebrow: "Delhi High Court",
    category: "Judgments",
    title: "Time To Revisit Secondment Structures: Delhi High Court's FIS Ruling",
    image: "/images/news_tax_finance.jpg",
    date: "21 Nov 2026",
    author: "Rohan Kulkarni",
  },
  {
    slug: "indian-budget-2026-27-data-centres",
    eyebrow: "Direct Tax",
    category: "India",
    title: "Indian Budget 2026–27: Tax Incentives For Data Centres & Digital Infrastructure",
    image: "/images/news_deal_signing.jpg",
    date: "20 Nov 2026",
    author: "Kavita Rao",
  },
];

// Section 2J: From The Courts
export const FROM_THE_COURTS = [
  {
    slug: "nclt-delhi-rejects-redpro-insolvency-plea",
    court: "NCLT Delhi",
    category: "Judgments",
    title: "NCLT Delhi Rejects Redpro's ₹1.40 Crore Insolvency Plea, Holds Invoices Must Establish Contractual Liability",
    image: "/images/news_courtroom_bench.jpg",
    date: "24 Nov 2026",
    author: "Ananya Deshmukh",
  },
  {
    slug: "bombay-hc-protects-natural-ice-creams",
    court: "Bombay HC",
    category: "Judgments",
    title: "Bombay High Court Protects Natural Ice Creams From Fake Franchise Offers By Impersonators",
    image: "/images/news_high_court_gavel.jpg",
    date: "23 Nov 2026",
    author: "Siddharth Menon",
  },
  {
    slug: "madras-hc-upholds-nice-mark-dr-reddys",
    court: "Madras HC",
    category: "Judgments",
    title: "Madras High Court Upholds Registration Of 'NICE' Mark Despite Dr. Reddy's 'NISE' Objection",
    image: "/images/news_ipr_tech.jpg",
    date: "22 Nov 2026",
    author: "Kavita Rao",
  },
  {
    slug: "supreme-court-coc-cannot-withdraw-resolution-plan",
    court: "Supreme Court",
    category: "Judgments",
    title: "Supreme Court Holds Committee Of Creditors Cannot Withdraw Resolution Plan After Placement Before NCLT",
    image: "/images/hero_supreme_court.jpg",
    date: "21 Nov 2026",
    author: "Ananya Deshmukh",
  },
];

// Distinguished Rankings gold-bordered dark cards
export const DISTINGUISHED_RANKINGS = [
  { title: "Distinguished In-House Leading Lawyers", href: "/news?category=Law+Firms" },
  { title: "Distinguished Senior Counsel", href: "/news?category=Interviews" },
  { title: "Distinguished Leading Lawyers", href: "/news?category=Law+Firms" },
  { title: "Leading Law Firm Partners", href: "/news?category=Law+Firms" },
];

// Section 3: Exclusive Interviews & Opinions
export const INTERVIEWS_AND_OPINIONS = [
  {
    slug: "arvind-narayan-constitutional-courts-digital-markets",
    badge: "Exclusive Interview",
    badgeStyle: "blue",
    category: "Interviews",
    title: '"Constitutional Courts Must Guard Against Regulatory Overreach in Digital Markets"',
    summary:
      "Senior Advocate Arvind Narayan reflects on 35 years at the Bar, appellate backlogs, and AI-assisted case triage.",
    person: "Arvind Narayan",
    role: "Senior Advocate, Supreme Court",
    image: "/images/portrait_justice_interview.jpg",
    date: "23 Nov 2026",
    author: "LegalEra Interview Desk",
  },
  {
    slug: "priya-subramanian-in-house-deal-architects",
    badge: "GC Perspective · Opinion",
    badgeStyle: "gold",
    category: "Opinions",
    title: "Why In-House Legal Teams Are Becoming Strategic Deal Architects in 2027",
    summary:
      "Priya Subramanian outlines how ESG litigation and cross-border compliance have reshaped the boardroom role.",
    person: "Priya Subramanian",
    role: "Group General Counsel, Horizon Infra",
    image: "/images/portrait_gc_expert.jpg",
    date: "22 Nov 2026",
    author: "Priya Subramanian",
  },
];

// Helper function: Combines every story into one big list so Search, Category,
// and Article Detail pages can find any story automatically!
export function getAllArticles() {
  const combined = [
    HERO_LEAD_STORY,
    ...HERO_MEDIUM_STORIES,
    ...HERO_MINI_HEADLINES,
    ...TRENDING_NEWS,
    ...LATEST_LEGAL_NEWS,
    WITHIN_THE_CIRCLE.lead,
    ...WITHIN_THE_CIRCLE.subCards,
    ...WITHIN_THE_CIRCLE.rightGrid,
    ...DEAL_STREET,
    ...HIRE_AND_MOVES,
    ...ZOOM_IN,
    ...GLOBAL_INSIGHTS,
    ...ADR_STORIES,
    ...IPR_TECH_STORIES,
    ...TAX_STORIES,
    ...FROM_THE_COURTS,
    ...INTERVIEWS_AND_OPINIONS,
  ];

  // Remove duplicates if the same slug appears in two places (like Trending + Hero)
  const seen = new Set();
  return combined.filter((item) => {
    if (!item || !item.slug || seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

// Helper function: Find one single story using its URL slug
export function getArticleBySlug(slug) {
  return getAllArticles().find((article) => article.slug === slug) || HERO_LEAD_STORY;
}

// Helper function: Returns 1 full article + the next slug/title for infinite scroll
export function buildFullArticleData(slug) {
  const all = getAllArticles();
  const currentIndex = all.findIndex((item) => item.slug === slug);
  const article = currentIndex >= 0 ? all[currentIndex] : HERO_LEAD_STORY;
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % all.length : 1 % all.length;
  const nextArticle = all[nextIndex];

  const sections = article.sections || [
    {
      id: `${article.slug}-sec-1`,
      heading: "Key Legal Developments & Summary",
      paragraphs: [
        `NEW DELHI: ${article.summary || article.title} Legal practitioners and corporate counsel across India are closely tracking the compliance and litigation impact of this development.`,
        "LegalEra's editorial desk reviewed the regulatory filings and judicial reasoning, noting clear implications for board governance, contractual risk allocation, and upcoming tribunal proceedings.",
      ],
    },
    {
      id: `${article.slug}-sec-2`,
      heading: "What Counsel & Law Firms Should Watch Next",
      paragraphs: [
        "Industry advisors recommend reviewing active transaction documents, disclosure checklists, and pending dispute timelines in light of these guidelines.",
      ],
    },
  ];

  const citationText =
    article.citation ||
    `LegalEra Legal Intelligence Archive · ${article.category || "Legal News"} · ${article.date || "24 Nov 2026"}`;

  return {
    article: {
      ...article,
      sections,
      citationText,
    },
    nextSlug: nextArticle.slug,
    nextTitle: nextArticle.title,
  };
}
