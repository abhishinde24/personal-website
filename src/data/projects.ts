export interface Project {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'APIDocs',
    description: 'A documentation generator for REST APIs that automatically creates interactive API documentation from code annotations. Features include automatic endpoint discovery, request/response examples, and markdown support.',
    technologies: ['Node.js', 'TypeScript', 'React', 'Express'],
    github: 'https://github.com/abhishinde24/APIDocs',
    image: '/reference-assets/ApiExplorer.png',
  },
  {
    name: 'Simple-Redis',
    description: 'A simplified Redis implementation in Go for learning purposes. Implements core Redis commands including GET, SET, DEL, EXPIRE, and basic data structures like strings and lists.',
    technologies: ['Go', 'TCP', 'Data Structures'],
    github: 'https://github.com/abhishinde24/Simple-Redis',
    image: '/reference-assets/simple-redis.webp',
  },
]
