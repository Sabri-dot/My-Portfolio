import { FiArrowUpRight, FiCode } from 'react-icons/fi';



const projects = [
  {
    number: "01",
    name: "TaskFlow",
    category: "Final Year Project · Full-Stack Application",
    description:
      "A full-stack project management application designed to help teams organize projects, manage tasks, coordinate team members and track progress. Includes JWT authentication, role-based access control, an administrative panel, REST APIs and real-time notifications.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Socket.IO",
      "Bootstrap",
    ],
    highlight: "Awarded the highest grade: 10/10",
    github: "https://github.com/Sabri-dot/Task-Flow",
    demo: "",
    className: "taskflow-project",
  },
  {
    number: "02",
    name: "Online Book Store",
    category: "Full-Stack Application · E-commerce",
    description:
      "A full-stack online bookstore where users can browse and purchase books. The application includes user authentication, shopping cart functionality, order management, simulated payments and an administrative panel for managing books, users and orders.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    github: "https://github.com/Sabri-dot/online-bookstore",
    demo: "",
    className: "bookstore-project",
  },
  {
    number: "03",
    name: "Makeup Artist Website",
    category: "Frontend Development · Responsive Website",
    description:
      "A responsive website created for a professional makeup artist, featuring organized sections for services and client-facing information. Designed to provide a clear browsing experience across desktop and mobile devices.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
    ],
    github: "",
    demo: "https://dagmara-januzi-makeup-artist.netlify.app/",
    className: "makeup-project",
  },
];

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="projects-container">
        <div className="section-header projects-heading">
          <span className="section-label">MY WORK</span>

          <h2 className="section-title">
            Projects I've <span className="gradient-text">Built</span>
          </h2>

          <p className="section-description">
            A selection of projects that reflect my experience in
            full-stack development, database management and responsive
            web design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.className}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {project.highlight && (
                  <div className="project-highlight">
                    <span aria-hidden="true">★</span>
                    {project.highlight}
                  </div>
                )}
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span
                    className="project-tech-tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    className="project-link project-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub Repository</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    className="project-link project-demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;