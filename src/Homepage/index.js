import React from 'react';

import car from "./car.jpg";
import stars from "./imgs/stars.jpg";

import { Link } from "react-router-dom";

import './index.css';

function Homepage() {

  window.scrollTo(0, 0);
  
  return (<div id="homepage" className="page flexCol">
    <div className="homePageContent">
      <p className="title homepageTitle">Stars And Stripes Driving School</p>
      <Link to="/page/service">
        <div className="homepageBtn flexRow">
          <p>SERVICES</p>
        </div>
      </Link>
    </div>
    <img className="homepageBgImg" src={car} />
    <img className="starsHomeBanner" src={stars} />
  </div>);
}

export default Homepage;
