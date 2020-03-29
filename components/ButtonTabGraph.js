import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { tabsGraph } from '../constant/constantWebsite';

const ButtonTabGraph = ({ tabName, setTab }) => {
  return (
    <div className="block-tabs-button-graph">
      <div
        role="button"
        tabIndex={-1}
        className={`${tabName === tabsGraph.all ? 'tabs-button-active' : 'tabs-button'} pointer`}
        onClick={() => {
          setTab(tabsGraph.all);
        }}
        onKeyDown={() => null}
      >
        ทั้งหมด
      </div>
      <div
        role="button"
        tabIndex={-1}
        className={`${tabName === tabsGraph.daily ? 'tabs-button-active' : 'tabs-button'} pointer`}
        onClick={() => {
          setTab(tabsGraph.daily);
        }}
        onKeyDown={() => null}
      >
        รายวัน
      </div>
    </div>
  );
};

ButtonTabGraph.propTypes = {
  tabName: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default memo(ButtonTabGraph);
