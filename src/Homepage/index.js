import React from 'react';

import car from "./car.jpg";

import { Link } from "react-router-dom";

import './index.css';

function Homepage() {
  return (<div id="homepage" className="page flexCol">
    <div className="homePageContent">
      <p className="title homepageTitle">Stars And Stripes Driving School</p>
      <Link to="/page/service">
        <div class="homepageBtn flexRow">
          <p>SERVICES</p>
        </div>
      </Link>
    </div>
    <img class="homepageBgImg" src={car} />
  </div>);
}

export default Homepage;
