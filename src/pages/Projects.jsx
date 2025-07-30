import React, { useState } from 'react';
import '../assets/styles/Projects.scss';
import Netflix from '../assets/images/Netflix.jpg';
import WashIT from '../assets/images/WashIT.jpg';
import LocalLynk from '../assets/images/LocalLynk.png';
import Food from '../assets/images/Food-Delivery.jpg';
import Knowall from '../assets/images/Knowall.png';

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const projects = [
    {
      image: Knowall,
      title: 'SkillAssess - Full-stack assessment platform',
      links: null // Cooking
    },
    {
      image: Food,
      title: 'Food Delivery - Full-stack restaurant ordering system',
      github: 'https://github.com/VIKYATHB49/Food-Delivery'
    },
    {
      image: Netflix,
      title: 'Netflix Clone - Responsive UI clone of Netflix',
      live: 'https://vikyathb49.github.io/Netflix-Clone/',
      github: 'https://github.com/VIKYATHB49/Netflix-Clone'
    },
    {
      image: LocalLynk,
      title: 'LocalLynk - Local connectivity and community platform',
      live: 'https://www.figma.com/proto/cKFkdZuujSEmHMH6fBoLQD/LocalLynk?page-id=0%3A1&node-id=1-3218&p=f&viewport=172%2C73%2C0.05&t=3GBer5ze4YkahsSj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3214',
      github: 'https://github.com/VIKYATHB49/LocalLynk'
    },
    {
      image: WashIT,
      title: 'WashIT - Laundry Service App UI/UX',
      live: 'https://www.figma.com/proto/BI0LGzBA6rkDhFzwTasSMk/WashIT?page-id=0%3A1&node-id=2-267&p=f&viewport=316%2C25%2C0.02&t=jfir7qBWXMxog9Ld-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A267',
      github: 'https://github.com/VIKYATHB49/WashIT-Laundry-Service'
    }
  ];

  return (
    <div className="projects">
      <h1>My Recent Work</h1>
      <p>Here are a few projects I've worked on recently.</p>

      <div className="project-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img
              src={project.image}
              alt={project.title}
              onClick={() => setModalImage(project.image)}
            />
            <p>{project.title}</p>
            <div className="buttons">
              {project.links === null ? (
                <button className="cooking-btn" disabled>Cooking 🍳</button>
              ) : (
                <>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="image-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="image-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="Project Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
