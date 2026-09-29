import { FiBookOpen, FiCode, FiTarget } from 'react-icons/fi';

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">GET TO KNOW ME</span>
          <h2>More than just <span className="gradient-text">code.</span></h2>
          <p>A little about my background and what drives me.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="about-card h-100">
              <span className="card-label">01 / ABOUT ME</span>
              <h3>Turning ideas into useful digital products.</h3>
              <p>
                I hold a Bachelor's degree in Computer Science and
                Engineering, specializing in Web Programming. I enjoy
                developing complete web solutions — from responsive
                user interfaces to backend logic and database design.
              </p>
              <p>
                I value clean code, thoughtful design, continuous
                learning and building applications that solve
                real-world problems.
              </p>
              <div className="about-highlight">
                <FiTarget />
                <span>Focused on quality, usability and continuous growth.</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-side-card">
              <div className="about-feature">
                <div className="feature-icon"><FiBookOpen /></div>
                <div>
                  <h4>Education</h4>
                  <p>Bachelor's in Computer Science and Engineering</p>
                  <span>Specialization: Web Programming</span>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon"><FiCode /></div>
                <div>
                  <h4>Development</h4>
                  <p>Frontend & Backend</p>
                  <span>Building end-to-end web applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;