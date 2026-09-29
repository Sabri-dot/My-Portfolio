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
    <section id="home" className="hero-section">
      <div className="hero-glow" />

      <div className="container hero-container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE & ENGINEERING GRADUATE
            </div>

            <h1 className="hero-title">
              Building digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">make an impact.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm Sabri — a Full-Stack Web Developer passionate
              about building modern web applications, intuitive
              interfaces and reliable backend systems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary-custom">
                Explore my work <FiArrowUpRight />
              </a>
              <a href="#contact" className="btn-secondary-custom">
                Get in touch
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/" target="_blank"
                rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank"
                rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <span className="social-divider" />
              <span>Based in Kosovo</span>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="developer-card">
                <div className="card-topbar">
                  <div className="window-dots">
                    <span /><span /><span />
                  </div>
                  <span>developer.js</span>
                </div>

                <div className="code-content">
                  <p><span className="code-purple">const</span> developer = {'{'}</p>
                  <p className="code-indent">
                    name: <span className="code-green">'Sabri'</span>,
                  </p>
                  <p className="code-indent">
                    role: <span className="code-green">'Full-Stack'</span>,
                  </p>
                  <p className="code-indent">
                    frontend: <span className="code-blue">true</span>,
                  </p>
                  <p className="code-indent">
                    backend: <span className="code-blue">true</span>,
                  </p>
                  <p className="code-indent">
                    databases: <span className="code-blue">true</span>,
                  </p>
                  <p className="code-indent">
                    coffee: <span className="code-orange">∞</span>
                  </p>
                  <p>{'};'}</p>
                  <p className="code-comment">// Turning ideas into code.</p>
                </div>
              </div>

              <div className="floating-badge badge-top">
                <FiCode /> <span>Frontend</span>
              </div>
              <div className="floating-badge badge-bottom">
                <FiDatabase /> <span>Backend & Data</span>
              </div>
              <div className="floating-badge badge-side">
                <FiLayers /> <span>Full-Stack</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <span className="scroll-line" /> Scroll to explore
        </a>
      </div>
    </section>
  );
}

export default Hero;