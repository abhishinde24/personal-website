import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '../../data/blogs'

function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const post = blogPosts.find((p) => p.id === id)

  useEffect(() => {
    if (!post) {
      setError('Post not found')
      setLoading(false)
      return
    }

    fetch(`/blog-data/posts/${post.filename}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load post')
        return res.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load post content')
        setLoading(false)
      })
  }, [post])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error || !post) {
    return (
      <div>
        <p>Post not found.</p>
        <br />
        <Link to="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/blog">← Back to Blog</Link>
      <br /><br />
      <p className="date">{formatDate(post.date)}</p>
      {post.image && (
        <div className="responsive-image-container">
          <img src={post.image} alt={`${post.title} cover`} className="blog-hero-image" />
        </div>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <>
              <div className="heading">{children}</div>
              <hr />
            </>
          ),
          h2: ({ children }) => (
            <>
              <div className="heading">{children}</div>
              <hr />
            </>
          ),
          h3: ({ children }) => <h3>{children}</h3>,
          p: ({ children }) => <p>{children}</p>,
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const isInline = !match && !className
            return !isInline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                customStyle={{
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '3px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  overflowX: 'auto',
                }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
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

export default BlogPost
