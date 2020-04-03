import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export const timestampToDate = timestamp => {
  return moment(timestamp).format('LLL');
};

export const ddmmyyyyTommddyyyy = date => {
  return moment(date, 'DD/MM/YYYY hh:mm').format('LLL');
};

export const dateTimeToDate = dateTime => {
  return moment(dateTime)
    .format('ll')
    .replace(' 2020', '');
};
