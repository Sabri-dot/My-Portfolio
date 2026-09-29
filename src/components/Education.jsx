import { FiArrowUpRight, FiCode } from 'react-icons/fi'

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-label">Featured Projects</div>

        <h2 className="section-title">
          Projects that showcase my work.
        </h2>

        <p className="section-description mb-5">
          A selection of academic and personal projects demonstrating my
          experience with modern web technologies, backend development and
          databases.
        </p>

        <div className="row g-4">
          <div className="col-lg-4">
            <article className="project-card">
              <div className="project-image">
                <FiCode className="project-image-placeholder" />
              </div>

              <div className="project-content">
                <div className="project-number">01 / FEATURED</div>

                <h3 className="project-title">TaskFlow</h3>

                <p className="project-description">
                  Full-stack web application for project and task management,
                  developed as a graduation thesis project.
                </p>

                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">Express</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">JWT</span>
                </div>

                <div className="project-links">
                  <a href="#contact" className="project-link">
                    View Project
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="project-card">
              <div className="project-image">
                <FiCode className="project-image-placeholder" />
              </div>

              <div className="project-content">
                <div className="project-number">02 / PROJECT</div>

                <h3 className="project-title">Project Two</h3>

                <p className="project-description">
                  Project description will be added here with the technologies
                  and main functionality.
                </p>

                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">JavaScript</span>
                </div>

                <div className="project-links">
                  <a href="#contact" className="project-link">
                    View Project
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="project-card">
              <div className="project-image">
                <FiCode className="project-image-placeholder" />
              </div>

              <div className="project-content">
                <div className="project-number">03 / PROJECT</div>

                <h3 className="project-title">Project Three</h3>

                <p className="project-description">
                  Project description will be added here with the technologies
                  and main functionality.
                </p>

                <div className="project-tags">
                  <span className="project-tag">Web</span>
                  <span className="project-tag">Database</span>
                </div>

                <div className="project-links">
                  <a href="#contact" className="project-link">
                    View Project
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects