import React from 'react';
import stars from "../Servicepage/imgs/stars.jpg";
import './index.css';

import Testimonial from './Testimonial'
import avatar4 from './avatar4.png'
import avatar from './avatar.png'
import avatar3 from './avatar3.png'
import avatar5 from './avatar5.png'

function Reviewpage() {
  return (<div id="servicepage" className="flexCol">
    <p className="title servicepageTitle">
      <img className="starsBanner" src={stars} />
      <span className="red">R</span>
      <span className="white">e</span>
      <span className="blue">v</span>
      <span className="red">i</span>
      <span className="white">e</span>
      <span className="blue">w</span>
    </p>
    <Testimonial img={avatar5} img2={avatar3}/>
    <Testimonial img={avatar} img2={avatar4}/>
  </div>);
}

export default Reviewpage;
