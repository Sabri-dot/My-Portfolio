import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiMonitor,
} from 'react-icons/fi'

const projects = [
  {
    number: '01',
    featured: true,
    title: 'TaskFlow',
    description:
      'A full-stack project management system developed as a graduation thesis project. The application provides project, task and team management through a centralized web platform.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'Socket.IO',
    ],
    icon: <FiCode />,
  },
  {
    number: '02',
    featured: false,
    title: 'Online Bookstore',
    description:
      'A web application for browsing and managing books through an online bookstore interface, with a focus on structured data, usability and responsive web design.',
    technologies: [
      'React',
      'JavaScript',
      'Bootstrap',
      'Node.js',
      'MySQL',
    ],
    icon: <FiBookOpen />,
  },
  {
    number: '03',
    featured: false,
    title: 'Makeup Artist Portfolio Website',
    description:
      'A professional website created for a makeup artist to showcase services, portfolio content and business information through a modern and responsive web interface.',
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Responsive Design',
      'Netlify',
    ],
    icon: <FiMonitor />,
  },
]

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
          {projects.map((project) => (
            <div className="col-lg-4" key={project.number}>
              <article className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    {project.icon}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-number">
                    {project.number} /{' '}
                    {project.featured ? 'FEATURED' : 'PROJECT'}
                  </div>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span
                        className="project-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href="#contact"
                      className="project-link"
                    >
                      View Project
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects