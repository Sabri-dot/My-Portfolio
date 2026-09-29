import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="section-label">Contact</div>

          <h2>
            Let's build something
            <span className="text-blue"> meaningful.</span>
          </h2>

          <p>
            I am open to opportunities where I can contribute my skills in web
            development, backend systems and databases while continuing to grow
            as a software professional.
          </p>

          <div className="contact-links">
            <a
              href="mailto:your.email@example.com"
              className="contact-link"
            >
              <FiMail />
              Email
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact