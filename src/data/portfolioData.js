export const PERSONAL_INFO = {
  name: "Aditya Kumar",
  role: "Backend & Full-Stack Engineer",
  titleSuffix: "Python & Django Specialist",
  subtitles: [
    "Backend & Full-Stack Engineer @ Genpact",
    "Scalable Python & Django Systems Architect",
    "PostgreSQL, Oracle DB & Cloud Pipeline Specialist",
    "Competitive Programmer (LeetCode Top 6.3%)"
  ],
  email: "aadi0211kumar@gmail.com",
  phone: "+91 6202393823",
  location: "Bengaluru, Karnataka, India",
  status: "Available for Backend, Full-Stack & Distributed Systems Roles",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-6440a8429/",
  github: "https://github.com/AADIKANE002",
  leetcode: "https://leetcode.com/",
  resumePdfUrl: "./Aditya_Kumar_Backend_FullStack_Resume.pdf",
  resumeDocxUrl: "./Aditya_Kumar_Backend_FullStack_Resume.docx",
  bio: "Software Engineer with 2+ years of experience building Python-based backend, data-processing, and full-stack applications for enterprise clients. Experienced in designing REST-oriented services, PostgreSQL/Oracle-backed data workflows, CI/CD pipelines, containerized deployments, and end-to-end feature delivery from data access through UI. Automated critical data pipelines saving 40+ hours/week and reduced query latency by 45%.",
  stats: [
    { label: "Experience", value: "2+ Years", subtext: "Enterprise Production" },
    { label: "LeetCode Rating", value: "1835", subtext: "Top 6.3% Globally" },
    { label: "Query Latency Cut", value: "45%", subtext: "Oracle DB Optimization" },
    { label: "Time Saved", value: "40 hrs/wk", subtext: "Automated Pre-QC & ETL" },
  ]
};

export const EXPERIENCES = [
  {
    id: "genpact-backend",
    company: "Genpact",
    role: "Software / Backend Full-Stack Engineer",
    type: "Full-time",
    period: "Aug 2024 – Present",
    location: "Bengaluru, India",
    current: true,
    accent: "from-cyan-500 to-blue-600",
    metrics: [
      { label: "Weekly Time Saved", value: "40 hrs" },
      { label: "Targeting Efficiency", value: "+20%" },
      { label: "Cloud Deployment", value: "AWS Lambda" }
    ],
    highlights: [
      "Built a Python-based enterprise analytics application that extracts and filters PostgreSQL data by attribute value, time period, and geography; processes syndicate and custom-attribute files; generates consolidated reports; and applies client-specific recoding.",
      "Designed and implemented application UI and backend integration, connecting frontend workflows to Python data-processing services and analytical pipelines; developed REST-oriented components and owned end-to-end feature delivery.",
      "Built and maintained CI/CD pipelines, containerized application dependencies with Docker, and deployed production workflows on AWS Lambda, improving release velocity and deployment consistency.",
      "Automated data preprocessing, validation, and pre-QC workflows, saving approximately 40 hours/week and improving operational reliability of downstream reporting systems.",
      "Engineered backend analytical models using Dirichlet-Multinomial (DirMult) modeling, switching constants, and hierarchical clustering for CDT-tree generation."
    ],
    skills: ["Python", "Django", "PostgreSQL", "REST APIs", "AWS Lambda", "Docker", "CI/CD", "Oracle DB", "ETL Pipelines"]
  },
  {
    id: "genpact-intern",
    company: "Genpact",
    role: "Data Analyst / Backend Intern",
    type: "Internship",
    period: "Jan 2024 – Jun 2024",
    location: "Bengaluru, India",
    current: false,
    accent: "from-blue-500 to-indigo-600",
    metrics: [
      { label: "Query Latency Cut", value: "45%" },
      { label: "Dashboard Latency", value: "Real-time" }
    ],
    highlights: [
      "Optimized complex SQL queries on Oracle DB, reducing dashboard data-fetch latency by 45% for enterprise reporting.",
      "Built KPI dashboards using Power BI and Tableau, translating backend data into business-facing reporting tools.",
      "Collaborated with cross-functional engineering teams to diagnose production bottlenecks and ensure high query throughput."
    ],
    skills: ["Oracle DB", "SQL Optimization", "Query Tuning", "Power BI", "Tableau", "ETL", "Data Validation"]
  }
];

