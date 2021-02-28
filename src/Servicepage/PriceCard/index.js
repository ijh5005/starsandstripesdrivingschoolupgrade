import React from 'react';
import './index.css';

const PriceCard = (props) => {

  const {text, cost, highlight} = props;

  return (<div className={`servicepagePriceCard flexRow ${highlight && "highlight"}`}>
    <div className="serviceCardDescription flexCol">
      {text}
    </div>
    {cost && <div className="serviceCardCost flexRow">
      <p>{cost}</p>
    </div>}
  </div>);
}

export default PriceCard;
