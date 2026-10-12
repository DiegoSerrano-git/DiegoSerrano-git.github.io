/* ==========================================================================
   YOUR CONTENT LIVES HERE
   --------------------------------------------------------------------------
   This is the only file you need to edit to keep the site up to date.
   - Add a project: copy one { ... } block in PROJECTS, paste it at the TOP
     of the list, change the text, save, commit. It shows up on the Projects
     page and in the Resume page automatically.
   - Add a certification: same idea in CERTIFICATIONS.
   - Leave a field as "" and it simply won't show.
   - Pictures go in assets/img  (e.g. image: "assets/img/nbix.jpg")
   - Files (PDF, XLSX, PBIX) go in assets/files and are linked the same way.
   ========================================================================== */

window.SITE = {
  name: "Diego Serrano",
  firstName: "Diego",
  headline: "I turn financial data into clear analysis, building financial models and figuring out what the numbers actually mean.",
  tags: "Finance | Accounting | Data Analytics",
  phone: "(310) 633-4101",
  email: "dserrano3641@sdsu.edu",
  location: "San Diego, CA 92115",
  linkedin: "https://linkedin.com/in/diegomserrano",
  github: "https://github.com/diegoserrano-git",
  website: "",                 // optional third icon link (e.g. Linktree). Empty = email icon instead
  resumePdf: "",               // e.g. "assets/files/Diego-Serrano-Resume.pdf" to show a Download button
};

/* --------------------------------------------------------------------------
   PROJECTS
   mark:     short ticker-style label drawn on the cover when there's no image
   date:     shown above the title, like the original blog layout
   subtitle: the one-line teaser under the title
   links:    buttons inside the popup, e.g. { label: "Open workbook", url: "assets/files/x.xlsx" }
   -------------------------------------------------------------------------- */
