import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryDeaths } from '../constant/API';
import { mapDataHistory, calDataHistory } from '../libs/mapData';

const GraphDeaths = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryDeaths().then(({ data }) => {
      const { day, value } = mapDataHistory(data);
      setDateData(day);
      setCaseData(value);
    });
  }, []);

  return (
    <div className="block-graph">
      <p className="text-center graph-label mb-2">เสียชีวิต (ทั้งหมด / รายวัน)</p>
      <div className="row">
        <div className="col-12 col-md-6">
          <Line
            data={{
              labels: dateData,
              datasets: [
                {
                  label: 'เสียชีวิต',
                  data: caseData,
                  backgroundColor: 'rgba(98, 54, 255, 0.2)',
                  borderColor: 'rgba(98, 54, 255, 1)',
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
                  label: 'เสียชีวิต',
                  data: calDataHistory(caseData),
                  backgroundColor: 'rgba(98, 54, 255, 0.2)',
                  borderColor: 'rgba(98, 54, 255, 1)',
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

export default GraphDeaths;
