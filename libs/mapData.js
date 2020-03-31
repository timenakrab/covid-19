import { dateTimeToDate } from './Date';

export const defaultMapData = {
  confirmed: 0,
  active: 0,
  recovered: 0,
  deaths: 0,
  lastUpdate: '2020-01-01',
};

export const mapDataToStat = globalData => {
  let labelData = defaultMapData;
  if (globalData) {
    const { confirmed, recovered, deaths, lastUpdate } = globalData;
    labelData = {
      confirmed: confirmed.value,
      active: confirmed.value - recovered.value - deaths.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    };
  }
  return labelData;
};

export const mapDataHistory = data => {
  const dateTime = [];
  const value = [];
  data.map(({ Date: day, Cases }) => {
    dateTime.push(dateTimeToDate(day));
    value.push(Cases);
    return 0;
  });
  return {
    day: dateTime,
    value,
  };
};

export const calDataHistory = data => {
  const cal = [];
  for (let i = 1; i < data.length; i += 1) {
    const sum = data[i] - data[i - 1];
    cal.push(sum);
  }
  return cal;
};

export const filterDataByday = (day, data) => {
  if (data) {
    const dataLength = data.length;
    if (dataLength <= day) {
      return data;
    }
    return data.slice(dataLength - day);
  }
  return [];
};
