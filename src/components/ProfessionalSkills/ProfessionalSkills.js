import React from 'react';
import Skill from '../Skill/Skill';
import './ProfessionalSkills.less';

const skills = require('../../../skills.json');

const ProfessionalSkills = () => {
  let skillsList = skills.map((skill, i) => {
    return <Skill key={i} skill={skill} />
  });
  return(
    <div className="professional-skills-container">
      <h1>Professional Skills</h1>
      <div className="professional-skills">
        {skillsList}
      </div>
    </div>
  )
}

export default ProfessionalSkills;
