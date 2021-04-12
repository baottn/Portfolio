import React from 'react';

const Thumbnails = ({ project }) => {
  return (
      <div className="thumbnail">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image} alt="Project Demo" className="project-image"/>
          <div className="image-overlay">
            <div className="image-title">{project.title}</div>
            <p className="image-description">{project.description}</p>
          </div>
        </a>
      </div>
  );
}

export default Thumbnails;
