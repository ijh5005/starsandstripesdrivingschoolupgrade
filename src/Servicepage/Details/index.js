import React, { useState } from 'react';
import Detail from "./Detail";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import img4 from "../imgs/img4.jpg";
import img5 from "../imgs/img5.jpg";
import img6 from "../imgs/img6.jpg";
import img7 from "../imgs/img7.jpg";
import img8 from "../imgs/img8.jpg";
import img9 from "../imgs/img9.jpg";
import "./index.css";

const content = [
  {
    img: img8,
    text: "tips...",
    tipsHeading: "Driving In Snow",
    tips: [
      "It is necessary to drive slowly when taking angles in snowy situations and must drive quickly below the actual, maximum speed to get a safe drive.",
      "Do not exceed other cars at high speed.",
      "Monitor slippery roads. Slippery roads can lead to vehicle collisions.",
      "Pay attention to warning signs placed in deep drift areas to ensure safety.",
      "Take time to stop.",
      "The use of car lights in driving makes driving safe."
    ]
  },
  {
    img: img1,
    text: "tips...",
    tipsHeading: "Driving In Rain",
    tips: [
      "It is essential that students, check the tires before driving.",
      "Ensure that wipers work effectively.",
      "Ensure the car's windows are clean inside and outside.",
      "Make sure that the condensate resistors are applied to the car’s glass to prevent fog from forming on the glass",
      "Driving is quicker than those we do in normal days.",
      "Drive a safe distance between cars.",
      "Avoid puddles of water on the edges of the road if possible.",
      "Communicate well with other drivers around you and share the road with them in a safe way for everyone."
    ]
  },
  {
    img: img7,
    text: "tips...",
    tipsHeading: "Driving At Night",
    tips: [
      "Start by revealing the lights of the car before driving at night.",
      "When the sun begins to fall, you must ignite the lights of the cars.",
      "Slow down the speed to control all the risks surrounding your snap",
      "Increase your caution.",
      "When feeling tired stop driving and take a break",
      "Give signals in case of high light."
    ]
  },
  {
    img: img9,
    text: "tips...",
    tipsHeading: "Driving In Fog",
    tips: [
      "Relieve speed as much as possible",
      "Use fog lighting",
      "Open the window a bit so you can hear anyone warning you.",
      "Turn on car heating.",
      "Avoid changing paths",
      "Drive in slow paths."
    ]
  }
]

const Details = () => {
  return (<div id="detailsPage">
    {content.map((data, index) => {
      return <Detail key={index} content={data} index={index} />
    })}
  </div>)
}

export default Details;
