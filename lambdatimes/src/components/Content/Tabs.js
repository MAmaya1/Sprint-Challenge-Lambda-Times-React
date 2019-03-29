import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';

// Tabs Component

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => (
          <Tab
            key={Math.random()}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </div>
    </div>
  );
};

// Prop Types

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.string
  ),

  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}

export default Tabs;
