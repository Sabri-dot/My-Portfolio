import { useEffect, useState } from 'react';
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from 'react-icons/fi';

const projects = [
  {
    number: '01',
    name: 'TaskFlow',
    category: 'Final Year Project · Full-Stack Application',
    description:
      'A full-stack project management application designed to help teams organize projects, manage tasks, coordinate team members and track progress. Includes JWT authentication, role-based access control, an administrative panel, REST APIs and real-time notifications.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'Socket.IO',
      'Bootstrap',
      'Git',
      'GitHub',
    ],
    highlight: 'Awarded the highest grade: 10/10',
    github: 'https://github.com/Sabri-dot/Task-Flow',
    demo: '',
    className: 'taskflow-project',
    images: [
      '/images/taskflow-1.png',
      '/images/taskflow-2.png',
      '/images/taskflow-3.png',
      '/images/taskflow-4.png',
      '/images/taskflow-5.png',
    ],
  },
  {
    number: '02',
    name: 'Online Book Store',
    category: 'Full-Stack Application · E-commerce',
    description:
      'A full-stack online bookstore where users can browse and purchase books. The application includes user authentication, shopping cart functionality, order management, simulated payments and an administrative panel for managing books, users and orders.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'MongoDB',
      'Git',
      'GitHub',
    ],
    github: 'https://github.com/Sabri-dot/online-bookstore',
    demo: '',
    className: 'bookstore-project',
    images: [
      '/images/online-book-store-1.png',
      '/images/online-book-store-2.png',
      '/images/online-book-store-3.png',
      '/images/online-book-store-4.png',
      '/images/online-book-store-5.png',
    ],
  },
  {
    number: '03',
    name: 'Makeup Artist Website',
    category: 'Frontend Development · Responsive Website',
    description:
      'A responsive website created for a professional makeup artist, featuring organized sections for services and client-facing information. Designed to provide a clear browsing experience across desktop and mobile devices.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    github: '',
    demo: 'https://dagmara-januzi-makeup-artist.netlify.app/',
    className: 'makeup-project',
    images:  [
  '/images/makeup-artist-1.png',
  '/images/makeup-artist-2.png',
  '/images/makeup-artist-3.png',
  '/images/makeup-artist-4.png',
  '/images/makeup-artist-5.png',
],
  },
];

function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openGallery = (project) => {
    setActiveGallery(project);
    setActiveImage(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveImage(0);
  };

  const showNextImage = () => {
    if (!activeGallery) return;

    setActiveImage((current) =>
      (current + 1) % activeGallery.images.length
    );
  };

  const showPreviousImage = () => {
    if (!activeGallery) return;

    setActiveImage((current) =>
      (current - 1 + activeGallery.images.length) %
      activeGallery.images.length
    );
  };

  useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowRight') showNextImage();
      if (event.key === 'ArrowLeft') showPreviousImage();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeGallery]);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="projects-container">
        <div className="section-header projects-heading">
          <span className="section-label">MY WORK</span>

          <h2 className="section-title">
            Projects I've <span className="gradient-text">Built</span>
          </h2>

          <p className="section-description">
            A selection of projects that reflect my experience in
            full-stack development, database management and responsive
            web design.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.className}`}
              key={project.number}
            >
            

              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-card-content">
  <div className="project-title-row">
    <h3>{project.name}</h3>

    {project.images.length > 0 && (
      <button
        type="button"
        className="project-mini-preview"
        onClick={() => openGallery(project)}
        aria-label={`View photos of ${project.name}`}
        title="View project photos"
      >
        <img
          src={project.images[0]}
          alt=""
          loading="lazy"
        />
        <span className="project-mini-preview-icon">
          ↗
        </span>
      </button>
    )}
  </div>

                <p className="project-description">
                  {project.description}
                </p>

                {project.highlight && (
                  <div className="project-highlight">
                    <span aria-hidden="true">★</span>
                    {project.highlight}
                  </div>
                )}
              </div>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span className="project-tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a
                    href={project.github}
                    className="project-link project-github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GitHub Repository</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    className="project-link project-demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}

                {project.images.length > 0 && (
                  <button
                    type="button"
                    className="project-link project-photos-button"
                    onClick={() => openGallery(project)}
                    aria-label={`View photos of ${project.name}`}
                  >
                    <span>View Project Photos</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeGallery && (
        <div
          className="project-gallery-overlay"
          onClick={closeGallery}
          role="presentation"
        >
          <div
            className="project-gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeGallery.name} photo gallery`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-gallery-header">
              <div>
                <span className="project-gallery-label">
                  PROJECT GALLERY
                </span>

                <h3>{activeGallery.name}</h3>

                <p>
                  Photo {activeImage + 1} of {activeGallery.images.length}
                </p>
              </div>

              <button
                type="button"
                className="project-gallery-close"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <FiX />
              </button>
            </div>

            <div className="project-gallery-main">
              <button
                type="button"
                className="project-gallery-arrow project-gallery-prev"
                onClick={showPreviousImage}
                aria-label="Previous photo"
              >
                <FiChevronLeft />
              </button>

              <img
                key={activeGallery.images[activeImage]}
                src={activeGallery.images[activeImage]}
                alt={`${activeGallery.name} screenshot ${activeImage + 1}`}
                className="project-gallery-image"
              />

              <button
                type="button"
                className="project-gallery-arrow project-gallery-next"
                onClick={showNextImage}
                aria-label="Next photo"
              >
                <FiChevronRight />
              </button>
            </div>

            <div className="project-gallery-thumbnails">
              {activeGallery.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={`project-gallery-thumbnail ${
                    activeImage === index ? 'active' : ''
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={activeImage === index}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;