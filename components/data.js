export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const STATS = [
  { n: '5+', l: 'Projects completed' },
  { n: '2+', l: 'Years experience' },
  { n: '250+', l: 'DSA problems solved' },
  { n: '10+', l: 'Technologies' },
]



export const EXPERIENCE = [
  {
    period: 'Jan 2026 — Present',
    role: 'Backend Developer',
    company: 'Beno Support Technologies Pvt. Ltd.',
    type: 'On-site',
    caseStudy: [
      { label: 'Problem', text: 'Bulk imports of 100k+ prospect rows were failing silently — bad rows got dropped with no diagnostics.' },
      { label: 'Approach', text: 'Rebuilt the Excel/CSV import pipeline with field-level validation and multi-field deduplication (email, phone, name + account) before insert.' },
      { label: 'Result', text: "Zero silent data loss + a cascading ICP matching engine (industry, region, tech stack, persona) feeding a weighted scoring model — the platform's core matching layer." },
    ],
    stack: ['Node.js', 'Next.js 15', 'MongoDB', 'Express.js', 'TypeScript', 'JWT', 'Vercel'],
  },
  {
    period: 'Mar 2025 — Dec 2025',
      role: 'Full Stack Development Training & Internship',
    company: 'JSpiders, Noida',
    type: 'On-site',
    points: [
      'Completed an 10-month intensive Full Stack Development training covering Java, JavaScript, Node.js, Express.js, MongoDB and REST API design.',
      'Built hands-on projects applying OOP concepts, database design, and end-to-end web application development.',
    ],
    stack: ['Java', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    period: 'Sept 2024 — Feb 2025',
    role: 'Data Engineer Intern',
    company: 'EasyRewardz Software Services Pvt. Ltd.',
    type: 'On-site',
    points: [
      'Built end-to-end data cleaning and analysis modules in Python and SQL — handling missing data, duplicates and quality checks.',
      'Automated repetitive data tasks and generated stakeholder reports from real client datasets.',
    ],
    stack: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
  },
]




export const PROJECTS = [
  {
    tag: 'Full-stack · Live',
    title: 'PDR — B2B Sales Intelligence Platform',
    desc: 'Full-stack prospect research tool with role-based access, campaign management, a segment/ICP engine and audit logging across 14+ API modules with centralized JWT auth.',
    stack: ['Next.js 15', 'Node.js', 'Express.js', 'MongoDB Atlas', 'TypeScript', 'JWT', 'Vercel'],
    features: ['ICP matching engine', '100k+ row import pipeline', 'RBAC + JWT auth', 'Audit logging'],
    accent: 'amber',
    status: 'Live',
  },
  {
    tag: 'Data Engineering · Python',
    title: 'Data Cleaning & Analysis Pipeline',
    desc: 'End-to-end data pipeline in Python and SQL for automated preprocessing, missing-value handling, duplicate removal and stakeholder reporting on real client datasets.',
    stack: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    features: ['Automated preprocessing', 'Data quality checks', 'Stakeholder reporting', 'Real client data'],
    accent: 'mint',
    status: 'Done',
  },
  {
    tag: 'Java · OOP · DSA',
    title: 'Shape-Based Educational Game',
    desc: 'Interactive educational game for students (6th–12th) to learn 2D and 3D shapes — built around core OOP concepts: inheritance, polymorphism and method overriding.',
    stack: ['Java', 'OOP', 'Swing/AWT'],
    features: ['Full OOP patterns', 'Interactive UI', 'Grade-based levels', 'Shape geometry'],
    accent: 'violet',
    status: 'Done',
  },
]

export const SKILL_GROUPS = [
  {
    iconName: 'Braces',
    category: 'Languages',
    items: [
      { name: 'Java', level: 4 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'SQL', level: 4 },
    ],
  },
  {
    iconName: 'Server',
    category: 'Backend & APIs',
    items: [
      { name: 'Node.js + Express', level: 5 },
      { name: 'REST API Design', level: 5 },
      { name: 'JWT Authentication', level: 5 },
      { name: 'Microservices', level: 3 },
      { name: 'Serverless (Vercel)', level: 4 },
    ],
  },
  {
    iconName: 'Database',
    category: 'Databases',
    items: [
      { name: 'MongoDB + Mongoose', level: 5 },
      { name: 'MySQL', level: 4 },
      { name: 'Schema Design', level: 4 },
      { name: 'Query Optimization', level: 4 },
    ],
  },
  {
    iconName: 'Code2',
    category: 'Frontend',
    items: [
      { name: 'React', level: 4 },
      { name: 'Next.js 15', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'HTML / CSS', level: 5 },
    ],
  },
  {
    iconName: 'Cpu',
    category: 'Core CS · DSA',
    items: [
      { name: 'Data Structures', level: 5 },
      { name: 'Algorithms', level: 4 },
      { name: 'OOP', level: 5 },
      { name: 'DBMS', level: 4 },
      { name: 'System Design', level: 3 },
    ],
  },
  {
    iconName: 'Cloud',
    category: 'Tools & Cloud',
    items: [
      { name: 'Git + GitHub', level: 5 },
      { name: 'Postman', level: 5 },
      { name: 'Vercel', level: 4 },
      { name: 'AWS (Basic)', level: 3 },
      { name: 'MongoDB Compass', level: 5 },
    ],
  },
]

export const MARQUEE = [
  'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL',
  'Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs',
  'Next.js', 'React', 'Tailwind', 'JWT', 'Git',
  'Vercel', 'Postman', 'DSA', 'OOP', 'DBMS',
]

export const EDUCATION = [
  { y: '2020 — 2024', d: 'B.Tech — Information Technology', i: 'Dr A.P.J. Abdul Kalam Technical University (BBDITM)' },
  { y: '2019 — 2020', d: 'Class XII — Senior Secondary', i: 'BMIC, Pratapgarh — 72%' },
  { y: '2017 — 2018', d: 'Class X — Secondary', i: 'JPIC, Pratapgarh — 66%' },
]

export const CERTS = [
  { name: 'Java Full Stack Development', org: 'JSpiders, Noida' },
  { name: 'Web Development Bootcamp', org: 'JSpiders, Noida' },
  { name: 'Data Structures & Algorithms', org: 'AKTU Curriculum' },
  { name: 'Database Management Systems', org: 'AKTU Curriculum' },
]

export const LINKS = {
  email: 'prakharshukla6095@gmail.com',
  phone: '+91 80819 40458',
  github: 'https://github.com/PrakharShukla8081',
  linkedin: 'https://linkedin.com/in/prakhar-shukla-7067a222a',
  location: 'Dadri, Uttar Pradesh, India',
}
