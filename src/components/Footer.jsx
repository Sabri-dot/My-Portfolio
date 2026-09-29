import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Bisha. All rights reserved.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer