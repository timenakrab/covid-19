import { ApiGet, ApiGetHistory, ApiGetTHToday } from './CommonAPI';
import { thailand, global } from './MathdroUrl';
import { thailand as th, confirmed, recovered, deaths } from './Covid19api';

export const fetchStatThailand = () => {
  return ApiGet({
    path: thailand,
    params: {},
  });
};

export const fetchStatGlobal = () => {
  return ApiGet({
    path: global,
    params: {},
  });
};

export const thToday = () => {
  return ApiGetTHToday();
};

export const thHistoryConfirmed = () => {
  return ApiGetHistory({
    path: th + confirmed,
  });
};

export const thHistoryRecovered = () => {
  return ApiGetHistory({
    path: th + recovered,
  });
};

export const thHistoryDeaths = () => {
  return ApiGetHistory({
    path: th + deaths,
  });
};
