import React from 'react';
import PriceCard from "./PriceCard";

import driving_test_prices from "./pricing/driving_test_prices";
import local_pricing from "./pricing/local_pricing";
import other_pricing from "./pricing/other_pricing";
import stars from "./imgs/stars.jpg";
import one from "./pplimgs/1.png";
import two from "./pplimgs/2.png";
import three from "./pplimgs/3.png";
import four from "./pplimgs/4.png";
import five from "./pplimgs/5.png";
import six from "./pplimgs/6.png";

import './index.css';

function Servicepage() {
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
    <div className="serviceHolder">
      <div className="sericeLeft">
        <p className="title servicepageMiniTitle">Driving Practice Cost</p>
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
        <p className="title servicepageMiniTitle">Driving Test: Philly Prices</p>
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
        <p className="title servicepageMiniTitle">Driving Test: Norristown, Media, Huntingdon Valley, Bensalem Prices</p>
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
      <div className="sericeRight">
        <img className="pplimgs" src={one} />
        <img className="pplimgs" src={two} />
        <img className="pplimgs" src={three} />
        <img className="pplimgs" src={four} />
        <img className="pplimgs" src={five} />
        <img className="pplimgs" src={six} />
      </div>
    </div>
    <a className="aBanner" href="https://www.dot2e.penndot.gov/exam_scheduling/eslogin.jsp#top?20190416185208189=20190416185208189" target="_blank">
      <img className="starsBanner" src={stars} />
      <p className="title servicepageTitle">Click to schedule your driving test</p>
    </a>
  </div>);
}

export default Servicepage;
