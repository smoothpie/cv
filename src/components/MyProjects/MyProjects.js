import React from 'react';
import Project from '../Project/Project';
import './MyProjects.less';

const projects = require('../../../projects.json');

const MyProjects = () => {
  let projectList = projects.map((project, i) => {
    return <Project key={i} project={project}/>
  })
  return(
    <div className="projects-container">
      <h1>Some of my projects</h1>
      <div className="projects">
        {projectList}
      </div>
    </div>
  )
}

export default MyProjects;
