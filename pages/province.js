import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import numeral from 'numeral';

import { thProvince } from '../constant/API';
import { timestampToDate } from '../libs/Date';
import { provinceThai, All } from '../constant/provinceThai';
import HeadCovid from '../components/HeadCovid';
import BlockStatGender from '../components/province/BlockStatGender';
import RadioRegion from '../components/province/RadioRegion';
import '../constant/styles.css';

const { publicRuntimeConfig } = getConfig();
const HeaderPage = dynamic(import('../components/HeaderPage'));
const FooterPage = dynamic(import('../components/FooterPage'));
const FooterCovid = dynamic(import('../components/FooterCovid'));
const keywords = 'รายงานผล,โควิด-19,covid-19';
const defaultGender = {
  Male: 0,
  Female: 0,
  Unknown: 0,
  LastData: '2020-01-01 00:00:00',
};

const Province = () => {
  const [isLoading, setLoading] = useState(true);
  const [genderData, setGenderData] = useState(defaultGender);
  const [provinceData, setProvinceData] = useState(null);
  const [filterRegion, setFilterRegion] = useState(All);

  useEffect(() => {
    thProvince().then(res => {
      setLoading(false);
      setGenderData({ ...defaultGender, ...res.Gender, LastData: res.LastData });
      setProvinceData(res.Province);
    });
  }, []);

  const MapProvinceData = ({ data, filter }) => {
    const provinceComp = [];
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (filter === All || filter === provinceThai[key].zone) {
          provinceComp.push(
            <div className="province-status" key={key}>
              <p className="m-0 text-center">{provinceThai[key].name}</p>
              <p className="m-0 text-center">{numeral(value).format('0,0')} คน</p>
            </div>,
          );
        }
      });
    }
    return provinceComp;
  };

  return (
    <div className="container">
      <HeaderPage
        title="COVID-19"
        desc="รายงานผล โควิด-19 แบบรายวัน(covid-19)"
        url="/"
        keywords={keywords}
        thumnail={`${publicRuntimeConfig.BASE_URL}/facebook-share-covid-19-province.jpg`}
      />
      <div className="row">
        <HeadCovid />
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <BlockStatGender
            icon={<img className="icon-stat" src="./icon/man.svg" alt="เพศชาย" />}
            label="เพศชาย"
            labelColor="#000000"
            value={genderData.Male}
            valueColor="#009bda"
          />
        </div>
        <div className="col-6 col-md-4">
          <BlockStatGender
            icon={<img className="icon-stat" src="./icon/woman.svg" alt="เพศหญิง" />}
            label="เพศหญิง"
            labelColor="#000000"
            value={genderData.Female}
            valueColor="#ff6070"
          />
        </div>
        <div className="offset-3 col-6 offset-md-0 col-md-4">
          <BlockStatGender
            icon={<img className="icon-stat" src="./icon/gender.svg" alt="ไม่ระบุเพศ" />}
            label="ไม่ระบุเพศ"
            labelColor="#000000"
            value={genderData.Unknown}
            valueColor="#6236FF"
          />
        </div>
        <div className="col-12">
          <p className="mb-2 last-update">
            ข้อมูลล่าสุดเมื่อ: {timestampToDate(genderData.LastData)}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center description-covid-19 mt-2 mb-3">
            จำนวนผู้ติดเชื้อแต่ละจังหวัด
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <RadioRegion setFilterRegion={setFilterRegion} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12">
          {isLoading ? (
            <p className="text-white text-center my-2">กำลังโหลดข้อมูล</p>
          ) : (
            <div className="mt-4">
              <MapProvinceData data={provinceData} filter={filterRegion} />
            </div>
          )}
        </div>
      </div>
      <FooterCovid />
      <FooterPage />
    </div>
  );
};

export default Province;
