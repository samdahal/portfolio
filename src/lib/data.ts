export const profile = {
  name: "Sam Dahal",
  shortName: "Sam",
  title: "Director of Engineering",
  tagline:
    "Senior Leader of Engineering · Big Data & GenAI Strategy · Global Team Leadership",
  location: "Columbus, Ohio",
  email: "samdahal2@gmail.com",
  phone: "513-484-0611",
  linkedin: "https://www.linkedin.com/in/sam-dahal-a76596a4",
  github: "https://github.com/samdahal",
  summary:
    "Senior Leader of Engineering with 10+ years of experience leading large engineering organizations and scaling global teams of up to 26+ FTEs. Proven record of modernizing enterprise platforms, driving big data and GenAI strategy initiatives, and delivering mission-critical systems under regulatory deadlines.",
  philosophy:
    "Align engineering strategy with business goals, mentor the next generation of leaders, and build cross-functional organizations that deliver measurable outcomes.",
  stats: [
    { value: "10+", label: "Years leading engineering" },
    { value: "26+", label: "Global FTEs led" },
    { value: "$2M+/day", label: "Regulatory fines avoided" },
    { value: "50%+", label: "Faster onboarding via AI" },
  ],
  highlights: [
    "Directed 26+ FTEs delivering JPMorgan's Enterprise Data & AI Platform on Databricks.",
    "Led full rewrite of the ERMA platform under federal deadline, avoiding $2M+/day in fines.",
    "Scaled engineering org from 8 to 20+ globally distributed developers across US & UK.",
    "Launched AI-powered onboarding chatbot and portal, cutting onboarding time by 50%+.",
    "Pioneered GenAI and agentic coding adoption, accelerating developer productivity firm-wide.",
  ],
  languages: ["English (fluent)", "Nepali (native)"],
  education: {
    school: "Southern New Hampshire University",
    degree: "B.S., Computer Science",
    year: "2021",
    note: "Completed while working full-time",
  },
};

export const skillGroups = [
  {
    title: "Leadership & Strategy",
    items: [
      "Engineering Management",
      "Organizational Scaling",
      "Global Team Leadership",
      "Agile Delivery",
      "Cross-Functional Collaboration",
      "Mentorship",
    ],
  },
  {
    title: "Technical Strategy",
    items: [
      "Enterprise Architecture",
      "Cloud Migration",
      "Microservices",
      "Databricks",
      "CI/CD Pipelines",
      "Resiliency Engineering",
    ],
  },
  {
    title: "GenAI & Agentic Coding",
    items: [
      "LLM Integration",
      "Agentic Workflow Design",
      "AI Developer Tooling",
      "Prompt Engineering",
      "Chatbot & Copilot Dev",
      "Claude / OpenAI APIs",
    ],
  },
  {
    title: "Hands-On Tech",
    items: ["Java", "Spring Boot", "React", "Angular", "SQL", "AWS"],
  },
];

export const projects = [
  {
    title: "Enterprise Data & AI Platform",
    subtitle: "Databricks Lakehouse",
    blurb:
      "Directed multiple platform teams (26+ FTEs) building JPMorgan's firm-wide Enterprise Data & AI Platform on Databricks — unifying data access, analytics, and ML/GenAI workloads across the line of business on a single governed lakehouse.",
    tags: ["Databricks", "Lakehouse", "Big Data", "AI/ML", "Platform"],
    metric: "Adoption accelerated across LOB",
    accent: "from-rose-400 via-orange-400 to-amber-400",
  },
  {
    title: "ERMA Platform Rewrite",
    subtitle: "Firm-wide Resiliency Platform",
    blurb:
      "Replaced the legacy ERMA platform — the firm's system of record for business and technology resiliency planning — with a modern Spring Boot architecture, hitting a critical federal compliance deadline and protecting the firm from significant regulatory exposure.",
    tags: ["Resiliency", "Spring Boot", "Microservices", "Compliance", "CI/CD"],
    metric: "$2M+/day in fines avoided",
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "SRS — Workplace Reservation",
    blurb:
      "Modernized the Space Reservation System with LOB entitlement, same-day sync, and automated seat suggestions for tens of thousands of employees across multiple regions.",
    tags: ["React", "Angular", "Spring Boot", "Real-time"],
    metric: "Tens of thousands of users",
    accent: "from-emerald-400 via-teal-400 to-cyan-500",
  },
  {
    title: "GenAI Onboarding Chatbot",
    blurb:
      "Launched an AI-powered onboarding chatbot and self-service portal, and integrated agentic coding assistants into developer workflows to reduce repetitive work and lift code quality.",
    tags: ["GenAI", "Agentic", "LLM", "Automation"],
    metric: "50%+ faster team onboarding",
    accent: "from-indigo-500 via-blue-500 to-sky-400",
  },
];

