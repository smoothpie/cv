import React, { Component } from 'react';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';
import WorkingExperience from '../WorkingExperience/WorkingExperience';
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills';
import Features from '../Features/Features';
import BetterHireMe from '../BetterHireMe/BetterHireMe';
import Footer from '../Footer/Footer';
import './MainPage.less';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="container">
        <div className="header_bg"></div>
        <div className="main">
	        <Header />
          <MyProjects />
          <WorkingExperience />
          <ProfessionalSkills />
	        <Features />
          <BetterHireMe />
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainPage;
