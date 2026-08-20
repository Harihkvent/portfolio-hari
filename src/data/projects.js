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
  }
]
