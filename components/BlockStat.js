import React, { memo } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import '../constant/styles.css';

const BlockStat = ({ icon, label, labelColor, value, valueColor }) => {
  return (
    <div className="block-stat shadow-sm mb-3">
      {icon}
      <p className="text-center label mb-0" style={{ color: labelColor }}>
        {label}
      </p>
      <p className="text-center value mb-0" style={{ color: valueColor }}>
        {numeral(value).format('0,0')}
      </p>
    </div>
  );
};

BlockStat.defaultProps = {
  icon: null,
  labelColor: '#000000',
  valueColor: '#000000',
};

BlockStat.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  value: PropTypes.number.isRequired,
  valueColor: PropTypes.string,
};

export default memo(BlockStat);
