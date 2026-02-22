import PostCard from '../Common/PostCard'
import { blogPosts } from '../../data/blogs'

function Blog() {
  return (
    <div>
      <p>
        Thoughts on software development, system design, and interesting technical challenges.
      </p>

      <br />

      {blogPosts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          to={`/blog/${post.id}`}
          meta={formatDate(post.date)}
          image={post.image}
          imageAlt={`${post.title} thumbnail`}
        />
      ))}
    </div>
  )
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default Blog
