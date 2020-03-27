export const mapDataThailand = thailandData => {
  let labelData = {
    confirmed: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  };
  if (thailandData) {
    labelData = {
      ...labelData,
      ...thailandData,
    };
  }
  return labelData;
};

export const mapDataGlobal = globalData => {
  let labelData = {
    confirmed: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
    lastUpdate: 0,
  };
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
