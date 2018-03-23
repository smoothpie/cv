import React from 'react';
import { Link } from 'react-router-dom';
import './Construction.less';

const Construction = () => (
  <div className="construction-container">
    <div className="construction-bg"></div>
    <div className="construction">
      <h1>This career is now under construction</h1>
      <Link to="/cv"><button className="construction__btn">Participate in building process</button></Link>
    </div>
  </div>
)

export default Construction;
