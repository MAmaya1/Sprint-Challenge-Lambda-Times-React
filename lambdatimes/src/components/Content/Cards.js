import React from 'react';
import Card from './Card';

const Cards = props => {

  console.log(props.cards)
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card
          card={card}
          headline={card.headline}
          tab={card.tab}
          img={card.img}
          author={card.author}
        />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;