import React from 'react';
import Tab from './Tab';
import Proptypes from 'prop-types';

const Tabs = props => {
  // console.log(props.tabs)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => {

          return (
            <Tab
              tab={tab}
              key={index}
              selectTabHandler={props.selectedTabHandler}
              selectedTab={props.selectedTab}
            />
          )
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: Proptypes.string,
  selectTabHandler: Proptypes.func,
  selectedTab: Proptypes.string
}
export default Tabs;
