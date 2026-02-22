export interface Experience {
  company: string
  role: string
  period: string
  location: string
  projects: {
    name: string
    description: string[]
  }[]
}

export const experiences: Experience[] = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: '2022 - Present',
    location: 'India',
    projects: [
      {
        name: 'PRIME Colombia',
        description: [
          'Developed and maintained microservices for PRIME subscription services in the Colombia region',
          'Implemented scalable backend solutions using Java and AWS services',
          'Collaborated with cross-functional teams to deliver features on time',
        ],
      },
      {
        name: 'Document Insights',
        description: [
          'Built document processing pipelines for extracting insights from business documents',
          'Integrated machine learning models for document classification and data extraction',
          'Optimized processing performance to handle large volumes of documents',
        ],
      },
    ],
  },
  {
    company: 'Think360.ai',
    role: 'Software Engineer',
    period: '2021 - 2022',
    location: 'India',
    projects: [
      {
        name: 'InvestArjuna',
        description: [
          'Developed a financial investment platform for retail investors',
          'Built RESTful APIs and integrated with third-party financial data providers',
          'Implemented real-time portfolio tracking features',
        ],
      },
      {
        name: 'EPL Loan',
        description: [
          'Created a loan management system for enterprise clients',
          'Designed database schemas and optimized query performance',
          'Implemented secure authentication and authorization mechanisms',
        ],
      },
      {
        name: 'FlowXpert',
        description: [
          'Built a workflow automation tool for business process management',
          'Developed drag-and-drop interface for creating custom workflows',
          'Integrated with various enterprise systems via APIs',
        ],
      },
    ],
  },
  {
    company: 'Shareus.io',
    role: 'Software Engineering Intern',
    period: '2020 - 2021',
    location: 'India',
    projects: [
      {
        name: 'Link Sharing Platform',
        description: [
          'Developed features for a link sharing and monetization platform',
          'Implemented analytics dashboard for tracking link performance',
          'Worked on frontend components using React',
        ],
      },
    ],
  },
]
