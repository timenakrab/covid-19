import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { filterDay } from '../constant/constantWebsite';

const FilterDay = ({ selectedDay, setDay }) => {
  return (
    <div className="form-group my-2" style={{ width: 168 }}>
      <select
        className="form-control select-filter-day"
        value={selectedDay}
        onChange={e => setDay(e.target.value)}
      >
        <option value={filterDay.sevenDay}>ย้อนหลัง 7 วัน</option>
        <option value={filterDay.fifteenDay}>ย้อนหลัง 15 วัน</option>
        <option value={filterDay.thirtyDay}>ย้อนหลัง 30 วัน</option>
      </select>
    </div>
  );
};

FilterDay.propTypes = {
  selectedDay: PropTypes.number.isRequired,
  setDay: PropTypes.func.isRequired,
};

export default memo(FilterDay);
