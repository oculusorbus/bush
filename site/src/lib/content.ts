export type PillarKey =
  | "change-management"
  | "project-management"
  | "active-management"
  | "process-improvement"
  | "presentation-skills"
  | "group-facilitation"
  | "coaching-method"
  | "team-resilience";

export interface Pillar {
  slug: PillarKey;
  title: string;
  short: string;
  group: "Project" | "Operations" | "People";
  color: string; // tailwind-class friendly hex for wheel highlight
  purpose: string;
  objectives: string[];
  topics: string[];
  approach: string[];
  audiences: string[];
  outcomes: string[];
  offerings: string[];
  meta: { title: string; description: string };
}

export const SITE = {
  name: "The Bush Group",
  legal: "The Bush Group, Inc.",
  tagline: "Clarity. Alignment. Execution.",
  email: "info@thebushgroupinc.com",
  founded: 2016,
  location: "Northern California",
  copyright: "© 2025 The Bush Group, Inc.",
};

export const NAV = [
  { label: "About", href: "/about" },
  { label: "The Core Eight", href: "/core-eight" },
  { label: "Advisory", href: "/advisory" },
  { label: "Consulting", href: "/consulting" },
  { label: "Facilitation", href: "/facilitation" },
  { label: "Contact", href: "/contact" },
];

