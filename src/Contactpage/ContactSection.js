import React, { useEffect } from "react";
import img from "./map.png";
import ContactForm from './ContactForm'

const ContactSection = ({ title, text }) => {

  return (<div className="container contactHolder">

        <div id="contactTopSection" className="flexRow">
          <div className="left flexCol">

            <p className="header">{title}</p>
            <p className="description">{text}</p>
            <a className="details" href="tel:267-262-1196">267-262-1196</a>
            <p className="schedule">Operating Hours</p>
            <p className="details">Open 7 days a week</p>
            <p className="details">8AM to 7PM</p>

          </div>

          <div className="right contactImg"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "52% 100%",
              backgroundRepeat: "no-repeat"
            }}
          >
          </div>
        </div>

        <ContactForm />

    </div>);
};

export default ContactSection;
