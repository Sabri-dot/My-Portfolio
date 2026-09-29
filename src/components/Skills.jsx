import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
} from 'react-icons/fi';

const skillGroups = [
  {
    icon: <FiMonitor />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  },
  {
    icon: <FiServer />,
    title: 'Backend Development',
    description: 'Building application logic and server-side functionality.',
    skills: ['REST APIs', 'Server-side Logic', 'Authentication'],
  },
  {
    icon: <FiDatabase />,
    title: 'Databases',
    description: 'Working with relational and NoSQL data storage.',
    skills: ['MySQL', 'Microsoft SQL Server', 'MongoDB'],
  },
  {
    icon: <FiTool />,
    title: 'Tools & Workflow',
    description: 'Managing code, collaboration and development workflow.',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">MY TOOLKIT</span>
          <h2>Skills & <span className="gradient-text">technologies.</span></h2>
          <p>The technologies I use to bring web applications to life.</p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group, index) => (
            <div className="col-md-6 col-lg-3" key={group.title}>
              <div className="skill-card h-100">
                <div className="skill-icon">{group.icon}</div>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;