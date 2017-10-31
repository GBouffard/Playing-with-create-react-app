import React from 'react';

export default class CardFlipContainer extends React.Component {
  render() {
    const cardElement = (
      <div className="card">
        <div className="front">
          <img 
            src="../images/card-back.svg"
            alt="back"/>
        </div>
        <div className="front back">
          <img 
            src="../images/diamonds-king.svg"
            alt="front"/>
        </div>
      </div>
    );

    return (
      <div className="cards-container">
        {cardElement}
        {cardElement}
        {cardElement}
      </div>
    )
  }
}