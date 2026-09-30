
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Developing server-side applications and APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description: "Working with relational and NoSQL databases.",
    skills: [
    "SQL",
    "MySQL",
    "Microsoft SQL Server",
    "MongoDB",
    "Database Design",
    "CRUD Operations",
  ],
  },
  {
    icon: <FaTools />,
    title: "Tools & Workflow",
    description: "Tools for development, collaboration and version control.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Vite",
      "Agile Methodology",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="section-label">MY EXPERTISE</span>

          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build web applications,
            develop backend services and manage databases.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group-card" key={group.title}>
              <div className="skill-group-header">
                <div className="skill-group-icon">
                  {group.icon}
                </div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;