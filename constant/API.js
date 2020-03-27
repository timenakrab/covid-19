import { ApiGet } from './CommonAPI';
import { thailand } from './MathdroUrl';

export const fetchThailandOnly = () => {
  return ApiGet({
    path: thailand,
    params: {},
  });
};
