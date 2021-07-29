import { DateTime } from 'luxon';

export const formatDatetime = (datetime: string) => {
  return `Data from ${DateTime.fromISO(datetime).toFormat(
    'dd/mm/yyyy, HH:mm',
  )}`;
};
