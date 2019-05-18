import React from 'react';
import stars from "../Servicepage/imgs/stars.jpg";
import './index.css';

function Contactpage() {
  return (<div id="servicepage" className="flexCol">
    <p className="title servicepageTitle">
      <img className="starsBanner" src={stars} />
      <span className="red">C</span>
      <span className="white">o</span>
      <span className="blue">n</span>
      <span className="red">t</span>
      <span className="white">a</span>
      <span className="blue">c</span>
      <span className="red">t</span>
    </p>
  </div>);
}

export default Contactpage;
