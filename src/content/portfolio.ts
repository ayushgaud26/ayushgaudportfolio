// All portfolio content lives here — edit freely, the UI reads from this file.

export const profile = {
  name: "AYUSH GAUD",
  role: "AI/ML ENGINEER",
  statement: "Turning data into intelligence and ideas into intelligent systems.",
  // Placeholders — replace with real details.
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resumeUrl: "#",
  about: [
    "I design and build systems that learn. My work sits where research curiosity meets shipped software — training models, shaping datasets, and turning experiments into things people can actually use.",
    "Most of my time goes to computer vision and applied deep learning, with a growing focus on generative AI and the tooling around it.",
  ],
};

export const capabilities = [
  { label: "Machine Learning", level: 0.9 },
  { label: "Deep Learning", level: 0.85 },
  { label: "Computer Vision", level: 0.92 },
  { label: "Generative AI", level: 0.78 },
  { label: "Python", level: 0.95 },
  { label: "Data Science", level: 0.82 },
];

export type Project = {
  title: string;
  index: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "AI-Based Indian Food Calorie Estimation System",
    problem:
      "Indian meals are visually dense and regionally varied, which makes manual calorie logging slow and wildly inaccurate.",
    solution:
      "An AI-powered computer vision system using YOLOv11 for real-time Indian food detection, classification and calorie estimation.",
    technologies: ["Python", "YOLOv11", "Computer Vision", "Deep Learning"],
    result:
      "Real-time detection of multiple dishes in a single frame with per-item calorie output. (Add your metrics here.)",
    github: "#",
    demo: "#",
  },
  {
    index: "02",
    title: "Customer Segmentation",
    problem:
      "Businesses treat every customer the same because behavioural patterns stay buried in raw transaction data.",
    solution:
      "An ML system that analyzes customer behavior and creates meaningful customer segments for data-driven business decisions.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    result:
      "Clear, interpretable segments that map directly to targeting and retention decisions. (Add your metrics here.)",
    github: "#",
    demo: "#",
  },
  {
    index: "03",
    title: "Project Placeholder",
    problem: "Describe the problem this project solves.",
    solution: "Describe your approach and what you built.",
    technologies: ["Tech", "Stack", "Here"],
    result: "Describe the outcome or impact.",
    github: "#",
    demo: "#",
  },
];

export const stack = [
  { group: "Programming", items: ["Python", "SQL"] },
  { group: "Machine Learning", items: ["Machine Learning", "Scikit-learn"] },
  { group: "Deep Learning", items: ["Neural Networks", "YOLO", "Deep Learning"] },
  { group: "Computer Vision", items: ["OpenCV", "YOLOv11", "Image Processing"] },
  { group: "Generative AI", items: ["LLMs", "OpenAI API", "Prompt Engineering"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Jupyter"] },
];

// Placeholders — no experience details were provided.
export const experience = [
  {
    period: "Add period",
    role: "Add role title",
    org: "Add organisation",
    detail: "Add a short description of what you worked on.",
  },
  {
    period: "Add period",
    role: "Add role title",
    org: "Add organisation",
    detail: "Add a short description of what you worked on.",
  },
];

export const education = [
  {
    period: "Add years",
    degree: "Add degree",
    school: "Add institution",
    detail: "Add focus areas or notable coursework.",
  },
];

export const certifications = [
  { title: "Add certification", issuer: "Add issuer", year: "Add year" },
  { title: "Add certification", issuer: "Add issuer", year: "Add year" },
];

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];
