export const PERSONAL_INFO = {
  name: "Aditya Kumar",
  role: "Software Development Engineer",
  subtitles: [
    "Software Development Engineer @ Genpact",
    "Scalable Backend & Distributed Systems Specialist",
    "AI & Agentic Workflow Architect",
    "Competitive Programmer (LeetCode Top 6.3%)"
  ],
  email: "aadi0216kumar@gmail.com",
  phone: "+91 6202393823",
  location: "Bengaluru, Karnataka, India",
  status: "Open to exciting backend, distributed systems & AI opportunities",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-6440a8429/",
  github: "https://github.com/AADIKANE002",
  leetcode: "https://leetcode.com/",
  resumeUrl: "./Aditya_Kumar.pdf",
  bio: "Software Development Engineer with 2+ years of experience building scalable backend services, robust APIs, and intelligent application frameworks. Proven track record in optimizing database performance, implementing CI/CD pipelines, and integrating modern AI tools into production enterprise workflows.",
  stats: [
    { label: "Experience", value: "2+ Years", subtext: "Production Systems" },
    { label: "LeetCode Rating", value: "1835", subtext: "Top 6.3% Globally" },
    { label: "Latency Reduced", value: "45%", subtext: "Enterprise DB Queries" },
    { label: "Time Saved", value: "40 hrs/wk", subtext: "Automated Pre-QC" },
  ]
};

export const EXPERIENCES = [
  {
    id: "genpact-sde",
    company: "Genpact",
    role: "Software Engineer",
    type: "Full-time",
    period: "Aug 2024 – Present",
    location: "Bengaluru, India",
    current: true,
    accent: "from-cyan-500 to-blue-600",
    metrics: [
      { label: "Weekly Time Saved", value: "40 hrs" },
      { label: "Targeting Efficiency", value: "+20%" },
      { label: "Deployment", value: "AWS Lambda" }
    ],
    highlights: [
      "Architected and implemented a robust application framework for intelligent insight generation across enterprise client workflows.",
      "Built an end-to-end processing pipeline using Python that handles raw data, automates execution, and deploys the final service on AWS Lambda for production use.",
      "Integrated CI/CD pipelines to automate benchmarking, validation, and deployment processes.",
      "Developed automated validation and pre-QC checks using Python, saving approximately 40 hours per week in operational overhead.",
      "Engineered backend models for customer segmentation and behavioral analysis, improving targeting efficiency by 20%."
    ],
    skills: ["Python", "AWS Lambda", "CI/CD", "Data Pipelines", "Enterprise Frameworks", "Customer Segmentation", "QC Automation"]
  },
  {
    id: "genpact-intern",
    company: "Genpact",
    role: "Software Engineering Intern",
    type: "Internship",
    period: "Jan 2024 – Jun 2024",
    location: "Bengaluru, India",
    current: false,
    accent: "from-blue-500 to-indigo-600",
    metrics: [
      { label: "Query Latency Reduction", value: "45%" },
      { label: "System Health", value: "Real-time" }
    ],
    highlights: [
      "Optimized complex SQL queries on Oracle DB, reducing data-fetch latency by 45% for high-throughput enterprise applications.",
      "Built and maintained internal tracking tools and KPI dashboards to monitor system health and operational metrics.",
      "Collaborated with cross-functional engineering teams to diagnose production bottlenecks and ensure high availability."
    ],
    skills: ["Oracle DB", "SQL Optimization", "KPI Dashboards", "Internal Tools", "Data Warehousing", "Performance Tuning"]
  }
];

