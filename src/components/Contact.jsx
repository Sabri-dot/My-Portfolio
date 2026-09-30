
import { FaEnvelope, FaGithub, FaArrowRight } from "react-icons/fa";

function Contact() {
  const email = "sabri.jonuzii@gmail.com";
  const github = "https://github.com/Sabri-dot";

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2 className="section-title">
            Let's Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>

          <p className="contact-description">
            I'm open to new opportunities, collaborations and exciting
            projects in web development. If you have an idea or an
            opportunity to discuss, feel free to reach out.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <FaEnvelope />
          </div>

          <div className="contact-card-content">
            <span className="contact-card-label">EMAIL ME</span>
            <h3>Let's start a conversation</h3>
            <p>{email}</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="contact-action"
            aria-label="Send Sabri an email"
          >
            <FaArrowRight />
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <FaGithub />
          </div>

          <div className="contact-card-content">
            <span className="contact-card-label">GITHUB</span>
            <h3>Explore my work</h3>
            <p>Discover my repositories and projects.</p>
          </div>

          <a
            href={github}
            className="contact-action"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Sabri's GitHub profile"
          >
            <FaArrowRight />
          </a>
        </div>

        <div className="contact-bottom">
          <p>Have an opportunity in mind?</p>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Web Development Opportunity"
            )}`}
            className="contact-cta"
          >
            Get in Touch <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;