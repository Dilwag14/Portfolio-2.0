/**
 * Central portfolio data — generated from Dilwag Singh Mohanta's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Dilwag Singh Mohanta',
  displayName: 'Dilwag Singh Mohanta',
  firstName: 'DILWAG',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A MOHANTA ORIGINAL',
  role: 'Full Stack Developer | Data Science Enthusiast',
  tagline: ['Full Stack Developer', 'Data Science Enthusiast', 'Java & Python'],
  intro:
    'Full Stack Developer & Data Science Enthusiast (B.Tech CSE - Data Science) building web applications, backend solutions, AI models, and automated CI/CD pipelines with Java, Python, React, Node.js, Flask, and Docker.',
  location: 'Bangalore, India',
  email: 'dilwagsm@gmail.com',
  phone: '+91-9124219490',
  links: {
    linkedin: 'https://www.linkedin.com/in/dilwag-singh-mohanta-240a33290/',
    github: 'https://github.com/Dilwag14',
  },
  resumePdf: '/assets/Dilwag_Singh_Mohanta_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Dilwag Singh Mohanta',
  },
  interests: ['Machine Learning & Deep Learning', 'DevOps & CI/CD Pipelines', 'Cloud & Microservices Architecture'],
};

export const education = [
  {
    school: 'GIET University',
    place: 'Gunupur, Odisha',
    degree: 'B. Tech in Computer Science & Engineering (Data Science)',
    period: '2022 – 2026',
    score: 'B.Tech CSE (Data Science)',
  },
  {
    school: 'Siddhi Vinayak Higher Secondary School',
    place: 'Balasore, Odisha',
    degree: 'Intermediate (Science)',
    period: '2020 – 2022',
    score: 'Class XII Science',
  },
  {
    school: 'Saraswati Sishu Vidya Mandir',
    place: 'Bisoi, Mayurbhanj, Odisha',
    degree: 'Secondary School',
    period: '2010 – 2020',
    score: 'Class X',
  },
];

export const experience = [
  {
    company: 'Destination Career',
    role: 'Full Stack Java Intern',
    place: 'Bengaluru',
    period: 'May 2026 – Present',
    points: [
      'Cut API latency 20% by optimizing Spring Boot backend and connection pooling across 5+ microservices.',
      'Designed scalable SQL schemas in PostgreSQL/MySQL, normalizing data to support 3x user growth.',
      'Delivered 2 feature releases on schedule with a 6-member Agile team using RESTful Java APIs.',
    ],
  },
  {
    company: 'GIET University (Rest Coder Academy)',
    role: 'DevOps Intern',
    place: 'Gunupur',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Slashed setup time 60% by containerising 4 applications with Docker for reproducible microservice deployment.',
      'Cut deployment from 2 hours to 25 mins by building automated Jenkins CI/CD pipelines.',
      'Saved ~3 hours per cycle by authoring Bash automation scripts to eliminate repetitive manual tasks.',
    ],
  },
  {
    company: 'Y-Hills Education Pvt. Ltd',
    role: 'Data Science Intern',
    place: 'Bengaluru',
    period: 'May 2024 – Jul 2024',
    points: [
      'Hit 88% model accuracy across 768 clinical records by training a Python and Scikit-learn disease prediction system.',
      'Engineered data preprocessing pipelines using Pandas and NumPy for missing value imputation and robust feature scaling.',
      'Automated batch analytics reporting into Word format, saving ~3 hours per cycle while keeping code reusable.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'ragent',
    title: 'RAGent – Intelligent Interview Assistant',
    year: '2026',
    genre: 'AI • RAG • LLMs',
    logline: 'An AI interview assistant using RAG and LLMs to generate role-specific questions from candidate resumes.',
    stack: ['Python', 'RAG', 'LLMs', 'GPT', 'Semantic Search'],
    build: [
      'Built an AI interview assistant using RAG and LLMs to generate role-specific questions from candidate resumes.',
      'Engineered personalized feedback models by executing semantic search across a 10,000-document repository using GPT generation.',
    ],
    features: [
      'RAG & LLM-based question generation',
      'Semantic search over 10,000 documents',
      'Automated candidate feedback models',
      'Role-specific evaluation logic',
    ],
    metrics: [
      { value: '10,000', label: 'documents indexed' },
      { value: 'RAG', label: 'architecture' },
      { value: 'GPT', label: 'generation' },
      { value: 'Real-Time', label: 'feedback' },
    ],
    github: 'https://github.com/Dilwag14',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'moneygram',
    title: 'MoneyGram – Budget Tracker',
    year: '2026',
    genre: 'Full-Stack • Fintech • Security',
    logline: 'Full-stack finance app with secure JWT authentication and real-time budget overrun detection.',
    stack: ['React.js', 'Node.js', 'JWT Auth', 'Chart.js', 'Accounting Logic'],
    build: [
      'Built full-stack finance app with secure JWT authentication, supporting income/expense tracking across 50+ transaction categories.',
      'Integrated Chart.js data visualizations for live spending analytics, enabling real-time budget overrun detection.',
      'Engineered robust personal accounting logic to provide users with streamlined, secure financial health dashboards.',
    ],
    features: [
      'Income & expense tracking across 50+ categories',
      'JWT Auth for secure user sessions',
      'Chart.js data visualizations',
      'Real-time budget overrun detection',
    ],
    metrics: [
      { value: '50+', label: 'categories' },
      { value: 'JWT', label: 'secure auth' },
      { value: 'Real-Time', label: 'spending analytics' },
    ],
    github: 'https://github.com/Dilwag14',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'sign-vision',
    title: 'Sign Vision – ISL Translator',
    year: '2025',
    genre: 'AI/ML • Computer Vision • Accessibility',
    logline: 'Real-time Indian Sign Language translator achieving 93% accuracy across 26 sign classes.',
    stack: ['Python', 'CNN', 'MediaPipe', 'OpenCV', 'Deep Learning'],
    build: [
      'Hit 93% accuracy across 26 sign classes by training a CNN model on 8,000+ gesture images.',
      'Engineered live video translation by integrating MediaPipe pose estimation with OpenCV for real-time streams.',
      'Built accessibility ML pipelines to enable seamless, low-latency communication solutions for the deaf community.',
    ],
    features: [
      '93% accuracy across 26 sign classes',
      'MediaPipe pose estimation',
      'OpenCV live video translation',
      'Low-latency ML pipeline',
    ],
    metrics: [
      { value: '93%', label: 'accuracy' },
      { value: '26', label: 'sign classes' },
      { value: '8,000+', label: 'gesture images' },
    ],
    github: 'https://github.com/Dilwag14',
    palette: ocean,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'full-stack-java',
    title: 'Full Stack Java Intern',
    org: 'Destination Career, Bengaluru',
    detail: 'Optimized Spring Boot backend & connection pooling across 5+ microservices, cutting API latency 20%.',
    laurel: 'Microservices & Java',
  },
  {
    id: 'devops-internship',
    title: 'DevOps Intern',
    org: 'GIET University / Rest Coder Academy',
    detail: 'Cut deployment time from 2 hours to 25 mins by building automated Jenkins CI/CD pipelines & Docker containerization.',
    laurel: 'DevOps Specialist',
  },
  {
    id: 'data-science-intern',
    title: 'Data Science Intern',
    org: 'Y-Hills Education Pvt. Ltd',
    detail: 'Hit 88% model accuracy across 768 clinical records with Python & Scikit-learn disease prediction system.',
    laurel: '88% ML Accuracy',
  },
  {
    id: 'sign-vision-acc',
    title: 'Sign Vision ISL Translator',
    org: 'Computer Vision Project',
    detail: 'Trained CNN model on 8,000+ images achieving 93% accuracy across 26 sign classes with MediaPipe & OpenCV.',
    laurel: 'Computer Vision',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'IBM (Coursera)', name: 'Python for Data Science', link: '#' },
  { issuer: 'GeeksforGeeks', name: 'Data Analytics skill up', link: '#' },
  { issuer: 'Infosys Springboard', name: 'Cybersecurity & Applied Ethical Hacking', link: '#' },
  { issuer: 'Cloud & Tech Badges', name: 'Salesforce, Google Cloud, TDS iON, GDG Study Jams Badges', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java & Python primary',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'Primary' },
    ],
  },
  {
    id: 'frontend-backend',
    title: 'Frontend & Backend',
    subtitle: 'Full Stack Technologies',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL & NoSQL',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
    ],
  },
  {
    id: 'tools-devops',
    title: 'Tools & DevOps',
    subtitle: 'CI/CD & Development',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'Bash', mono: 'Sh' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'Models & Computer Vision',
    skills: [
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Deep Learning', mono: 'Dl' },
      { name: 'CNN', mono: 'Cn' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'LLMs', mono: 'Lm' },
      { name: 'YOLO', mono: 'Yo' },
      { name: 'Computer Vision', mono: 'Cv' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Destination Career Full Stack Intern', 'Spring Boot microservices optimization'],
  Python: ['RAGent AI Assistant', 'Sign Vision (93% acc)', 'Y-Hills Disease Prediction (88% acc)'],
  'React.js': ['MoneyGram Budget Tracker', 'Web Applications'],
  'Node.js': ['MoneyGram Budget Tracker Backend'],
  Flask: ['Backend REST API development'],
  Docker: ['GIET University DevOps Internship (4 applications containerised)'],
  Jenkins: ['Automated CI/CD pipelines (2h -> 25m deployment)'],
  CNN: ['Sign Vision ISL Translator (8,000+ gesture images)'],
  RAG: ['RAGent Interview Assistant (10,000-doc semantic search)'],
  MySQL: ['Schema design and user growth scaling'],
  MongoDB: ['NoSQL database implementations'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2010 – 2022',
    synopsis: 'Schooling at Saraswati Sishu Vidya Mandir & Intermediate Science at Siddhi Vinayak Higher Secondary School.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Beginning',
        description: 'Secondary education at Saraswati Sishu Vidya Mandir, Bisoi, Mayurbhanj, Odisha.',
        tags: ['Secondary School', 'Odisha'],
        runtime: '2010 – 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Science & Mathematics',
        description: 'Intermediate (Science) at Siddhi Vinayak Higher Secondary School, Balasore, Odisha.',
        tags: ['Intermediate', 'Science'],
        runtime: '2020 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Data Science & Engineering',
    period: '2022 – 2026',
    synopsis: 'B. Tech in Computer Science & Engineering (Data Science) at GIET University, Gunupur, Odisha.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Data Scientist',
        description: 'Enrolled in B.Tech CSE (Data Science) — mastering DSA, Machine Learning, Deep Learning, and Databases.',
        tags: ['B.Tech', 'Data Science', 'GIET University'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship Arc',
    period: '2024 – 2025',
    synopsis: 'Hands-on industry experience across Data Science and DevOps engineering.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The ML Specialist',
        description: 'Data Science Intern at Y-Hills Education — 88% accuracy disease prediction system across 768 records.',
        tags: ['Data Science', 'Python', 'Scikit-learn'],
        runtime: 'May 2024 – Jul 2024',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The DevOps Engineer',
        description: 'DevOps Intern at GIET University — Dockerized 4 apps and cut deployment time from 2 hours to 25 mins with Jenkins.',
        tags: ['Docker', 'Jenkins', 'Bash'],
        runtime: 'Jun 2025 – Jul 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Full Stack & AI Originals',
    period: '2025 – 2026',
    synopsis: 'Full Stack Java Internship at Destination Career & building flagship AI & web projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Java Architect',
        description: 'Full Stack Java Intern at Destination Career — optimized Spring Boot API latency by 20% across 5+ microservices.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL'],
        runtime: 'May 2026 – Present',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'The AI & Web Developer',
        description: 'Created RAGent AI Interview Assistant, MoneyGram Budget Tracker, and Sign Vision ISL Translator.',
        tags: ['RAG', 'JWT', 'CNN', 'MediaPipe'],
        runtime: '2025 – 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Continuing to build scalable software solutions, AI innovations, and cloud microservices.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Arc',
        description: 'Advancing in LLM Agent RAG architectures, Microservices, and Scalable Cloud Systems.',
        tags: ['LLMs', 'Microservices', 'Cloud AI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Skills', title: 'Java & Python', detail: 'Core languages for Backend & AI/ML', palette: amber },
  { label: 'Flagship AI Project', title: 'RAGent Assistant', detail: 'RAG & LLMs over 10,000 documents', palette: crimson },
  { label: 'DevOps Win', title: '80% Faster Deploy', detail: '2h to 25m with Jenkins & Docker', palette: ocean },
  { label: 'Backend Optimization', title: '20% Lower Latency', detail: 'Spring Boot & PostgreSQL connection pooling', palette: violet },
  { label: 'Computer Vision', title: 'Sign Vision', detail: '93% accuracy ISL translator with CNN & MediaPipe', palette: jade },
  { label: 'Fintech App', title: 'MoneyGram Tracker', detail: '50+ categories with JWT Auth & Chart.js', palette: amber },
  { label: 'ML Accuracy', title: '88% Disease Model', detail: 'Python & Scikit-learn across 768 clinical records', palette: crimson },
  { label: 'Education', title: 'B.Tech CSE', detail: 'Data Science Specialization at GIET University', palette: ocean },
  { label: 'Certified', title: 'IBM Python DS', detail: 'IBM Python for Data Science Certified', palette: jade },
  { label: 'Current Focus', title: 'AI & Cloud Systems', detail: 'Building scalable microservices & LLM applications', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE (Data Science)',
    lines: ['GIET University, Gunupur, Odisha', '2022 – 2026'],
    chips: ['Data Science', 'CSE'],
  },
  {
    kicker: 'Skills',
    title: 'Java & Python First',
    lines: ['React.js, Node.js, Flask, REST APIs', 'MySQL, MongoDB, PostgreSQL · Docker, Jenkins, Git'],
    chips: ['Java', 'Python', 'React.js', 'Docker', 'RAG', 'CNN'],
  },
  {
    kicker: 'Internships',
    title: 'Industry Experience',
    lines: [
      'Full Stack Java Intern · Destination Career, Bengaluru',
      'DevOps Intern · GIET University (Rest Coder Academy)',
      'Data Science Intern · Y-Hills Education Pvt. Ltd',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Flagship Projects',
    lines: [
      'RAGent — Intelligent Interview Assistant (RAG & LLMs)',
      'MoneyGram — Budget Tracker with JWT & Chart.js',
      'Sign Vision — 93% Accuracy ISL Translator (CNN & MediaPipe)',
    ],
  },
  {
    kicker: 'Certifications',
    title: 'Industry Credentials',
    lines: [
      'IBM Python for Data Science (Coursera)',
      'Data Analytics — GeeksforGeeks',
      'Cybersecurity & Applied Ethical Hacking — Infosys Springboard',
    ],
  },
];

export type ProfileId = 'dilwag' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'dilwag',
    name: 'Dilwag',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, internships & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
