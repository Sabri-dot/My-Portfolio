function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#home" className="navbar-brand">
            sabri<span className="brand-dot">.</span>
          </a>

          <p>
            Designed & built with React.
          </p>

          <span className="footer-copy">
            © {new Date().getFullYear()} Sabri. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;