window.PROJECTS = [
  {
    id: "budget-vs-actual",
    mark: "BvA",
    title: "Budget vs. Actual Dashboard",
    category: "FP&A",
    date: "2026",
    subtitle: "A Nordstrom-inspired Power BI dashboard for variance analysis",
    summary:
      "An interactive Power BI dashboard, inspired by Nordstrom, that compares budgeted and actual results so variances are easy to spot and explain.",
    highlights: [
      "Cleaned and shaped the source data in Power Query",
      "Wrote DAX measures for budget, actual and variance views",
      "Designed the layout so a reviewer can read results at a glance",
    ],
    tools: ["Power BI", "DAX", "Power Query"],
    image: "",
    links: [],
  },
  {
    id: "13-week-cash-flow",
    mark: "13W",
    title: "13-Week Cash Flow Forecast",
    category: "Treasury",
    date: "2026",
    subtitle: "A rolling liquidity forecast for Benchmark Electronics",
    summary:
      "A rolling 13-week cash flow forecast for Benchmark Electronics, built from the company's reported figures with key numbers verified against its filings.",
    highlights: [
      "Built weekly receipts and disbursements schedules",
      "Verified key figures against the company's reported results",
      "Structured for a treasury-style liquidity review",
    ],
    tools: ["Excel", "Forecasting"],
    image: "",
    links: [],
  },
  {
    id: "valuation-case",
    mark: "DCF",
    title: "Business Valuation Case Study",
    category: "Valuation",
    date: "2026",
    subtitle: "DCF valuation to support an M&A decision",
    summary:
      "An M&A decision case built on discounted cash flow valuation, using multiple models across a 10-year projection.",
    highlights: [
      "Projected 10 years of cash flows across several DCF models",
      "Ran sensitivity analysis on growth, discount rate and terminal value",
      "Framed the valuation around a clear buy or pass decision",
    ],
    tools: ["Excel", "DCF", "Sensitivity analysis"],
    image: "",
    links: [],
  },
  {
    id: "working-capital",
    mark: "WC",
    title: "Multi-Branch Working Capital Diagnostic",
    category: "Operational finance",
    date: "2026",
    subtitle: "Where cash gets tied up, branch by branch",
    summary:
      "A dashboard that compares working capital performance across branches to show where cash is tied up and where to act first.",
    highlights: [
      "Compared working capital drivers at the branch level",
      "Highlighted the largest gaps for operations follow-up",
    ],
    tools: ["Power BI", "Excel"],
    image: "",
    links: [],
  },
  {
    id: "nbix-analysis",
    mark: "NBIX",
    title: "Neurocrine Biosciences Financial Analysis",
    category: "Financial analysis",
    date: "2026",
    subtitle: "Four years of statements rebuilt from SEC 10-Ks",
    summary:
      "Four years of financial statements (FY2022 to FY2025) reconstructed from SEC 10-K filings in Excel, followed by trend and ratio analysis.",
    highlights: [
      "Rebuilt the income statement, balance sheet and cash flow statement from 10-Ks",
      "Ran trend and ratio analysis across four fiscal years",
    ],
    tools: ["Excel", "SEC filings", "Ratio analysis"],
    image: "",
    links: [],
  },
  {
    id: "dltr-analysis",
    mark: "DLTR",
    title: "Dollar Tree Financial Analysis",
    category: "Financial analysis",
    date: "2026",
    subtitle: "Profitability and KPIs in a written report",
    summary:
      "A written report on Dollar Tree's historical performance and profitability, built around the KPIs that drive the business.",
    highlights: [
      "Analyzed revenue growth, operating margins and ROE",
      "Wrote conclusions on historical performance",
    ],
    tools: ["Excel", "KPI analysis"],
    image: "",
    links: [],
  },
  {
    id: "auto-benchmarking",
    mark: "AUTO",
    title: "Automotive Supplier Peer Benchmarking",
    category: "Financial analysis",
    date: "2026",
    subtitle: "BorgWarner, Aptiv and Garrett Motion side by side",
    summary:
      "Peer benchmarking of BorgWarner, Aptiv and Garrett Motion to compare how similar automotive suppliers perform.",
    highlights: [
      "Assembled a three-company peer set",
      "Laid out comparable metrics for direct comparison",
    ],
    tools: ["Excel", "Benchmarking"],
    image: "",
    links: [],
  },
  {
    id: "bank-rec",
    mark: "REC",
    title: "Bank Reconciliation Case Study",
    category: "Accounting",
    date: "2026",
    subtitle: "From bank statement to adjusted book balance",
    summary:
      "A complete Excel workbook that reconciles a bank statement to the general ledger and documents each adjustment.",
    highlights: [
      "Reconciled the statement to an adjusted book balance",
      "Traced and explained every reconciling item",
    ],
    tools: ["Excel"],
    image: "",
    links: [],
  },
  {
    id: "qbo-serrano",
    mark: "QBO",
    title: "QuickBooks Online Full-Cycle Project",
    category: "Accounting",
    date: "2026",
    subtitle: "Serrano Construction LLC, March 2026 period",
    summary:
      "The full accounting cycle for Serrano Construction LLC's March 2026 period, from chart of accounts setup through AR and AP transactions.",
    highlights: [
      "Set up the chart of accounts from scratch",
      "Recorded AR and AP transactions through the period",
    ],
    tools: ["QuickBooks Online"],
    image: "",
    links: [],
  },
];

/* --------------------------------------------------------------------------
   CERTIFICATIONS (shown at the bottom of the Resume page; each opens a popup)
   -------------------------------------------------------------------------- */