export const PILLARS: Pillar[] = [
  {
    slug: "change-management",
    title: "Change Management",
    short: "Gain buy-in, overcome resistance, drive adoption.",
    group: "Project",
    color: "#B33B3B",
    purpose:
      "Help participants lead the people side of change so projects achieve and sustain their intended results.",
    objectives: [
      "Understand the value of change management",
      "Lead a change-management work stream end-to-end",
      "Integrate change management and project management effectively",
      "Customize and scale the approach to the situation",
    ],
    topics: [
      "Core concepts in change management",
      "The Case for Change — creating a compelling \"Why\"",
      "The psychology of change — how people change in a predictable pattern",
      "Integrating change management and project management",
      "Assessing project health",
      "Identifying how groups are impacted by change",
      "Strategies to reduce change saturation",
      "Building a change management plan",
      "Measuring change management effectiveness",
    ],
    approach: [
      "Custom training derived from best practices, tailored to the client's situation",
      "As a Prosci Executive Instructor, we also deliver Prosci formal certification courses",
    ],
    audiences: [
      "Anyone leading a project that impacts people",
      "People managers leading their team through a change",
      "Project team members, leaders, and middle managers",
    ],
    outcomes: [
      "Increase employee buy-in and support",
      "Minimize employee resistance",
      "Get better user adoption",
      "Make changes sustainable",
    ],
    offerings: ["Full 2.5-day program", "1-day", "Half-day", "Custom"],
    meta: {
      title: "Change Management",
      description:
        "Prosci-certified change management training and consulting. Increase adoption, minimize resistance, and sustain results.",
    },
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "Plan and lead projects that achieve results on time and within budget.",
    group: "Project",
    color: "#1F6F8B",
    purpose:
      "Help participants lead special projects that meet objectives and deliver on time and on budget.",
    objectives: [
      "Understand the value of project management",
      "Fulfill the role of the project manager",
      "Lead all aspects of a project effectively",
      "Use important project management tools and techniques",
      "Customize and scale the project management approach to the situation",
    ],
    topics: [
      "Core concepts in project management",
      "The role of the project manager",
      "Types of project lifecycles",
      "Ten knowledge areas and five process groups",
      "Project management tools and techniques",
      "Create a project plan for a real initiative",
    ],
    approach: [
      "The PMP method, streamlined for people who aren't full-time project managers",
      "Built on the PMI structured method — covering ten knowledge areas and five process groups",
      "Pricing includes post-session group touchpoints and 1:1 coaching with select participants",
    ],
    audiences: [
      "Anyone who leads projects",
      "Those leading projects in addition to their normal job responsibilities",
      "Project team members",
    ],
    outcomes: [
      "Projects that deliver on time and on budget",
      "Stronger sponsor alignment and stakeholder confidence",
      "Better risk identification and mitigation",
      "A repeatable approach across initiatives",
    ],
    offerings: ["Full 2.5-day program", "1-day", "Half-day", "Custom"],
    meta: {
      title: "Project Management",
      description:
        "PMI-based project management training streamlined for working leaders. Deliver projects on time, on budget, with confidence.",
    },
  },
  {
    slug: "active-management",
    title: "Active Management",
    short: "Execute daily operations to consistently achieve results.",
    group: "Operations",
    color: "#2F8F46",
    purpose:
      "Help managers lead a function, department, or operation that meets targets and drives results.",
    objectives: [
      "Understand core management principles",
      "Fulfill the role of a manager effectively",
      "Design and implement a Management Operating System (MOS) customized to your situation",
      "Demonstrate management best practices in how you lead your team",
    ],
    topics: [
      "Core management principles",
      "Five elements of a Management Operating System — Forecasting, Planning, Scheduling, Executing, Reporting",
      "How to design, customize, and implement an effective MOS",
      "The Seven Active Management Disciplines — Making assignments, Giving directions, Follow up, Feedback, Coaching and support, Solving problems, Reporting results",
    ],
    approach: [
      "Inspired by Alexander Proudfoot's method, originated in 1946 and refined over time",
    ],
    audiences: [
      "All people managers",
      "Project managers who manage project teams",
    ],
    outcomes: [
      "More engaged, focused, and accountable employees",
      "Teams with clear goals that achieve or exceed objectives",
      "Better accountability for both manager and team results",
    ],
    offerings: ["Full 2.5-day program", "1-day", "Half-day", "Custom"],
    meta: {
      title: "Active Management",
      description:
        "Build a Management Operating System and run operations that consistently hit targets. Practical training for working managers.",
    },
  },
  {
    slug: "process-improvement",
    title: "Process Improvement",
    short: "Simplify work, solve problems, and improve quality.",
    group: "Operations",
    color: "#C9A86A",
    purpose:
      "Help participants eliminate waste, streamline work, and improve the quality of business processes.",
    objectives: [
      "Understand the core concepts and tools of the Lean Method",
      "Understand the core concepts of the Six Sigma Method",
      "Integrate Lean and Six Sigma tools and concepts effectively",
      "Apply the Lean Six Sigma Method on a real-world improvement project",
    ],
    topics: [
      "Historical context for Lean and Six Sigma",
      "Five core concepts of the Lean Method",
      "Eight categories of waste",
      "Principles of Kaizen and Gemba",
      "5S approach to improving work-spaces",
      "Five phases of the DMAIC Method",
      "Data tools for root cause analysis",
      "Tools for sustaining improvement",
    ],
    approach: [
      "Integrated approach combining Lean (Toyota Production Systems, 1950s) with Six Sigma (Motorola/GE, 1980s)",
      "Green Belt and Black Belt training delivered by a Lean Six Sigma Master Black Belt with formal certification option",
    ],
    audiences: [
      "Anyone who manages a process, function, or operation",
      "Anyone who leads quality or work-process improvement projects",
    ],
    outcomes: [
      "Reduced waste",
      "Improved quality",
      "Simplified workflows",
      "Better results and customer experience",
    ],
    offerings: ["Full 3.5-day program", "1-day", "Half-day", "Custom — in-person or virtual"],
    meta: {
      title: "Process Improvement",
      description:
        "Lean Six Sigma training and consulting from a Master Black Belt. Eliminate waste, improve quality, and sustain the gains.",
    },
  },
  {
    slug: "presentation-skills",
    title: "Presentation Skills",
    short: "Create and deliver presentations that make an impact.",
    group: "People",
    color: "#8C5BC6",
    purpose:
      "Help participants speak confidently in public and deliver engaging, impactful presentations.",
    objectives: [
      "Create presentations that connect with the audience and make an impact",
      "Present using techniques used by professional speakers",
      "Identify and resolve common challenges and difficulties when speaking",
      "Practice presentation skills and receive feedback and coaching",
    ],
    topics: [
      "The role of the speaker",
      "Creating a presentation that connects",
      "Presenting your best self in front of a group",
      "Vocal technique — tone, pace, pitch, inflection",
      "Develop your speaking style",
      "Connecting through storytelling, analogy, illustration",
      "Dealing with technology and speaking virtually",
      "Best-practice tips, tricks, and traps",
      "Multiple live practice sessions",
    ],
    approach: [
      "Signature method developed by a former U.S. national champion in public speaking and nationally ranked collegiate debater",
      "Refined through years of classical training and two decades as a professional speaker",
    ],
    audiences: [
      "Anyone who speaks publicly or presents to groups",
      "Project leaders, people managers, executives",
    ],
    outcomes: [
      "Presentations that motivate listeners to action",
      "Stakeholder buy-in — approvals, sales, decisions, agreement",
      "More opportunities to speak",
    ],
    offerings: ["Full 2-day program", "1-day", "Half-day", "Custom — in-person or virtual"],
    meta: {
      title: "Presentation Skills",
      description:
        "Champion-level presentation skills training. Speak with clarity and impact, and earn the next yes.",
    },
  },
  {
    slug: "group-facilitation",
    title: "Group Facilitation",
    short: "Lead groups that collaborate, reach consensus, and get results.",
    group: "People",
    color: "#0D8AA6",
    purpose:
      "Help you facilitate groups that are engaged, collaborate well, achieve consensus, and get results.",
    objectives: [
      "Understand the value of facilitation",
      "Fulfill the role of the facilitator",
      "Demonstrate facilitation best practices when leading group sessions",
      "Develop competence leading various types of meetings",
      "Practice in live facilitation sessions",
    ],
    topics: [
      "Facilitation core concepts",
      "Eight roles of a meeting leader",
      "Planning an effective session",
      "Presenting yourself professionally",
      "Creating energy and engagement",
      "Dealing with group conflict",
      "Driving collaborative work",
      "Building and achieving consensus",
      "Managing distractions and negative behaviors",
    ],
    approach: [
      "Custom training tailored to client needs",
      "As a Leadership Strategies Core Team Instructor, we also deliver the Effective Facilitator Course",
    ],
    audiences: [
      "Anyone who leads meetings or work groups",
      "People managers and project leaders",
    ],
    outcomes: [
      "Meetings that are focused, engaging, and get results",
      "Fewer dysfunctional meeting behaviors",
      "Better collaboration and easier consensus",
      "Meetings that start and end on time",
    ],
    offerings: ["Full 2-day program", "1-day", "Half-day", "Custom — in-person or virtual"],
    meta: {
      title: "Group Facilitation",
      description:
        "Run meetings that engage, align, and decide. Practical facilitation training from Certified Master Facilitators.",
    },
  },
  {
    slug: "coaching-method",
    title: "Coaching Method",
    short: "Guide others to overcome barriers, develop, and grow.",
    group: "People",
    color: "#E67A2E",
    purpose:
      "Help participants coach and support employees to overcome obstacles, grow professionally, and improve performance.",
    objectives: [
      "Understand the role of the coach",
      "Use professional coaching method, tools, and techniques",
      "Demonstrate coaching best practices",
      "Practice coaching in role-playing simulations",
    ],
    topics: [
      "Why coaching is so important",
      "The role of the coach",
      "Engaging people to set goals",
      "Assessing the starting point and interim milestones",
      "Tracking progress over time",
      "Coaching best practices — tips and traps",
      "Overcoming obstacles and setbacks",
      "Achieving outcomes and celebrating success",
    ],
    approach: [
      "Custom coaching training tailored to the client's needs",
      "As an Integrity Solutions Core Team Instructor, we also deliver Integrity Coaching courses",
    ],
    audiences: [
      "People managers",
      "Project leaders",
      "Leaders and middle managers",
      "Consultants and advisors",
    ],
    outcomes: [
      "Improved employee or team-member performance",
      "Higher engagement and retention",
      "Developed high-potential talent",
      "Stronger team cohesion",
    ],
    offerings: ["Full 2-day program", "1-day", "Half-day", "Custom — in-person or virtual"],
    meta: {
      title: "Coaching Method",
      description:
        "Develop your people with a structured, professional coaching method. Tools, techniques, and live practice.",
    },
  },
  {
    slug: "team-resilience",
    title: "Team Resilience",
    short: "Sustain team engagement and performance under pressure.",
    group: "People",
    color: "#3A5BB0",
    purpose:
      "Help teams perform under pressure without losing their sense of purpose, unity, and wellness.",
    objectives: [
      "Realign to an individual and team sense of purpose",
      "Understand gaps and barriers to resilience",
      "Identify faulty assumptions and rationalizations",
      "Put actions in place to improve resilience and performance",
    ],
    topics: [
      "The energy / engagement crisis",
      "Energy as a personal resource",
      "The psychology of change",
      "Four dimensions of energy",
      "Purpose and Best Self",
      "Old stories and faulty assumptions",
      "Gaps and opportunities for improvement",
      "Habits versus rituals",
      "SMART goals and supporting behaviors",
    ],
    approach: [
      "Inspired by Dr. Jim Loehr and Dr. Jack Groppel's The Corporate Athlete",
      "Built on Johnson & Johnson's Energy for Performance methodology",
    ],
    audiences: [
      "Anyone who leads a team of employees",
      "Project team leaders and members",
      "Leaders and middle managers",
    ],
    outcomes: [
      "Increased personal and team engagement",
      "Stronger sense of purpose",
      "Reduced impacts of change fatigue",
      "Better team cohesion and performance",
    ],
    offerings: ["Full 2-day program", "1-day", "Half-day", "Custom — in-person or virtual"],
    meta: {
      title: "Team Resilience",
      description:
        "Help your team perform under pressure without losing purpose or unity. Inspired by The Corporate Athlete.",
    },
  },
];

