import { Link } from 'react-router-dom'
import PostCard from '../Common/PostCard'
import SectionHeader from '../Common/SectionHeader'
import { projects } from '../../data/projects'

function Home() {
  return (
    <div>
      <img src="/reference-assets/ProfilePic.jpg" alt="Profile" className="profile-image" />
      <br />
      <div className="profile-text">
        Hi, I am a Software Engineer interested in building reliable backend systems and thinking about future technology.
        <br />
        <br />
        I currently work on distributed system at fivetran, previous at worked at Amazon and NBFC startup. Recently, I got into the interest of exploring and creating tools for next generation of AI technology.
        <br />
        <br />
        <br />
      </div>

      <SectionHeader title="Projects" />
      {projects.map((project) => (
        <PostCard
          key={project.name}
          title={project.name}
          description={project.description}
          href={project.github}
          image={project.image}
        />
      ))}

      <p className="heading">
        <Link to="/about">More about my experience →</Link>
      </p>
    </div>
  )
}

export default Home
