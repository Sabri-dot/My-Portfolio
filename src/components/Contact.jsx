import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-card">
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let's build something
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>

          <p>
            I'm open to discussing web development opportunities,
            collaborations and interesting projects.
          </p>

          {/* Replace with your real email before publishing. */}
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="btn-primary-custom"
          >
            <FiMail /> Get in touch <FiArrowUpRight />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;