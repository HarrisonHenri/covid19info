import { DateTime } from 'luxon';

import { FormatCountryStats } from '../models/format-country-stats';

export const formatCountryStats: FormatCountryStats = data => {
  const dates = [6, 5, 4, 3, 2, 1, 0].map(
    minus =>
      `${DateTime.now()
        .minus({ days: minus })
        .toFormat('yyyy-MM-dd')}T00:00:00Z`,
  );

  let formattedData = new Map<string, number[]>();
  let confirmedArray: number[] = [];
  let deathsArray: number[] = [];
  let activeArray: number[] = [];
  let recovered: number[] = [];
  let day = 0;

  for (const { Confirmed, Deaths, Active, Recovered, Date } of data) {
    if (String(Date) !== dates[day]) {
      day++;
    }
    confirmedArray[day] = (confirmedArray[day] ?? 0) + Confirmed;
    deathsArray[day] = (deathsArray[day] ?? 0) + Deaths;
    activeArray[day] = (activeArray[day] ?? 0) + Active;
    recovered[day] = (recovered[day] ?? 0) + Recovered;
  }

  formattedData.set('confirmed', confirmedArray);
  formattedData.set('deaths', deathsArray);
  formattedData.set('recovered', activeArray);
  formattedData.set('active', recovered);

  return formattedData;
};
