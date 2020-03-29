import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryConfirmed } from '../constant/API';
import { mapDataHistory, calDataHistory } from '../libs/mapData';

const GraphConfirm = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryConfirmed().then(({ data }) => {
      const { day, value } = mapDataHistory(data);
      setDateData(day);
      setCaseData(value);
    });
  }, []);

  return (
    <div className="block-graph">
      <p className="text-center graph-label mb-2">ติดเชื้อ (ทั้งหมด / รายวัน)</p>
      <div className="row">
        <div className="col-12 col-md-6">
          <Line
            data={{
              labels: dateData,
              datasets: [
                {
                  label: 'ติดเชื้อ',
                  data: caseData,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            height={140}
            options={{
              legend: {
                display: false,
              },
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <Line
            data={{
              labels: dateData,
              datasets: [
                {
                  label: 'ติดเชื้อ',
                  data: calDataHistory(caseData),
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            height={140}
            options={{
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphConfirm;
