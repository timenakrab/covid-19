import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { fetchThailandOnly } from '../constant/API';

const HeaderPage = dynamic(import('../components/HeaderPage'));
const FooterPage = dynamic(import('../components/FooterPage'));

const HomePage = props => {
  const { th_data: thailandData } = props;

  return (
    <div>
      <HeaderPage title="COVID-19" desc="รายงานผล โควิด-19 แบบรายวัน(covid-19)" url="/" />
      <h1>Hello COVID-19</h1>
      <p>{JSON.stringify(thailandData)}</p>
      <FooterPage />
    </div>
  );
};

HomePage.defaultProps = {
  th_data: null,
};

HomePage.propTypes = {
  th_data: PropTypes.shape(),
};

HomePage.getInitialProps = async () => {
  const thailandData = await fetchThailandOnly();
  return {
    th_data: thailandData.data[0],
  };
};

export default HomePage;
