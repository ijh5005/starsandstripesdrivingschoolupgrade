import React from 'react';
import './index.css';

const PriceCard = (props) => {

  const {text, cost} = props;

  return (<div className="servicepagePriceCard flexRow">
    <div className="serviceCardDescription flexCol">
      {text.map((data, index) => {
        return (<p key={index}>
          {data}
        </p>)
      })}
    </div>
    <div className="serviceCardCost flexRow">
      <p>{cost}</p>
    </div>
  </div>);
}

export default PriceCard;
