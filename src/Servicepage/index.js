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
      "https://sheets.googleapis.com/v4/spreadsheets/1hZFBx99ekXU_zI9gpm3UT7HqmPPUFmhllPFewkypJvw/values/Sheet1?alt=json&key=AIzaSyAhMBo6hWX6SC_wi1-6Jn3K-_-26nVgE1E"
      //"https://spreadsheets.google.com/feeds/cells/1hZFBx99ekXU_zI9gpm3UT7HqmPPUFmhllPFewkypJvw/1/public/full?alt=json"
    )
      .then(data => {
        debugger
        const { values } = data.data;

        setSectionOneTitle(values[0]);
        setSectionTwoTitle(values[3]);

        const info = values;
        info.shift()
        info.shift()

        usedSectionOneContent = [];
        usedSectionTwoContent = [];

        info.map(d => {
            const text = d[0];
            const cost = d[1];
            const highlight = d[2];
            usedSectionOneContent.push({
                text,
                cost,
                highlight
            })
            const text2 = d[3];
            const cost2 = d[4];
            const highlight2 = d[5];
            usedSectionTwoContent.push({
                text: text2,
                cost: cost2,
                highlight: highlight2
            })
        });

        setDrivingTestPriceList(usedSectionOneContent);
        setLocalPricingList(usedSectionTwoContent);
    });
//         const {
//           entry
//         } = data["data"]["feed"];
  
//         entry.forEach(element => {
//           const {
//             gs$cell
//           } = element;
//           const {
//             row, col, inputValue
//           } = gs$cell;
  
//           const rowNumber = parseInt(row);
//           const colNumber = parseInt(col);
//           if(rowNumber === 1){
//             if(colNumber === 1){
//               setSectionOneTitle(inputValue);
//             } else if(colNumber === 4){
//               setSectionTwoTitle(inputValue);
//             }
//           }
//           if (rowNumber > 2) {
//             if (colNumber < 4) {
//               // blue cols
//               if (colNumber === 1) {
//                 drivingTestPrices.push({
//                   text: inputValue
//                 })
//               } else if (colNumber === 2) {
//                 drivingTestPrices[drivingTestPrices.length - 1] = {
//                   ...drivingTestPrices[drivingTestPrices.length - 1],
//                   cost: `$${inputValue}`
//                 }
//               } else {
//                 drivingTestPrices[drivingTestPrices.length - 1] = {
//                   ...drivingTestPrices[drivingTestPrices.length - 1],
//                   highlight: inputValue === "yes"
//                 }
//               }
//             } else {
//               // green cols
//               if (colNumber === 4) {
//                 localPricing.push({
//                   text: inputValue
//                 })
//               } else if (colNumber === 5) {
//                 localPricing[localPricing.length - 1] = {
//                   ...localPricing[localPricing.length - 1],
//                   cost: `$${inputValue}`
//                 }
//               } else {
//                 localPricing[localPricing.length - 1] = {
//                   ...localPricing[localPricing.length - 1],
//                   highlight: inputValue === "yes"
//                 }
//               }
//             }
//           }
//         });
  
//         setDrivingTestPriceList(drivingTestPrices);
//         setLocalPricingList(localPricing);
      //})
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
