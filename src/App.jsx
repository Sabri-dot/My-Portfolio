import './App.css';

function App() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <p className="hero-eyebrow">
            COMPUTER SCIENCE & ENGINEERING
          </p>

          <h1>
            Hi, I'm <span>Sabri.</span>
            <br />
            Full-Stack Web Developer.
          </h1>

          <p className="hero-description">
            I build modern, responsive and user-focused
            web applications, from frontend interfaces
            to backend systems and databases.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
            </a>

            <a href="#contact" className="btn btn-outline-light">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Computer Science and Engineering graduate
            specializing in Web Programming.
          </p>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <p>Frontend · Backend · Databases</p>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <p>My selected web development projects.</p>
        </div>
      </section>

      <section id="contact" className="content-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Have a project or opportunity in mind?</p>
        </div>
      </section>
    </main>
  );
}

export default App;