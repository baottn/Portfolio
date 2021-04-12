import React from 'react';
import Thumbnails from "./Thumbnails";

const ProjectList = ({ projects }) => {
  const thumbnails = projects.map((project) => {
    return <Thumbnails project={project} />
  });

  return (
    <section id="projects" className="mb-8 md:mb-16">
      <h1><span>Projects</span></h1>
      <section className="grid grid-cols-1 gap-5 ml-5 mr-5 md:grid-cols-2-fit justify-center">
        {thumbnails}
      </section>
    </section>
  );
}

export default ProjectList;
