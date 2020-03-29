import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryConfirmed } from '../constant/API';
import { dateTimeToDate } from '../libs/Date';

const GraphConfirm = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    thHistoryConfirmed().then(({ data }) => {
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
      <p className="text-center graph-label">ติดเชื้อ</p>
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

export default GraphConfirm;