export const PROJECTS = [
  {
    id: "buyme-ecommerce",
    title: "BuyMe — E-Commerce Web Platform",
    category: "Full Stack",
    tagline: "High-performance modular e-commerce engine with order management, secure auth & REST APIs",
    description: "Developed a comprehensive full-stack e-commerce web platform using Django, JavaScript, and SQLite. Features full-cycle user authentication, product catalog filtering, cart management, and seamless order lifecycle tracking.",
    longDescription: "Designed and implemented RESTful APIs following a modular Model-View-Controller (MVC) architecture to ensure clean separation of concerns, high maintainability, and seamless scalability for backend services. Implemented optimized database indexing and query optimization for low-latency product catalog filtering.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    techStack: ["Django", "Python", "JavaScript", "SQLite", "REST APIs", "MVC Architecture", "HTML5/CSS3"],
    features: [
      "Robust user authentication, session security, and role-based permissions",
      "Scalable REST APIs for cart, checkout, inventory synchronization, and order processing",
      "Dynamic frontend interactivity using clean, responsive modular JavaScript",
      "Relational database schema with optimized indexing for high-speed product catalog queries"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "llm-agent",
    title: "LLM-Based Analytics Backend Agent",
    category: "Backend & AI",
    tagline: "Autonomous multi-step reasoning backend agent with dynamic tool invocation & memory",
    description: "Built a Python goal-driven backend agent system for dataset analysis, insight generation, and analytical reasoning, applying tool usage, memory-based context handling, and Agentic AI/RAG design patterns.",
    longDescription: "The LLM-Based Analytics Agent orchestrates LLM prompts, dataset tools, multi-step reasoning, and memory-based context for automated analytical insight generation. Features fail-safe retry mechanisms, token-efficient prompt orchestration, and modular API connectors.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "REST APIs", "Prompt Orchestration", "Agentic Architecture", "Tool Calling", "Memory State", "RAG"],
    features: [
      "Dynamic tool calling and execution loop with structured output parsing",
      "Short-term and long-term memory retrieval for context persistence across sessions",
      "Fail-safe retry mechanisms and token-efficient prompt orchestrator",
      "Modular design allowing plug-and-play addition of custom enterprise APIs and datasets"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "we-care",
    title: "We-Care — Android Healthcare Platform",
    category: "Full Stack & Mobile",
    tagline: "Patient-centric healthcare application with Firebase backend & REST-style service calls",
    description: "Built an Android application with a Firebase backend supporting appointment scheduling, telemedicine workflows, and digital health records, including real-time data sync and REST-style service calls.",
    longDescription: "Integrated Firebase Realtime Database and Cloud Authentication to deliver instant synchronization between patients and healthcare providers. Engineered secure digital health record management with encrypted data storage.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    techStack: ["Android", "Java", "Firebase", "Realtime DB", "Cloud Auth", "REST APIs", "Material Design"],
    features: [
      "Real-time doctor appointment booking and conflict resolution algorithms",
      "Encrypted digital health record storage and patient history logs",
      "Push notifications and appointment reminders via Firebase Cloud Messaging",
      "Intuitive and accessible mobile UI built with Android Material Design"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "robo-weed",
    title: "RoboWeed — IoT Agricultural Rover",
    category: "IoT & Systems",
    tagline: "Autonomous Raspberry Pi edge system with real-time detection & automated hardware control",
    description: "Built a Raspberry Pi + YOLOv8 computer-vision system for real-time weed detection and automated spraying using Python, Roboflow, and IoT sensors; achieved 90% detection accuracy.",
    longDescription: "Developed efficient sensor-processing pipelines using Python and connected IoT hardware peripherals. Achieved high-accuracy detection and rapid response workflows directly on edge hardware.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Raspberry Pi", "IoT Sensors", "Computer Vision", "Hardware Automation", "Edge Processing"],
    features: [
      "Real-time sensor data aggregation and edge compute pipeline in Python",
      "Automated motor control and precision actuator triggering",
      "Low-latency response cycle optimized for resource-constrained hardware",
      "Remote monitoring telemetry and IoT data logging"
    ],
    github: "https://github.com/AADIKANE002",
    featured: false
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Python", level: 95, tag: "Primary Backend" },
      { name: "Django", level: 90, tag: "MVC & REST Framework" },
      { name: "REST API Design", level: 95, tag: "Endpoints & Auth" },
      { name: "PostgreSQL", level: 92, tag: "Relational Modeling" },
      { name: "Oracle DB", level: 88, tag: "Enterprise Queries" },
      { name: "SQL & Query Tuning", level: 92, tag: "45% Latency Cut" },
      { name: "Firebase", level: 86, tag: "Auth & Realtime DB" }
    ]
  },
  {
    title: "Frontend & Full-Stack",
    icon: "Code2",
    skills: [
      { name: "JavaScript", level: 88, tag: "Modular Web & UI" },
      { name: "Full-Stack Architecture", level: 90, tag: "End-to-End Delivery" },
      { name: "MVC Architecture", level: 92, tag: "Clean Separation" },
      { name: "HTML5 & CSS3", level: 88, tag: "Responsive Design" },
      { name: "UI Integration", level: 86, tag: "REST API Binding" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS Lambda", level: 90, tag: "Serverless Delivery" },
      { name: "AWS EC2 & IoT Core", level: 84, tag: "Compute & Devices" },
      { name: "Docker", level: 88, tag: "Containerization" },
      { name: "CI / CD Pipelines", level: 90, tag: "Release Automation" },
      { name: "Git & GitHub", level: 94, tag: "Version Control" },
      { name: "Oracle Cloud (OCI)", level: 82, tag: "Cloud Infrastructure" }
    ]
  },
  {
    title: "Architecture & Languages",
    icon: "Layers",
    skills: [
      { name: "ETL & Data Pipelines", level: 92, tag: "40 hrs/wk Saved" },
      { name: "Business Logic Design", level: 90, tag: "Enterprise Scalability" },
      { name: "C++", level: 88, tag: "DSA & High Performance" },
      { name: "Java", level: 85, tag: "OOP & Android" },
      { name: "R", level: 80, tag: "Statistical Logic" }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode",
    title: "LeetCode 1835 Rating",
    subtitle: "Top 6.3% Globally",
    description: "Consistent problem solver with deep algorithmic foundation across dynamic programming, graph theory, trees, and backend system design.",
    icon: "Trophy",
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
    badge: "International",
    stat: "71/100 Score"
  },
  {
    id: "dsc-lead",
    title: "Co-Lead Competitive Programming",
    subtitle: "Google Developer Student Clubs (DSC RVITM)",
    description: "Mentored 150+ students in Data Structures and Algorithms, organized coding contests, and spearheaded workshops on clean code and system design.",
    icon: "Users",
    badge: "Leadership",
    stat: "150+ Mentees"
  },
  {
    id: "impact-genpact",
    title: "Genpact Pipeline & Latency Impact",
    subtitle: "40 hrs/wk Saved | 45% Faster DB",
    description: "Engineered automated data preprocessing saving 40 hours weekly and fine-tuned complex Oracle SQL queries to cut latency by nearly half in enterprise production.",
    icon: "Zap",
    badge: "Production Impact",
    stat: "40 hrs/wk"
  },
  {
    id: "robotics",
    title: "1st Place, CODE BATTLE",
    subtitle: "Phoenix Robotics Club & 2nd Place CODM",
    description: "Won 1st place in algorithmic programming championship and 2nd place in robotics software development challenge.",
    icon: "Sparkles",
    badge: "Champion",
    stat: "1st Place"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Genpact",
    tag: "Process Optimization & Quality",
    icon: "ShieldCheck"
  },
  {
    title: "Machine Learning, Data Science & GenAI with Python",
    issuer: "Udemy",
    tag: "ML & AI Systems",
    icon: "Brain"
  },
  {
    title: "Natural Language Processing with Python",
    issuer: "Udemy",
    tag: "NLP & Text Processing",
    icon: "Sparkles"
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations",
    issuer: "Oracle University",
    tag: "Cloud AI Architecture",
    icon: "Cloud"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan (Coursera)",
    tag: "Data Structures & Algorithms",
    icon: "Code2"
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
    "Coursework in Distributed Systems, Database Management, Algorithms, Web Architecture, Computer Networks, and Cloud Computing"
  ]
};

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       - Background & engineering summary
  • exp         - View work experience timeline
  • projects    - List all featured software projects
  • skills      - Output backend & full-stack skill matrix
  • certs       - View professional certifications
  • achievements- Competitive programming & awards
  • education   - Academic background & GPA
  • contact     - Direct links and email
  • resume      - Download or view PDF resume
  • clear       - Clean terminal screen
  • matrix      - Secret hacker matrix rain toggle`,

  about: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role} (${PERSONAL_INFO.titleSuffix})
Location: ${PERSONAL_INFO.location}
Bio: ${PERSONAL_INFO.bio}
Status: ${PERSONAL_INFO.status}`,

  exp: `[1] Genpact | Software / Backend Full-Stack Engineer (Aug 2024 - Present)
    • Built Python backend data platform on PostgreSQL with custom attribute filtering
    • Full-stack ownership from data layer to UI with REST-oriented architecture
    • Docker containerization & AWS Lambda CI/CD deployment
    • Saved 40 hrs/week via automated pre-QC and validation workflows

[2] Genpact | Data Analyst / Backend Intern (Jan 2024 - Jun 2024)
    • Optimized complex Oracle DB SQL queries (-45% latency)
    • Built enterprise KPI reporting dashboards in Power BI/Tableau`,

  projects: `[1] BuyMe — E-Commerce Web Platform (Django, JS, SQLite, REST MVC)
[2] LLM-Based Analytics Backend Agent (Python, Tool Calling, Memory State)
[3] We-Care — Android Healthcare Platform (Java, Firebase Realtime DB, Cloud Auth)
[4] RoboWeed — IoT Agricultural Rover (Raspberry Pi, Python, Sensors)`,

  skills: `• Backend: Python, Django, REST APIs, PostgreSQL, Oracle DB, SQL, Firebase
• Frontend: JavaScript, Full-Stack Architecture, MVC, HTML5/CSS3
• DevOps & Cloud: AWS Lambda, EC2, Docker, CI/CD Pipelines, Git, OCI
• Systems: Python, Java, C++, SQL, R`,

  certs: `🎓 Lean Six Sigma Green Belt — Genpact
🎓 Machine Learning, Data Science & GenAI with Python — Udemy
🎓 Natural Language Processing with Python — Udemy
🎓 OCI AI Foundations — Oracle University
🎓 Python Data Structures — University of Michigan`,

  achievements: `🏆 LeetCode 1835 Rating (Top 6.3% Globally)
🚀 Google Code Jam Qualifier (Score: 71/100)
👥 Co-Lead Competitive Programming @ Google DSC RVITM
⚡ Saved 40 hrs/wk via automated pipelines at Genpact
🥇 1st Place, CODE BATTLE — Phoenix Robotics Club`,

  education: `🎓 RV Institute of Technology and Management (2020 - 2024)
Degree: B.E. in Computer Science (GPA: 8.04 / 10)
Location: Bengaluru, India`,

  contact: `📧 Email: ${PERSONAL_INFO.email}
📱 Phone: ${PERSONAL_INFO.phone}
💼 LinkedIn: ${PERSONAL_INFO.linkedin}
🐙 GitHub: ${PERSONAL_INFO.github}`,

  resume: `📄 Opening Resume: ${PERSONAL_INFO.resumePdfUrl}`
};