window.CERTIFICATIONS = [
  {
    id: "fpa",
    mark: "FP&A",
    title: "Financial Planning & Analysis Professional",
    issuer: "CFI",
    date: "",
    summary: "Corporate Finance Institute's FP&A professional program.",
    covers: ["Three-statement modeling", "Budget-to-actual variance analysis", "Rolling forecasts", "NPV and IRR"],
    credentialUrl: "",   // paste your verification link to show a "Verify credential" button
  },
  {
    id: "scenario-sensitivity",
    mark: "S&S",
    title: "Scenario & Sensitivity Analysis",
    issuer: "CFI",
    date: "",
    summary: "Building scenario and sensitivity analysis into financial models.",
    covers: [],
    credentialUrl: "",
  },
  {
    id: "ib-sim",
    mark: "IB",
    title: "Investment Banking Job Simulation",
    issuer: "Forage",
    date: "",
    summary: "A virtual job simulation of investment banking analyst tasks.",
    covers: [],
    credentialUrl: "",
  },
  {
    id: "econ-fpa",
    mark: "ECON",
    title: "Economic Analysis for FP&A",
    issuer: "CFI",
    date: "",
    summary: "Using economic analysis to inform planning and forecasting.",
    covers: [],
    credentialUrl: "",
  },
  {
    id: "budgeting",
    mark: "BUD",
    title: "Budgeting Processes",
    issuer: "CFI",
    date: "",
    summary: "How organizations plan, build and manage budgets.",
    covers: [],
    credentialUrl: "",
  },
  {
    id: "da-sim",
    mark: "DA",
    title: "Data Analytics Job Simulation",
    issuer: "Forage",
    date: "",
    summary: "A virtual job simulation of data analyst tasks.",
    covers: [],
    credentialUrl: "",
  },
  {
    id: "bida",
    mark: "BIDA",
    title: "Business Intelligence & Data Analyst (BIDA)",
    issuer: "CFI",
    date: "October 2026",
    summary: "Corporate Finance Institute's business intelligence and data analyst certification.",
    covers: ["SQL", "Tableau", "Power BI", "Intro to Python"],
    credentialUrl: "",
  },
];

/* --------------------------------------------------------------------------
   RESUME
   -------------------------------------------------------------------------- */
window.RESUME = {
  education: [
    {
      school: "San Diego State University – Fowler College of Business",
      date: "Expected May 2027",
      lines: [
        { text: "Bachelor of Science in Business Administration; Finance Major, Accounting Minor" },
        { label: "Honors", text: "Dean's List, EOP Scholar" },
        { label: "Organizations", text: "Finance & Investment Society, Association of Latino Professionals for America (ALPFA)" },
      ],
    },
  ],
  experience: [
    {
      org: "The Vibe Co. | San Diego, CA",
      role: "Team Server",
      date: "Jul 2023 – Jan 2024",
      bullets: [
        "Helped launch a small business as part of the founding team, gaining firsthand exposure to small-business ownership",
        "Analyzed sales mix and shifted promotions toward higher-margin offerings to improve profitability",
        "Onboarded and trained 5+ new team members and standardized workflows to keep service consistent during early growth",
      ],
    },
    {
      org: "Mama Hong's Vietnamese Kitchen | Los Angeles, CA",
      role: "Lead Server",
      date: "Aug 2018 – Aug 2021",
      bullets: [
        "Promoted to Lead Server within the first year for leadership, reliability, and strong sales performance",
        "Delivered high-volume customer service, building rapport and maintaining customer relationships under pressure",
        "Reconciled $7K+ in daily cash receipts and distributed staff tips, investigating and resolving discrepancies to ensure accuracy",
      ],
    },
    {
      org: "Fireside Cellars | Santa Monica, CA",
      role: "Sales Associate",
      date: "June 2015 – Aug 2017",
      bullets: [
        "Contributed to a 10% increase in daily transaction speed by helping implement and operate the Point of Sale (POS) system, streamlining customer checkouts during peak retail hours",
        "Managed localized wine deliveries to residential clients and optimized retail floor merchandising, ensuring full stock availability and boosting repeat customer satisfaction scores",
        "Coordinated daily inventory management and shelf stocking, ensuring accurate stock rotation and full product availability while collaborating with vendors to highlight key promotional items",
      ],
    },
  ],
  skills: [
    { label: "Financial Analysis", text: "Financial Modeling, FP&A, Budgeting & Forecasting, Variance Analysis, Cash Flow Analysis, Ad-Hoc Reporting, Revenue Recognition" },
    { label: "Technical Skills", text: "Advanced Excel/Google Sheets, Microsoft Office Suite, Power BI, SQL, Tableau, Python" },
    { label: "Languages", text: "Fluent in English and Spanish" },
  ],
};
