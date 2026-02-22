import SectionHeader from '../Common/SectionHeader'

function About() {
  return (
    <div>
      <SectionHeader title="About Me" />
      <p>
        Here&apos;s a brief bio of me that includes snippets of my life.
      </p>

      <SectionHeader title="Latur, India" />
      <div className="about-city-row">
        <div className="about-city-image-wrap">
          <img
            src="/reference-assets/Latur.jpg"
            alt="Latur"
            className="about-city-image"
          />
        </div>
        <div className="about-city-text">
          <p>
            I was born and raised in Latur, India up until high school. I spent a lot of time
            cycling and playing with childhood friends.
          </p>
        </div>
      </div>

      <SectionHeader title="Mumbai, India" />
      <div className="about-city-row">
        <div className="about-city-image-wrap">
          <img
            src="/reference-assets/Mumbai.jpg"
            alt="Mumbai"
            className="about-city-image"
          />
        </div>
        <div className="about-city-text">
          <p>
            I moved to Mumbai to complete my degree, a vibrant city with millions of dreams.
            I was completely new to the big city and its teaching style. It took me some time
            to learn the culture and adapt.
          </p>
          <p>
            After my degree, I joined a startup in Mumbai working in the finance domain, where
            I got exposure to the complex world of financial systems.
          </p>
        </div>
      </div>

      <SectionHeader title="Bangalore, India" />
      <div className="about-city-row">
        <div className="about-city-image-wrap">
          <img
            src="/reference-assets/Bangalore.avif"
            alt="Bangalore"
            className="about-city-image"
          />
        </div>
        <div className="about-city-text">
          <p>
            After working at a startup for a while, I decided to join Amazon and get exposure
            to distributed systems. It was a completely new experience for me, with a lot of
            unlearning and learning to catch up with a new environment.
          </p>
          <p>
            A few months back, I decided to move back to the startup world and joined Fivetran.
            I now work on a core platform team responsible for providing foundational feature
            services used by more than 40 internal teams across Fivetran.
          </p>
        </div>
      </div>

      <SectionHeader title="Contact" />
      <p>
        If any of this interests you, please reach out.
        <br />
        Email: abhishekshinde2211@gmail.com
        <br />
        GitHub: abhishinde24
      </p>
    </div>
  )
}

export default About
