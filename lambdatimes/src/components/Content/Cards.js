import React from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card
          key={Math.random()}
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

// Prop Types

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
}

export default Cards;