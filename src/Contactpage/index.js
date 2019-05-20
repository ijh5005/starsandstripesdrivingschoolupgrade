import React from 'react';
import stars from "../Servicepage/imgs/stars.jpg";
import './index.css';

import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm"
import contactInfo from "./contactInfo";

function Contactpage() {

  window.scrollTo(0, 0);

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
    <div id="contactpageContent" className="flexRow">
      <div>

      {contactInfo.map((element, i) => (
        <ContactSection
          key={i}
          title={element.title}
          text={element.text}
        />
      ))}

      </div>
      <div>
      </div>
    </div>
  </div>);
}

export default Contactpage;
