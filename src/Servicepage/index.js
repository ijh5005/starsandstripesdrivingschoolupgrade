import React from 'react';
import PriceCard from "./PriceCard";
import ImgSlider from "./ImgSlider";

import driving_test_prices from "./pricing/driving_test_prices";
import local_pricing from "./pricing/local_pricing";
import other_pricing from "./pricing/other_pricing";
import stars from "./imgs/stars.jpg";

import './index.css';

function Servicepage() {

  window.scrollTo(0, 0);
  
  return (<div id="servicepage" className="flexCol">
    <p className="title servicepageTitle">
      <img className="starsBanner" src={stars} />
      <span className="red">S</span>
      <span className="white">e</span>
      <span className="blue">r</span>
      <span className="red">v</span>
      <span className="white">i</span>
      <span className="blue">c</span>
      <span className="red">e</span>
      <span className="white">s</span>
    </p>

    <ImgSlider />

    <div className="serviceHolder">

      <div className="pricingSection">
        <p className="title servicepageMiniTitle">Driving Lessons</p>
        <div className="priceContainer">
          {driving_test_prices.map((data, index) => {
            const {text, cost} = data;
            return (<PriceCard
              key={index}
              text={text}
              cost={cost}
            />)
          })}
        </div>
      </div>

      <div className="pricingSection">
        <p className="title servicepageMiniTitle">Driving Test Practice</p>
        <p className="title servicepageMiniTitle">(Philly)</p>
        <div className="priceContainer">
          {local_pricing.map((data, index) => {
            const {text, cost} = data;
            return (<PriceCard
              key={index}
              text={text}
              cost={cost}
            />)
          })}
        </div>
      </div>

      <div className="pricingSection">
        <p className="title servicepageMiniTitle">Driving Test Practice</p>
        <p className="title servicepageMiniTitle">(Norristown, Media, Huntingdon Valley, Bensalem Prices)</p>
        <div className="priceContainer">
          {other_pricing.map((data, index) => {
            const {text, cost} = data;
            return (<PriceCard
              key={index}
              text={text}
              cost={cost}
            />)
          })}
        </div>
      </div>

    </div>
    <a className="aBanner" href="https://www.dot2e.penndot.gov/exam_scheduling/eslogin.jsp#top?20190416185208189=20190416185208189" target="_blank">
      <img className="starsBanner" src={stars} />
      <p className="title servicepageTitle">Click to schedule your driving test</p>
    </a>
  </div>);
}

export default Servicepage;
