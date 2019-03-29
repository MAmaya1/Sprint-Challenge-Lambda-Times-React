import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {

    const filteredCards = this.state.cards.filter(card => {
        if (card.tab === this.state.selected) {
          return this.state.cards;
        }
    })
    
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      return filteredCards;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards
          cards={this.filterCards()}
        />
      </div>
    );
  }
}
