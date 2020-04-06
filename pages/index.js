import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

import Theme from '../constant/Theme';
import { thToday } from '../constant/API';
import { ddmmyyyyTommddyyyy } from '../libs/Date';
import { pageview } from '../libs/gtag';
import HeadCovid from '../components/HeadCovid';
import BlockStat from '../components/BlockStat';
import FooterCovid from '../components/FooterCovid';

import GraphConfirm from '../components/GraphConfirm';
import GraphRecovered from '../components/GraphRecovered';
import GraphDeaths from '../components/GraphDeaths';

const HeaderPage = dynamic(import('../components/HeaderPage'));
const FooterPage = dynamic(import('../components/FooterPage'));
const keywords = 'รายงานผล,โควิด-19,covid-19';
const { publicRuntimeConfig } = getConfig();

const HomePage = props => {
  const { th_data: thailandData } = props;
  const [today, setToday] = useState(thailandData);

  // const selectTab = tabName => {
  //   setSelected(tabName);
  // };

  useEffect(() => {
    pageview('/');
    thToday().then(data => {
      setToday(data);
    });
    // fetchStatThailand().then(({ data }) => {
    //   setMapThailandStat(mapDataToStat(data));
    // });
    // fetchStatGlobal().then(({ data }) => {
    //   setMapGlobalStat(mapDataToStat(data));
    // });
  }, []);

  return (
    <div className="container">
      <HeaderPage
        title="COVID-19"
        desc="รายงานผล โควิด-19 แบบรายวัน(covid-19)"
        url="/"
        keywords={keywords}
        thumnail={`${publicRuntimeConfig.BASE_URL}/facebook-share-covid-19.jpg`}
      />
      <div className="row">
        <HeadCovid />
      </div>
      {/* <div className="row">
        <div className="col-12">
          <LocationTabs selectTab={selectTab} />
        </div>
      </div> */}
      <div className="row">
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/virus.svg" alt="ติดเชื้อ covid-19" />}
            label="ติดเชื้อ"
            labelColor={Theme.colors.black}
            value={today ? today.Confirmed : 0}
            valueColor={Theme.colors.pink}
            increaseValue={today ? today.NewConfirmed : 0}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/hospital.svg" alt="รักษาตัว covid-19" />}
            label="รักษาตัว"
            labelColor={Theme.colors.black}
            value={today ? today.Hospitalized : 0}
            valueColor={Theme.colors.orange}
            increaseValue={today ? today.NewHospitalized : 0}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/strong.svg" alt="หายแล้ว covid-19" />}
            label="หายแล้ว"
            labelColor={Theme.colors.black}
            value={today ? today.Recovered : 0}
            valueColor={Theme.colors.greenLight}
            increaseValue={today ? today.NewRecovered : 0}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/death.svg" alt="เสียชีวิต covid-19" />}
            label="เสียชีวิต"
            labelColor={Theme.colors.black}
            value={today ? today.Deaths : 0}
            valueColor={Theme.colors.purple}
            increaseValue={today ? today.NewDeaths : 0}
          />
        </div>
        <div className="col-12">
          <p className="text-right mb-2 last-update">
            ข้อมูลล่าสุดเมื่อ: {ddmmyyyyTommddyyyy(today.UpdateDate)}
          </p>
        </div>
      </div>
      <div className="row mt-3 mb-2">
        <div className="col-12">
          <h3 className="text-center description-covid-19">
            สถิติย้อนหลังการติดเชื้อ COVID-19 ในประเทศไทย
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <GraphConfirm />
        </div>
        <div className="col-md-4">
          <GraphRecovered />
        </div>
        <div className="col-md-4">
          <GraphDeaths />
        </div>
      </div>
      <div style={{ marginBottom: 56 }} />
      <FooterCovid />
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

HomePage.getInitialProps = () => {
  // const thailandData = await thToday();
  const defaultData = {
    Confirmed: 0,
    Recovered: 0,
    Hospitalized: 0,
    Deaths: 0,
    NewConfirmed: 0,
    NewRecovered: 0,
    NewHospitalized: 0,
    NewDeaths: 0,
    UpdateDate: '01/01/2020 00:00',
  };
  return {
    th_data: defaultData,
  };
};

export default HomePage;
