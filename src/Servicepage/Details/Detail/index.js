import React, { useState } from 'react';
import "./index.css";

const Detail = ({content, index}) => {
  const order = (index % 2 === 0);
  const text = (<div className="detailSide">
    <p className="detailsHeading">{content.tipsHeading}</p>
    <div className="contentText">
      <ul>
        {content.tips.map((data, index) => {
          return <li key={index} className="detailSideLi">{data}</li>
        })}
      </ul>
    </div>
  </div>);
  const img = (<div className="detailSide detailSideImg img">
    <img className="detailImg" src={content.img}/>
  </div>)
  return (<div className="detailComponent">
    {text}
    {img}
  </div>)
}

export default Detail;
