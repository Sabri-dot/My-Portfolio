
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "BSc in Computer Science and Engineering — UBT",
    },
    {
      icon: <FaCode />,
      title: "Specialization",
      description: "Web Programming and Full-Stack Development",
    },
    {
      icon: <FaLaptopCode />,
      title: "Development",
      description: "Building responsive and practical web applications",
    },
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="section-label">ABOUT ME</span>

          <h2 className="section-title">
            Turning Ideas Into{" "}
            <span className="gradient-text">Web Experiences</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Sabri Jonuzi, a Computer Science and Engineering graduate
              from UBT, Pristina, specializing in Web Programming.
              I'm passionate about creating modern, responsive and
              user-friendly web applications.
            </p>

            <p>
              My technical experience includes frontend development with
              React and JavaScript, backend development with Node.js and
              Express.js, and database management with MySQL and MongoDB.
              I also work with REST APIs, authentication and role-based
              access control.
            </p>

            <p>
              My final-year project, TaskFlow, brought together these
              skills in a full-stack project management application and
              received a grade of 10/10. I enjoy solving problems,
              learning new technologies and continuously improving
              my development skills.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article className="about-highlight-card" key={item.title}>
                <div className="about-highlight-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;