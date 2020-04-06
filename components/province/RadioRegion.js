import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { region, All } from '../../constant/provinceThai';

const RadioRegion = ({ setFilterRegion }) => {
  const [selectRegion, setSelectRegion] = useState(All);

  const MapProvinceToRadio = ({ valueRegion, selectRegionFunc }) => {
    const regionComp = [];
    Object.entries(region).forEach(([key, value]) => {
      regionComp.push(
        <div className="form-check form-check-inline mr-2 mb-2 pointer" key={key}>
          <div
            role="button"
            tabIndex={-1}
            className="radio-region"
            onClick={() => {
              selectRegionFunc(key);
              setFilterRegion(key);
            }}
            onKeyDown={() => null}
          >
            <i
              className={`far ${
                key === valueRegion ? 'fa-check-circle select-region' : 'fa-circle unselect-region'
              } mr-2`}
            />
            <p className="form-check-label label-region">{value}</p>
          </div>
        </div>,
      );
    });
    return regionComp;
  };

  return <MapProvinceToRadio valueRegion={selectRegion} selectRegionFunc={setSelectRegion} />;
};

RadioRegion.propTypes = {
  setFilterRegion: PropTypes.func.isRequired,
};

export default RadioRegion;
