import React from 'react';
import './Skill.less';

const Skill = ({ skill }) => (
  <div className="skill">
    <div className="skill__img">
      <img src={require(`../../../public/images/skills/${skill.image}`)} />
    </div>
    <span className="skill__name">{skill.title}</span>
  </div>
)

export default Skill;
