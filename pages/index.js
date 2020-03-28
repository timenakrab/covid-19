import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import getConfig from 'next/config';

import Theme from '../constant/Theme';
import { fetchStatThailand, fetchStatGlobal } from '../constant/API';
import { tab_selected as tabSelected, thailand } from '../constant/constantWebsite';
import { timestampToDate } from '../libs/Date';
import { mapDataToStat } from '../libs/mapData';
import HeadCovid from '../components/HeadCovid';
import LocationTabs from '../components/LocationTabs';
import BlockStat from '../components/BlockStat';
import FooterCovid from '../components/FooterCovid';

const HeaderPage = dynamic(import('../components/HeaderPage'));
const FooterPage = dynamic(import('../components/FooterPage'));
const keywords = 'รายงานผล,โควิด-19,covid-19';
const { publicRuntimeConfig } = getConfig();

const HomePage = props => {
  const { th_data: thailandData, global_data: globalData } = props;
  const [selectedTab, setSelected] = useState(tabSelected);
  const mapThailandStat = mapDataToStat(thailandData);
  const mapGlobalStat = mapDataToStat(globalData);

  const selectTab = tabName => {
    setSelected(tabName);
  };

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
      <div className="row">
        <div className="col-12">
          <LocationTabs selectTab={selectTab} />
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/virus.svg" alt="ติดเชื้อ covid-19" />}
            label="ติดเชื้อ"
            labelColor={Theme.colors.black}
            value={selectedTab === thailand ? mapThailandStat.confirmed : mapGlobalStat.confirmed}
            valueColor={Theme.colors.pink}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/hospital.svg" alt="รักษาตัว covid-19" />}
            label="รักษาตัว"
            labelColor={Theme.colors.black}
            value={selectedTab === thailand ? mapThailandStat.active : mapGlobalStat.active}
            valueColor={Theme.colors.orange}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/strong.svg" alt="หายแล้ว covid-19" />}
            label="หายแล้ว"
            labelColor={Theme.colors.black}
            value={selectedTab === thailand ? mapThailandStat.recovered : mapGlobalStat.recovered}
            valueColor={Theme.colors.greenLight}
          />
        </div>
        <div className="col-6 col-md-3">
          <BlockStat
            icon={<img className="icon-stat" src="./icon/death.svg" alt="เสียชีวิต covid-19" />}
            label="เสียชีวิต"
            labelColor={Theme.colors.black}
            value={selectedTab === thailand ? mapThailandStat.deaths : mapGlobalStat.deaths}
            valueColor={Theme.colors.purple}
          />
        </div>
        <div className="col-12">
          <p className="text-right mb-2 last-update">
            ข้อมูลล่าสุดเมื่อ:{' '}
            {timestampToDate(
              selectedTab === thailand ? mapThailandStat.lastUpdate : mapGlobalStat.lastUpdate,
            )}
          </p>
        </div>
      </div>
      <FooterCovid />
      <FooterPage />
    </div>
  );
};

HomePage.defaultProps = {
  th_data: null,
  global_data: null,
};

HomePage.propTypes = {
  th_data: PropTypes.shape(),
  global_data: PropTypes.shape(),
};

HomePage.getInitialProps = async () => {
  const thailandData = await fetchStatThailand();
  const globalStat = await fetchStatGlobal();
  return {
    th_data: thailandData.data,
    global_data: globalStat.data,
  };
};

export default HomePage;
