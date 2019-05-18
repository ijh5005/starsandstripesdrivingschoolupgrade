import React from 'react';
import Details from './Details';
import stars from "./imgs/stars.jpg";

import './index.css';

function Servicepage() {
  return (<div id="servicepage" className="flexCol">
    <p className="title servicepageTitle">
      <img className="starsBanner" src={stars} />
      <span className="red">T</span>
      <span className="white">i</span>
      <span className="blue">p</span>
      <span className="red">s</span>
    </p>
    <Details />
  </div>);
}

export default Servicepage;
