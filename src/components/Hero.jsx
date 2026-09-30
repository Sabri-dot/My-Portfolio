import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiDatabase,
  FiLayers,
} from 'react-icons/fi';


function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            Computer Science and Engineering 
          </div>

          <h1 className="hero-title">
            Hi, I'm Sabri Jonuzi.
            <br />
            I build <span className="gradient-text">web experiences.</span>
          </h1>

          <p className="hero-description">
            A Web Programming graduate with hands-on experience in full-stack
  web development, REST APIs, authentication, and database-driven
  applications. I enjoy turning ideas into responsive, practical,
  and user-friendly web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary-custom">
              Explore My Projects <span>↗</span>
            </a>

           
<a
  href="/cv/sabri-cv.pdf"
  className="btn-secondary-custom"
  target="_blank"
  rel="noopener noreferrer"
>
  View My CV <span>↗</span>
</a>
          </div>

          <div className="hero-socials">
            <a
              href="#contact"
              aria-label="Contact Sabri"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-profile-card">
            <div className="profile-image-wrapper">
              <img
                src="/images/profile.jpeg"
                alt="Sabri Jonuzi"
                className="hero-profile-image"
              />
            </div>

            <div className="profile-details">
              <span className="profile-label">WEB DEVELOPMENT</span>
              <h2>Sabri Jonuzi</h2>
              <p>Full-Stack Web Developer</p>
            </div>

            <div className="profile-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;