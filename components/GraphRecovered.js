import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryRecovered } from '../constant/API';
import { mapDataHistory, calDataHistory } from '../libs/mapData';

const GraphRecovered = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryRecovered().then(({ data }) => {
      const { day, value } = mapDataHistory(data);
      setDateData(day);
      setCaseData(value);
    });
  }, []);

  return (
    <div className="block-graph">
      <p className="text-center graph-label mb-2">หายแล้ว (ทั้งหมด / รายวัน)</p>
      <div className="row">
        <div className="col-12 col-md-6">
          <Line
            data={{
              labels: dateData,
              datasets: [
                {
                  label: 'หายแล้ว',
                  data: caseData,
                  backgroundColor: 'rgba(28, 177, 66, 0.2)',
                  borderColor: 'rgba(28, 177, 66, 1)',
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
                  label: 'หายแล้ว',
                  data: calDataHistory(caseData),
                  backgroundColor: 'rgba(28, 177, 66, 0.2)',
                  borderColor: 'rgba(28, 177, 66, 1)',
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

export default GraphRecovered;
