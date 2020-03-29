import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryDeaths } from '../constant/API';
import { dateTimeToDate } from '../libs/Date';

const GraphDeaths = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryDeaths().then(({ data }) => {
      const dateTime = [];
      const value = [];
      data.map(({ Date: day, Cases }) => {
        dateTime.push(dateTimeToDate(day));
        value.push(Cases);
        return 0;
      });
      setDateData(dateTime);
      setCaseData(value);
    });
  }, []);

  return (
    <div className="block-graph">
      <p className="text-center graph-label">เสียชีวิต</p>
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
        height={300}
        options={{
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default GraphDeaths;
