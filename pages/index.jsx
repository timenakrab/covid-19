import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { fetchThailandOnly } from '../constant/API';

const HeaderPage = dynamic(import('../components/HeaderPage'));
const FooterPage = dynamic(import('../components/FooterPage'));

const HomePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [thailandData, setThailandData] = useState(null);
  const fetchThailand = () => {
    fetchThailandOnly().then(res => {
      const { data } = res;
      setThailandData(data[0]);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchThailand();
  }, []);

  return (
    <div>
      <HeaderPage title="COVID-19" desc="รายงานผล โควิด-19 แบบรายวัน(covid-19)" url="/" />
      <h1>Hello COVID-19</h1>
      <p>{isLoading ? 'กำลังโหลด...' : JSON.stringify(thailandData)}</p>
      <FooterPage />
    </div>
  );
};

export default HomePage;
