import { ApiGet } from './CommonAPI';
import { thailand, global } from './MathdroUrl';

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
