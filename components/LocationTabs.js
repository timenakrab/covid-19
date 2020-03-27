/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { thailand, global } from '../constant/constantWebsite';

const LocationTabs = ({ selectTab }) => {
  const [tab, setTab] = useState(thailand);
  return (
    <div className="root-tab">
      <div className="block-tab">
        <div
          role="button"
          className={`${tab === thailand ? 'tab-button-active' : 'tab-button'} pointer`}
          onClick={() => {
            setTab(thailand);
            selectTab(thailand);
          }}
          onKeyDown={() => null}
        >
          <img className="icon-flag" src="./icon/thailand.svg" alt="ประเทศไทย thailand" />
          ประเทศไทย
        </div>
        <div
          role="button"
          className={`${tab === global ? 'tab-button-active' : 'tab-button'} pointer`}
          onClick={() => {
            setTab(global);
            selectTab(global);
          }}
          onKeyDown={() => null}
        >
          <img className="icon-flag" src="./icon/global.svg" alt="ทั่วโลก global" />
          ทั่วโลก
        </div>
      </div>
    </div>
  );
};

LocationTabs.propTypes = {
  selectTab: PropTypes.func.isRequired,
};

export default LocationTabs;
