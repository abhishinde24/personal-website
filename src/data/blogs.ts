export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  filename: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'simple-database-bash',
    title: 'Building a Simple Database with Bash Script',
    description: 'Learn how to create a basic key-value database using only Bash scripting. We explore file-based storage, CRUD operations, and basic indexing concepts.',
    date: '2024-01-15',
    tags: ['Bash', 'Linux', 'Database', 'Tutorial'],
    filename: 'simple-database-bash.md',
    image: '/reference-assets/SimpleDataBase.png',
  },
  {
    id: 'todo-linux-terminal',
    title: 'Adding Todo Functionality in the Linux Terminal',
    description: 'A practical guide to building a command-line todo application for the Linux terminal. Covers task management, file persistence, and shell scripting best practices.',
    date: '2024-02-20',
    tags: ['Linux', 'Bash', 'Productivity', 'CLI'],
    filename: 'todo-linux-terminal.md',
    image: '/reference-assets/ToDo.png',
  },
] 
