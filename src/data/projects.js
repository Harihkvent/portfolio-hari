export const projects = [
  {
    id: 'ai-interview',
    title: 'AI Interview App',
    summary: 'MCP-based agent orchestration system for automated technical interviews. Features resume parsing, NLP-driven adaptive assessments, and real-time feedback.',
    problem: 'Manual technical screening is time-consuming and inconsistent. Recruiters spend hours per candidate on repetitive assessments.',
    role: 'Solo Developer — designed and built the entire MCP agent pipeline, React frontend, FastAPI backend, and AWS Amplify deployment end-to-end.',
    impact: 'Reduced manual screening effort by 60% · Adaptive NLP-driven assessments · Deployed on AWS Amplify',
    tech: ['React', 'FastAPI', 'LLMs', 'MCP Agents', 'NLP', 'AWS Amplify'],
    link: 'https://github.com/Harihkvent/ai-interview-app',
    demo: 'https://develop.da0sy3g04smi7.amplifyapp.com/',
    featured: true
  },
  {
    id: 'dsa-visualization',
    title: 'DSA Visualization Platform',
    summary: 'Interactive web application for visualizing data structures and algorithms with step-by-step explanations and animations.',
    problem: 'Abstract algorithm concepts are hard to grasp from text alone — learners need visual, interactive walkthroughs.',
    role: 'Solo Developer — built the full rendering engine, animation system, algorithm visualisers, and responsive UI entirely from scratch.',
    impact: 'Step-by-step visual walkthroughs · Covers 15+ algorithms · Live on Vercel',
    tech: ['JavaScript', 'React', 'CSS', 'Algorithms'],
    link: 'https://github.com/Harihkvent/DSA-VISUALIZATION',
    demo: 'https://dsa-visualization-phi.vercel.app/',
    featured: true
  },
  {
    id: 'docker-automation',
    title: 'Docker Automation Dashboard',
    summary: 'Automated Docker container/image management via a React UI and Dockerode-based Express APIs.',
    problem: 'DevOps teams lack a simple GUI to inspect, start, or stop containers without dropping to the CLI.',
    role: 'Solo Developer — built the Express REST API with Dockerode, the React dashboard UI, and the full deployment pipeline end-to-end.',
    impact: 'Real-time container management · REST API abstraction · Deployed on Vercel',
    tech: ['React', 'Express', 'Dockerode', 'Docker'],
    link: 'https://github.com/Harihkvent/Docker-Automation.git',
    demo: 'https://docker-automation-client.vercel.app/'
  },
  {
    id: 'icss',
    title: 'Intelligent Customer Support System',
    summary: 'AI-driven chatbot using vector search and LLMs; Flask backend and FAISS for semantic retrieval with multi-turn conversation support.',
    problem: 'Support teams are overwhelmed with repetitive queries. Traditional keyword bots miss semantic intent.',
    role: 'Solo Developer — built the FAISS vector index, Flask API, LLM integration, and multi-turn context handling entirely alone.',
    impact: 'Semantic retrieval via FAISS · Multi-turn conversation support · LLM-powered responses',
    tech: ['Python', 'Flask', 'FAISS', 'LLMs', 'Vector DB'],
    link: 'https://github.com/Harihkvent/ICSS.git'
  },
  {
    id: 'receipt-ocr',
    title: 'Receipt OCR System',
    summary: 'End-to-end OCR pipeline to digitize receipts, extracting merchant info, date and totals using Tesseract & spaCy NLP.',
    problem: 'Manual data entry from paper receipts is error-prone and slow for expense management workflows.',
    role: 'Solo Developer — designed and built the FastAPI OCR pipeline, MongoDB storage layer, and React Native mobile app entirely alone.',
    impact: 'Automated receipt digitisation · Tesseract + spaCy NLP extraction · MongoDB storage',
    tech: ['FastAPI', 'Tesseract', 'MongoDB', 'React Native', 'spaCy'],
    link: 'https://github.com/Harihkvent/recept-ocr-project'
  }
]