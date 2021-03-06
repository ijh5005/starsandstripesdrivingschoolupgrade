import React, { useEffect, useState } from 'react';
import PriceCard from "./PriceCard";
import ImgSlider from "./ImgSlider";

import driving_test_prices from "./pricing/driving_test_prices";
import local_pricing from "./pricing/local_pricing";
import other_pricing from "./pricing/other_pricing";
import stars from "./imgs/stars.jpg";

import axios from "axios";

import './index.css';

function Servicepage() {

  const [
    drivingTestPriceList,
    setDrivingTestPriceList
  ] = useState([]);

  const [
    localPricingList,
    setLocalPricingList
  ] = useState([]);

  const [
    sectionOneTitle,
    setSectionOneTitle
  ] = useState("");

  const [
    sectionTwoTitle,
    setSectionTwoTitle
  ] = useState("");

  useEffect(() => {
    const drivingTestPrices = [];
    const localPricing = [];

    axios.get(
      "https://spreadsheets.google.com/feeds/cells/1hZFBx99ekXU_zI9gpm3UT7HqmPPUFmhllPFewkypJvw/1/public/full?alt=json"
    )
      .then(data => {
        const {
          entry
        } = data["data"]["feed"];
  
        entry.forEach(element => {
          const {
            gs$cell
          } = element;
          const {
            row, col, inputValue
          } = gs$cell;
  
          const rowNumber = parseInt(row);
          const colNumber = parseInt(col);
          if(rowNumber === 1){
            if(colNumber === 1){
              setSectionOneTitle(inputValue);
            } else if(colNumber === 4){
              setSectionTwoTitle(inputValue);
            }
          }
          if (rowNumber > 2) {
            if (colNumber < 4) {
              // blue cols
              if (colNumber === 1) {
                drivingTestPrices.push({
                  text: inputValue
                })
              } else if (colNumber === 2) {
                drivingTestPrices[drivingTestPrices.length - 1] = {
                  ...drivingTestPrices[drivingTestPrices.length - 1],
                  cost: `$${inputValue}`
                }
              } else {
                drivingTestPrices[drivingTestPrices.length - 1] = {
                  ...drivingTestPrices[drivingTestPrices.length - 1],
                  highlight: inputValue === "yes"
                }
              }
            } else {
              // green cols
              if (colNumber === 4) {
                localPricing.push({
                  text: inputValue
                })
              } else if (colNumber === 5) {
                localPricing[localPricing.length - 1] = {
                  ...localPricing[localPricing.length - 1],
                  cost: `$${inputValue}`
                }
              } else {
                localPricing[localPricing.length - 1] = {
                  ...localPricing[localPricing.length - 1],
                  highlight: inputValue === "yes"
                }
              }
            }
          }
        });
  
        setDrivingTestPriceList(drivingTestPrices);
        setLocalPricingList(localPricing);
      })
  }, []);

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
        <p className="title servicepageMiniTitle">{sectionOneTitle}</p>
        <div className="priceContainer">
          {drivingTestPriceList.map((data, index) => {
            const { text, cost, highlight } = data;
            return (<PriceCard
              key={index}
              text={text}
              cost={cost}
              highlight={highlight}
            />)
          })}
        </div>
      </div>

      <div className="pricingSection">
        <p className="title servicepageMiniTitle">{sectionTwoTitle}</p>
        <div className="priceContainer">
          {localPricingList.map((data, index) => {
            const { text, cost, highlight } = data;
            return (<PriceCard
              key={index}
              text={text}
              cost={cost}
              highlight={highlight}
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
