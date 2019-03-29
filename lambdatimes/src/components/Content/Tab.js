import React from 'react';

import PropTypes from 'prop-types';

// Tab Component

const Tab = props => {
  if (props.tab === props.selectedTab) {
    return (
      <div
        className={'tab active-tab'}
        onClick={() => props.selectTabHandler(props.tab)}
      >
        {props.tab.toUpperCase()}
      </div>
    )
  } else {
    return (
      <div
        className={'tab'}
        onClick={() => props.selectTabHandler(props.tab)}
      >
        {props.tab.toUpperCase()}
      </div>
    )
  }
};

// Prop Types

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
