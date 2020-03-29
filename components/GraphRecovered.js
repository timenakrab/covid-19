import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryRecovered } from '../constant/API';
import { dateTimeToDate } from '../libs/Date';

const GraphRecovered = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryRecovered().then(({ data }) => {
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
      <p className="text-center graph-label">หายแล้ว</p>
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

export default GraphRecovered;