export const TESTIMONIALS = [
  {
    quote: "Accomplished more in 4 months than the previous 4 years.",
    attribution: "Executive Sponsor",
  },
  {
    quote:
      "I never knew strategic planning could be this much fun. The very best session I've ever experienced — ever.",
    attribution: "C-Suite Leader",
  },
  {
    quote:
      "This was the first public Town Hall comment meeting I've ever seen go well… and it was awesome.",
    attribution: "Government Client",
  },
  {
    quote: "That was the best meeting I've ever attended.",
    attribution: "Workshop Participant",
  },
  {
    quote: "I can't believe how much we got accomplished.",
    attribution: "Strategic Off-Site Participant",
  },
];

export const WHY_US = [
  "Top-shelf, certified, seasoned change managers and facilitators",
  "Experts in comparative methods — Prosci, Kotter, Bridges, Conner",
  "Strong execution expertise — Agile, Scrum, PMP, Lean, Six Sigma",
  "Broad experience across 16+ industry verticals",
  "Corporate, Government, Education, Non-profit, and NGO",
  "Global — on-site sessions in 25 different countries",
  "80% of sessions are for C-suite and executive level",
  "Participants from 50% of Fortune 100 companies",
];

export const ADVISORY_EXPERTISE = [
  "Strategic Planning",
  "Partnering Sessions",
  "Board Facilitation",
  "Mergers & Acquisitions",
  "Problem Solving & Decision Making",
  "Ideation & Brainstorming",
  "Executive Retreats",
  "Team Formation & Team Building",
  "Conflict Resolution",
  "Key Message & Communications",
  "Design & Innovation",
  "System Analysis",
  "Requirements Gathering",
  "Prioritization Sessions",
  "Portfolio Selection",
];
