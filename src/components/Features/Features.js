import React from 'react';
import './Features.less';

const Features = () => (
  <div className="features-container">
    <div className="features-container-bg"></div>
    <h1>And some more info about how cool I am</h1>
    <div className="features">
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/english.png")} />
        </div>
        <span>Winner of republican English contests and proud owner of Advanced level since 16 years old</span>
      </div>
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/winner.png")} />
        </div>
        <span>Winner of International Marketing Festival White Square 2017</span>
      </div>
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/presentation.png")} />
        </div>
        <span>Not a single presentation without applause (I'm secretely applying to do your tech presentations)</span>
      </div>
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/radio.png")} />
        </div>
        <span>Administrator of 100 000 people Three Days Grace community and a host of its little radio-station</span>
      </div>
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/music.png")} />
        </div>
        <span>Soul interests: Musician and Writer</span>
      </div>
      <div className="feature">
        <div className="feature__img-container">
          <img src={require("../../../public/images/features/knowledge.png")} />
        </div>
        <span>Knowledge addict - can't stop till I know it all</span>
      </div>
    </div>
  </div>
)

export default Features;
