import { FiCode, FiDatabase } from 'react-icons/fi'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-label">About Me</div>

        <h2 className="section-title">
          Building web applications with a
          <span className="text-blue"> full-stack mindset.</span>
        </h2>

        <div className="row g-4 mt-2">
          <div className="col-lg-7">
            <div className="about-card">
              <p>
                I am a Computer Science & Engineering graduate specialized in
                Web Programming. My academic work and projects have given me
                practical experience in designing and developing modern web
                applications, from user interfaces to backend systems and
                databases.
              </p>

              <p className="mt-3">
                I enjoy working across the different layers of a web
                application and understanding how frontend, backend and data
                work together to create reliable and useful software.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-card">
              <div className="about-highlight">
                <div className="about-highlight-icon">
                  <FiCode />
                </div>

                <div>
                  <h4>Web Development</h4>
                  <p>
                    Building responsive interfaces and full-stack web
                    applications.
                  </p>
                </div>
              </div>

              <div className="about-highlight">
                <div className="about-highlight-icon">
                  <FiDatabase />
                </div>

                <div>
                  <h4>Backend & Databases</h4>
                  <p>
                    Developing APIs and working with relational database
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About