export const experience = [
  {
    company: "JPMorgan Chase & Co.",
    role: "Executive Director — Director of Software Engineering",
    period: "2025 — Present",
    location: "Columbus, OH",
    tenureLabel: "JPMorgan Chase · 2021 — Present",
    bullets: [
      "Lead multi-team engineering organization (26+ FTEs) delivering the firm's Enterprise Data & AI Platform on Databricks across the line of business.",
      "Launched an AI-powered chatbot and onboarding portal, reducing onboarding cycles by 50%+.",
      "Pioneered GenAI tooling and agentic coding assistants in developer workflows, accelerating delivery and improving code quality.",
      "Championed the Kickstarter Coding Guide, standardizing best practices firm-wide.",
      "Mentor engineering leads to build leadership bench strength and sustainable delivery.",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Vice President — Senior Manager of Engineering",
    period: "2023 — 2025",
    location: "Columbus, OH",
    bullets: [
      "Directed an engineering org of 20+ developers across US and UK delivering enterprise resiliency (ERMA) and workplace reservation (SRS) platforms.",
      "Replaced the legacy ERMA system with a modern Spring Boot platform, meeting a critical federal deadline and avoiding $2M+/day in potential fines.",
      "Modernized the SRS platform with LOB entitlement, same-day sync, and automated seat suggestions for tens of thousands of employees.",
      "Established cross-team architecture council and weekly design reviews, reducing rework by 30%.",
      "Scaled the global engineering team by leading hiring and onboarding across US and UK.",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Vice President — Lead Software Engineer",
    period: "2021 — 2023",
    location: "Columbus, OH",
    bullets: [
      "Lead engineer driving the architecture and delivery of the ERMA modernization onto Spring Boot microservices ahead of a federal compliance deadline.",
      "Set engineering standards, code review practices, and CI/CD patterns adopted across multiple platform teams.",
      "Partnered with risk and compliance stakeholders to align platform capabilities with evolving regulatory mandates.",
      "Mentored senior and mid-level engineers, growing the team's technical depth and delivery consistency.",
    ],
  },
  {
    company: "Cincinnati Financial Corporation",
    role: "Developer III",
    period: "2018 — 2021",
    location: "Cincinnati, OH",
    bullets: [
      "Enhanced the eDelivery (paperless billing) application using Java, Spring Boot, Angular, and Bootstrap.",
      "Migrated legacy JSP/Spring app to Angular 6 + Spring Boot, improving maintainability and performance.",
      "Implemented CI/CD pipelines with Jenkins, reducing deployment errors and cycle time.",
      "Mentored developers and led code reviews through servant leadership.",
    ],
  },
  {
    company: "Great American Insurance Group",
    role: "Application Analyst & Developer",
    period: "2015 — 2018",
    location: "Cincinnati, OH",
    bullets: [
      "Rewrote the legacy policy administration system with AngularJS, Spring, and Groovy.",
      "Implemented a web service enabling policy issuance in Mexico, supporting international expansion.",
      "Refactored pub/sub components to accelerate development and improve downstream integrations.",
      "Mentored interns and fostered team-wide adoption of SOLID principles.",
    ],
  },
  {
    company: "Hyatt Hotels Corporation",
    role: "Junior Software Developer (Internship)",
    period: "Jan — Aug 2015",
    location: "Chicago, IL",
    bullets: [
      "Enhanced Hyatt's global sales system used by 500+ hotels with localization and billing automation.",
      "Developed REST APIs for integration with Oracle POS, streamlining hotel operations.",
      "Delivered HTML/CSS/JS enhancements that improved UX and branding consistency.",
    ],
  },
];
