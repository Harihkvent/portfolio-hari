export const projects = [
  {
    id: 'careerpath-ai',
    title: 'CareerPath AI',
    summary: 'Multi-agent career-advisory platform that turns a resume and job target into tailored skill-gap analysis, job matching, mock interviews, and a personalized roadmap.',
    problem: 'Job seekers need actionable, personalized guidance across several disconnected career-planning tasks.',
    role: 'Built the agent orchestration, semantic matching workflow, full-stack application, and AWS deployment.',
    impact: 'LangGraph orchestration · Redis-backed task state · AWS deployment across EC2, S3, RDS, and Lambda',
    tech: ['LangGraph', 'FastAPI', 'Redis', 'MongoDB', 'React', 'AWS'],
    featured: true
  },
  {
    id: 'ai-calorie-tracker',
    title: 'AI Calorie Tracker',
    summary: 'Cross-platform nutrition tracker that uses Gemini to identify food and estimate calories and macros from images and text descriptions.',
    problem: 'Manual nutrition logging is tedious, making it difficult to maintain a consistent record of calories and macros.',
    role: 'Built and deployed the React Native client, FastAPI backend, and Supabase data layer end-to-end.',
    impact: 'Photo and text-based nutrition analysis · Auth and structured logging · Shipped on free-tier infrastructure',
    tech: ['Expo', 'React Native', 'FastAPI', 'Supabase', 'Gemini API'],
    demo: 'https://caltrack-bay.vercel.app/',
    featured: true
  },
  {
    id: 'autonomous-multi-step-ai-agent',
    title: 'Autonomous Multi-Step AI Agent',
    summary: 'Full-stack autonomous-agent platform that decomposes natural-language requests into executable plans and tracks execution in real time.',
    problem: 'Complex user requests require planning, tool selection, validation, and retry logic—not a single LLM response.',
    role: 'Built sequential and multi-agent LangGraph execution architectures, a tool registry, and a React execution-status interface.',
    impact: 'Planner → Executor → Validator → Retry pipeline · LangGraph supervisor routing · Real-time status updates',
    tech: ['Python', 'FastAPI', 'LangGraph', 'React', 'Vite'],
    link: 'https://github.com/Harihkvent/Autonomous-Multi-Step-AI-Agent'
  },
  {
    id: 'ai-interview',
    title: 'AI Interview App',
    summary: 'MCP-based agent orchestration system for automated technical interviews with resume parsing, adaptive NLP-driven assessments, and real-time feedback.',
    problem: 'Manual technical screening is time-consuming and inconsistent, leaving recruiters to repeat similar assessments for every candidate.',
    role: 'Designed and built the MCP agent pipeline, React frontend, FastAPI backend, and AWS Amplify deployment.',
    impact: 'Adaptive NLP-driven assessments · Resume parsing · Deployed on AWS Amplify',
    tech: ['React', 'FastAPI', 'LLMs', 'MCP Agents', 'NLP', 'AWS Amplify'],
    link: 'https://github.com/Harihkvent/ai-interview-app',
    demo: 'https://develop.da0sy3g04smi7.amplifyapp.com/'
  },
  {
    id: 'dsa-visualization',
    title: 'DSA Visualization Platform',
    summary: 'Interactive web application for visualizing data structures and algorithms with step-by-step explanations and animations.',
    problem: 'Abstract algorithm concepts are hard to grasp from text alone; learners need visual, interactive walkthroughs.',
    role: 'Built the rendering engine, animation system, algorithm visualizers, and responsive UI.',
    impact: 'Step-by-step visual walkthroughs · Covers 15+ algorithms · Live on Vercel',
    tech: ['JavaScript', 'React', 'CSS', 'Algorithms'],
    link: 'https://github.com/Harihkvent/DSA-VISUALIZATION',
    demo: 'https://dsa-visualization-phi.vercel.app/'
  },
  {
    id: 'docker-automation',
    title: 'Docker Automation Dashboard',
    summary: 'Automated Docker container and image management through a React UI and Dockerode-based Express APIs.',
    problem: 'DevOps teams need a simple GUI to inspect, start, and stop containers without working directly in the CLI.',
    role: 'Built the Express REST API with Dockerode, the React dashboard UI, and the deployment pipeline.',
    impact: 'Real-time container management · REST API abstraction · Deployed on Vercel',
    tech: ['React', 'Express', 'Dockerode', 'Docker'],
    link: 'https://github.com/Harihkvent/Docker-Automation.git',
    demo: 'https://docker-automation-client.vercel.app/'
  },
  {
    id: 'icss',
    title: 'Intelligent Customer Support System',
    summary: 'AI-driven chatbot using vector search and LLMs, with a Flask backend, FAISS retrieval, and multi-turn conversation support.',
    problem: 'Support teams are overwhelmed with repetitive queries, while keyword-based bots often miss semantic intent.',
    role: 'Built the FAISS vector index, Flask API, LLM integration, and multi-turn context handling.',
    impact: 'Semantic retrieval via FAISS · Multi-turn conversations · LLM-powered responses',
    tech: ['Python', 'Flask', 'FAISS', 'LLMs', 'Vector DB'],
    link: 'https://github.com/Harihkvent/ICSS.git'
  },
  {
    id: 'receipt-ocr',
    title: 'Receipt OCR System',
    summary: 'End-to-end OCR pipeline that digitizes receipts and extracts merchant information, dates, and totals using Tesseract and spaCy NLP.',
    problem: 'Manual receipt data entry is slow and error-prone for expense-management workflows.',
    role: 'Built the FastAPI OCR pipeline, MongoDB storage layer, and React Native mobile app.',
    impact: 'Automated receipt digitization · Tesseract + spaCy extraction · MongoDB storage',
    tech: ['FastAPI', 'Tesseract', 'MongoDB', 'React Native', 'spaCy'],
    link: 'https://github.com/Harihkvent/recept-ocr-project'
  }
]
