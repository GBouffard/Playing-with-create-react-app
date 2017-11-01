import React from 'react';

const cardsTypes = ['clubs', 'diamonds', 'hearts', 'spades'];
const cardsIds = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

function randomCard(arrayType) {
  return arrayType[Math.floor(Math.random() * arrayType.length)]
}

function randomCardSrc() {
  const type = randomCard(cardsTypes);
  const id = randomCard(cardsIds);
  return `../images/${type}-${id}.svg`
};

export default class CardFlipContainer extends React.Component {
  render() {
    const cardElements = [];
    for (let i = 0; i < 5; i++) {
      cardElements.push(
        <div className="card">
          <div className="front">
            <img
              className="card-style"
              src="../images/card-back.svg"
              alt="back"/>
            </div>
            <div className="front back">
              <img
                className="card-style"
                src={randomCardSrc()}
                alt="front"/>
              </div>
            </div>
      );
    }

    return (
      <div className="cards-container">
        {cardElements}
      </div>
    )
  }
}