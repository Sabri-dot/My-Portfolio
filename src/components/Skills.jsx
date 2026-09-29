import {
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
} from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Vite'],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Socket.IO'],
  },
  {
    title: 'Database',
    icon: <FiDatabase />,
    skills: ['MySQL', 'SQL', 'Relational Databases', 'ER Diagrams'],
  },
  {
    title: 'Tools',
    icon: <FiTool />,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-label">Skills</div>

        <h2 className="section-title">
          Technologies I work with.
        </h2>

        <p className="section-description mb-5">
          A practical toolkit covering frontend development, backend
          engineering, databases and the tools used throughout the development
          process.
        </p>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-6 col-lg-3" key={group.title}>
              <div className="skill-card">
                <div className="skill-icon">{group.icon}</div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills