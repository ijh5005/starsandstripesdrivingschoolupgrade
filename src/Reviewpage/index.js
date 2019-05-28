import React from 'react';
import stars from "../Servicepage/imgs/stars.jpg";
import './index.css';

import Testimonial from './Testimonial'
import avatar4 from './ppl1.png'
import avatar from './ppl2.png'
import avatar3 from './ppl3.png'
import avatar5 from './ppl4.png'

function Reviewpage() {

  window.scrollTo(0, 0);

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
    <a className="aBanner" href="https://www.google.com/search?q=stars+and+stripes+driving&rlz=1C5CHFA_enUS813US813&oq=star&aqs=chrome.0.69i59j69i60l2j69i57j69i60l2.902j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89c6c795c329ec55:0x2f3dd6f67ada709,3,,," target="_blank">
      <img className="starsBanner" src={stars} />
      <p className="title servicepageTitle">Click to make a review</p>
    </a>
  </div>);
}

export default Reviewpage;
