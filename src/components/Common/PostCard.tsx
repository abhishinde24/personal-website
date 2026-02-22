import { Link } from 'react-router-dom'

interface PostCardProps {
  title: string
  description: string
  image?: string
  imageAlt?: string
  href?: string
  to?: string
  meta?: string
}

function PostCard({ title, description, image, imageAlt, href, to, meta }: PostCardProps) {
  return (
    <div className="post">
      <div>
        <h2 className="post-title">
          {to ? (
            <Link to={to}>{title}</Link>
          ) : href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        {meta && <p className="date">{meta}</p>}
        <p className="post-description">{description}</p>
      </div>
      {image && <img className="post-image" src={image} alt={imageAlt || `${title} preview`} />}
    </div>
  )
}

export default PostCard
