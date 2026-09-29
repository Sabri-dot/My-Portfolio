import { FiArrowUpRight, FiCode } from 'react-icons/fi';

const projects = [
  {
    number: '01',
    title: 'Project One',
    description: 'Your project description will go here.',
    technologies: ['React', 'JavaScript'],
    type: 'PROJECT 01',
  },
  {
    number: '02',
    title: 'Project Two',
    description: 'Your project description will go here.',
    technologies: ['Frontend', 'Backend'],
    type: 'PROJECT 02',
  },
  {
    number: '03',
    title: 'Project Three',
    description: 'Your project description will go here.',
    technologies: ['Database', 'Web'],
    type: 'PROJECT 03',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">SELECTED WORK</span>
          <h2>Projects I've <span className="gradient-text">built.</span></h2>
          <p>A selection of my work in web development.</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.number}>
              <article className="project-card h-100">
                <div className={`project-preview preview-${project.number}`}>
                  <div className="preview-top">
                    <span>{project.type}</span>
                    <FiCode />
                  </div>
                  <div className="preview-art">
                    <span className="preview-orb" />
                    <span className="preview-number">{project.number}</span>
                    <span className="preview-line" />
                  </div>
                  <span className="preview-caption">CASE STUDY / 2026</span>
                </div>

                <div className="project-info">
                  <span className="project-index">PROJECT {project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="skill-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-link">
                    <span>Details coming soon</span>
                    <FiArrowUpRight />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;