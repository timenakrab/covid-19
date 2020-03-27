import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export const timestampToDate = timestamp => {
  return moment(timestamp).format('LLL');
};
