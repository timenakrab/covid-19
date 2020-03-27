import React from 'react';
// import PropTypes from 'prop-types';

const HeadCovid = () => {
  return (
    <div className="col-12">
      <div className="d-flex justify-content-center">
        <div className="block-header">
          <img className="icon-virus-covid" src="./icon/virus-covid.svg" alt="virus covid-19" />
          <div>
            <h1 className="text-center header-covid-19 m-0">Covid-19</h1>
            <h2 className="text-center subheader-covid-19 m-0">ไวรัสโควิด-19</h2>
          </div>
        </div>
      </div>
      <h3 className="text-center description-covid-19">
        ติดตามผู้ติดเชื้อ COVID-19 ทั้งในประเทศไทยและทั่วโลก
      </h3>
    </div>
  );
};

HeadCovid.propTypes = {};

export default HeadCovid;
