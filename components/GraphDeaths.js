import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { thHistoryDeaths } from '../constant/API';
import { mapDataHistory, calDataHistory, filterDataByday } from '../libs/mapData';
import { tabsGraph, filterDay } from '../constant/constantWebsite';
import ButtonTabGraph from './ButtonTabGraph';
import FilterDay from './FilterDay';

const GraphDeaths = () => {
  const [dateData, setDateData] = useState([]);
  const [caseData, setCaseData] = useState([]);
  const [tab, setTab] = useState(tabsGraph.all);
  const [selectedDay, setSelectedDay] = useState(filterDay.sevenDay);

  useEffect(() => {
    let unmount = false;
    thHistoryDeaths().then(({ data }) => {
      if (!unmount) {
        const { day, value } = mapDataHistory(data);
        setDateData(day);
        setCaseData(value);
      }
    });
    return () => {
      unmount = true;
    };
  }, []);

  return (
    <div className="block-graph">
      <div className="text-center graph-label mb-2">
        <p className="mb-2">เสียชีวิต</p>
        <ButtonTabGraph tabName={tab} setTab={setTab} />
        <FilterDay selectedDay={Number(selectedDay)} setDay={setSelectedDay} />
      </div>
      <Line
        data={{
          labels: filterDataByday(selectedDay, dateData),
          datasets: [
            {
              label: 'เสียชีวิต',
              data: filterDataByday(
                selectedDay,
                tab === tabsGraph.all ? caseData : calDataHistory(caseData),
              ),
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
