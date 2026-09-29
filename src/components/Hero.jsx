import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="hero-intro">
                <span className="hero-intro-dot"></span>
                Hello, I'm Bisha
              </div>

             <h1 className="hero-title">
  Web Developer 
  <span className="hero-title-accent">
    &amp; Software Engineer
  </span>
</h1>

              <p className="hero-description">
                Computer Science & Engineering graduate specialized in Web
                Programming, with experience in frontend development, backend
                systems and relational databases.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn-primary-custom">
                  View Projects
                  <FiArrowUpRight />
                </a>

                <a href="/cv.pdf" className="btn-outline-custom" download>
                  Download CV
                  <FiArrowDown />
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="hero-photo-wrapper">
                <div className="hero-photo-glow"></div>

                <div className="hero-photo-placeholder">
  <img
    src="/images/myportfolio.jpg"
    alt="Sabri Jonuzi - Web Developer & Software Engineer"
    className="hero-profile-image"
  />
</div>

                <div className="hero-orbit"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-line"></span>
        Scroll to explore
      </div>
    </section>
  )
}

export default Hero