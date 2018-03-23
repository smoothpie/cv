import React from 'react';
import './Project.less';

const Project = ({ project }) => (
  <div className="project">
    <div className="project-info">
      <h2>{project.title}</h2>
      <span>{project.overview}</span>
      <span><strong>Technologies:</strong> {project.technologies}</span>
      <span><strong>Link: </strong><a href={project.link} target="_blank">{project.link}</a></span>
    </div>
    <div className="project-img">
      <img src={require(`../../../public/images/projects/${project.image}`)} />
    </div>
  </div>
)

export default Project;
