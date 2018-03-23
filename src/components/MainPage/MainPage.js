import React, { Component } from 'react';
import axios from 'axios';
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
      projects: [],
      skills: []
    }
  }

  componentDidMount() {
    const { projects } = this.state;
    axios.get('/api/projects').then((res) => {
      this.setState({
        projects: res.data
      })
    })
    axios.get('/api/skills').then((res) => {
      this.setState({
        skills: res.data
      })
    })
  }

  render() {
    return(
      <div className="container">
        <div className="header_bg"></div>
        <div className="main">
	        <Header />
          <MyProjects projects={this.state.projects} />
          <WorkingExperience />
          <ProfessionalSkills skills={this.state.skills} />
	        <Features />
          <BetterHireMe />
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainPage;