export const PROJECTS = [
  {
    id: "llm-agent",
    title: "LLM-Based Application Agent",
    category: "AI & Agents",
    tagline: "Autonomous multi-step reasoning agent with dynamic tool invocation & memory",
    description: "Engineered an intelligent, goal-driven agent system designed to automate complex enterprise reasoning workflows. Implemented multi-step decision logic, dynamic tool usage, and memory-based context handling aligned with modern software design patterns.",
    longDescription: "The LLM-Based Application Agent is built to handle multi-turn complex tasks by decomposing goals into executable sub-tasks, choosing appropriate API tools dynamically, maintaining contextual conversation memory state, and executing validation safeguards against hallucinations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "OpenAI APIs", "Anthropic APIs", "Prompt Orchestration", "Agentic Architecture", "Tool Calling", "Memory State"],
    features: [
      "Dynamic tool calling and execution loop with structured output parsing",
      "Short-term and long-term memory retrieval for context persistence",
      "Fail-safe retry mechanisms and token-efficient prompt orchestrator",
      "Modular design allowing plug-and-play addition of custom enterprise APIs"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "buyme-ecommerce",
    title: "BuyMe - E-commerce Web Platform",
    category: "Full Stack",
    tagline: "High-performance modular e-commerce engine with order management & secure auth",
    description: "Developed a comprehensive full-stack e-commerce web platform using Django, JavaScript, and SQLite. Features full-cycle user authentication, product catalog filtering, cart management, and seamless order lifecycle tracking.",
    longDescription: "Designed and implemented RESTful APIs following a modular Model-View-Controller (MVC) architecture to ensure clean separation of concerns, high maintainability, and seamless scalability for backend services.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    techStack: ["Django", "Python", "JavaScript", "SQLite", "REST APIs", "MVC Architecture", "HTML/CSS"],
    features: [
      "Robust user authentication and session management system",
      "Scalable REST APIs for cart, checkout, and inventory synchronization",
      "Dynamic frontend interactivity using clean modular JavaScript",
      "Relational database schema with optimized indexing for product catalog queries"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "robo-weed",
    title: "Robo Weed - IoT Agricultural Rover",
    category: "IoT & Hardware",
    tagline: "Autonomous Raspberry Pi rover with real-time detection & automated hardware control",
    description: "Built an intelligent Raspberry Pi-powered robotic rover integrating real-time edge detection algorithms and automated hardware actuation to identify and manage weeds in agricultural environments.",
    longDescription: "Developed efficient sensor-processing pipelines using Python and connected IoT hardware peripherals. Achieved high-accuracy detection and rapid response workflows directly on edge hardware.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Raspberry Pi", "IoT Sensors", "Computer Vision", "Hardware Automation", "Edge Processing"],
    features: [
      "Real-time sensor data aggregation and edge compute pipeline",
      "Automated motor control and precision actuator triggering",
      "Low-latency response cycle optimized for resource-constrained hardware",
      "Remote monitoring telemetry and telemetry logging"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "we-care",
    title: "We-Care - Android Healthcare App",
    category: "Mobile",
    tagline: "Patient-centric Android application for real-time appointment scheduling & health records",
    description: "Engineered a responsive Android mobile application backed by Google Firebase to streamline doctor appointment booking, telemedicine scheduling, and secure digital health record management.",
    longDescription: "Integrated Firebase Realtime Database and Cloud Authentication to deliver instant synchronization between patients and healthcare providers with high security standards.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    techStack: ["Android", "Java", "Firebase", "Realtime DB", "Cloud Auth", "Material UI"],
    features: [
      "Real-time doctor appointment booking and conflict resolution",
      "Encrypted digital health record storage and patient history logs",
      "Push notifications and appointment reminders via Firebase Cloud Messaging",
      "Intuitive and accessible mobile UI built with Android Material Design"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 95, tag: "Primary Backend & AI" },
      { name: "Java", level: 85, tag: "OOP & Android" },
      { name: "C++", level: 88, tag: "DSA & Problem Solving" },
      { name: "JavaScript", level: 85, tag: "Web & Full-Stack" },
      { name: "SQL", level: 90, tag: "Complex Queries & Tuning" },
      { name: "HTML / CSS", level: 88, tag: "Responsive Web" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (Lambda, EC2)", level: 90, tag: "Serverless & Compute" },
      { name: "AWS IoT Core", level: 82, tag: "Device Connectivity" },
      { name: "Docker", level: 85, tag: "Containerization" },
      { name: "CI / CD Pipelines", level: 88, tag: "Automated Deployments" },
      { name: "Git & GitHub", level: 92, tag: "Version Control" }
    ]
  },
  {
    title: "Frameworks & Backend",
    icon: "Server",
    skills: [
      { name: "REST APIs", level: 95, tag: "API Design & MVC" },
      { name: "Django", level: 90, tag: "Full-Stack Framework" },
      { name: "Oracle DB", level: 88, tag: "Enterprise Database" },
      { name: "Firebase", level: 86, tag: "Auth & Realtime DB" },
      { name: "SQLite", level: 90, tag: "Embedded Storage" }
    ]
  },
  {
    title: "AI & Modern Tooling",
    icon: "Brain",
    skills: [
      { name: "OpenAI / Anthropic APIs", level: 92, tag: "LLM Integration" },
      { name: "Agentic AI & Orchestration", level: 90, tag: "Multi-Step Reasoners" },
      { name: "Prompt Engineering", level: 92, tag: "Structured Context" },
      { name: "Cursor & Modern DevTools", level: 95, tag: "AI Accelerated Dev" }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode",
    title: "LeetCode 1835 Rating",
    subtitle: "Top 6.3% Globally",
    description: "Consistent problem solver with deep algorithmic foundation across dynamic programming, graph theory, trees, and system design.",
    icon: "Trophy",
    color: "from-amber-400 to-orange-500",
    badge: "Top 6.3%",
    stat: "1835 Rating",
    link: "https://leetcode.com/"
  },
  {
    id: "codejam",
    title: "Google Code Jam Qualifier",
    subtitle: "Score: 71 / 100",
    description: "Qualified for Google's prestigious international algorithmic programming competition, demonstrating high-speed analytical problem-solving under strict time constraints.",
    icon: "Award",
    color: "from-blue-400 to-cyan-500",
    badge: "International",
    stat: "71/100 Score"
  },
  {
    id: "dsc-lead",
    title: "Co-lead Competitive Programming",
    subtitle: "Google Developer Student Clubs (DSC RVITM)",
    description: "Mentored 150+ students in Data Structures and Algorithms, organized coding contests, and spearheaded workshops on clean code and system design.",
    icon: "Users",
    color: "from-purple-400 to-pink-500",
    badge: "Leadership",
    stat: "150+ Mentees"
  },
  {
    id: "impact-genpact",
    title: "Genpact Automation & Latency Impact",
    subtitle: "40 hrs/wk Saved | 45% Faster DB",
    description: "Engineered automated validation saving 40 hours weekly and fine-tuned complex Oracle SQL queries to cut latency by nearly half in enterprise production.",
    icon: "Zap",
    color: "from-emerald-400 to-teal-500",
    badge: "Production Impact",
    stat: "40 hrs/wk"
  }
];

export const EDUCATION = {
  institution: "RV Institute of Technology and Management",
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  period: "2020 – 2024",
  gpa: "8.04 / 10.0",
  location: "Bengaluru, India",
  highlights: [
    "Co-lead Competitive Programming at Google DSC RVITM",
    "Coursework in Distributed Systems, Database Management, Algorithms, AI, Computer Networks, and Cloud Computing"
  ]
};

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       - Short background summary
  • exp         - View work experience timeline
  • projects    - List all featured software projects
  • skills      - Output technical skill breakdown
  • achievements- View competitive programming & awards
  • education   - Academic background & GPA
  • contact     - Direct links and email
  • resume      - Download or view PDF resume
  • clear       - Clean terminal screen
  • matrix      - Secret hacker matrix rain toggle`,

  about: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}
Location: ${PERSONAL_INFO.location}
Bio: ${PERSONAL_INFO.bio}
Status: ${PERSONAL_INFO.status}`,

  exp: `[1] Genpact | Software Engineer (Aug 2024 - Present)
    • Enterprise insight framework & Python AWS Lambda pipelines
    • Saved 40 hrs/week via automated pre-QC
    • +20% customer targeting efficiency

[2] Genpact | Software Engineering Intern (Jan 2024 - Jun 2024)
    • Optimized Oracle DB queries (-45% latency)
    • Built real-time KPI health dashboards`,

  projects: `[1] LLM-Based Application Agent (Python, OpenAI/Anthropic APIs, Tool Calling)
[2] BuyMe - E-commerce Web Platform (Django, JS, SQLite, REST MVC)
[3] Robo Weed - IoT Agricultural Rover (Raspberry Pi, Sensors, Python)
[4] We-Care - Android Healthcare App (Firebase, Java, Real-time DB)`,

  skills: `• Languages: Python, Java, C++, JavaScript, SQL, HTML/CSS
• Cloud & DevOps: AWS (Lambda, EC2, IoT Core), Docker, CI/CD, Git
• Frameworks: Django, REST APIs, Firebase, SQLite, Oracle DB
• AI & Tooling: OpenAI/Anthropic APIs, Agentic AI, Prompt Orchestration, Cursor`,

  achievements: `🏆 LeetCode 1835 Rating (Top 6.3% Globally)
🚀 Google Code Jam Qualifier (Score: 71/100)
👥 Co-lead Competitive Programming @ Google DSC RVITM
⚡ Saved 40 hrs/wk via automated pipelines at Genpact`,

  education: `🎓 RV Institute of Technology and Management (2020 - 2024)
Degree: B.E. in Computer Science (GPA: 8.04)
Location: Bengaluru, India`,

  contact: `📧 Email: ${PERSONAL_INFO.email}
📱 Phone: ${PERSONAL_INFO.phone}
💼 LinkedIn: ${PERSONAL_INFO.linkedin}
🐙 GitHub: ${PERSONAL_INFO.github}`,

  resume: `📄 Opening Resume: ${PERSONAL_INFO.resumeUrl}`
};
