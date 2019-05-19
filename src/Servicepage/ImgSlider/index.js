import React from 'react';
import './index.css';

import one from "./pplimgs/1.png";
import two from "./pplimgs/2.png";
import three from "./pplimgs/3.png";
import four from "./pplimgs/4.png";
import five from "./pplimgs/5.png";
import six from "./pplimgs/6.png";

const PriceCard = (props) => {

  const {text, cost} = props;

  return (<div id="imgSlider">
    <img className="imgSlides" src={one} />
    <img className="imgSlides" src={two} />
    <img className="imgSlides" src={three} />
    <img className="imgSlides" src={four} />
    <img className="imgSlides" src={five} />
    <img className="imgSlides" src={six} />
  </div>);
}

export default PriceCard;
