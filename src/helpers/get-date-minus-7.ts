import { DateTime } from 'luxon';

export const getDateMinus7 = () => {
  return DateTime.now().minus({ days: 7 }).toUTC();
};
