import { FormatCountryStats } from '../models/format-country-stats';

export const formatCountryStats: FormatCountryStats = data => {
  let formattedData = new Map<string, number[]>();
  let confirmedArray: number[] = [];
  let deathsArray: number[] = [];
  let activeArray: number[] = [];
  let recovered: number[] = [];
  let day = 0;

  for (let index1 = 0; index1 < data.length; index1++) {
    const { Date: date1 } = data[index1];
    for (let index2 = index1; index2 < data.length; index2++) {
      const {
        Confirmed,
        Deaths,
        Active,
        Recovered,
        Date: date2,
      } = data[index2];

      if (date1 === date2) {
        confirmedArray[day] = (confirmedArray[day] ?? 0) + Confirmed;
        deathsArray[day] = (deathsArray[day] ?? 0) + Deaths;
        activeArray[day] = (activeArray[day] ?? 0) + Active;
        recovered[day] = (recovered[day] ?? 0) + Recovered;
        if (index2 === data.length - 1) {
          index1 = index2;
        }
      } else {
        index1 = index2 - 1;
        day++;
        break;
      }
    }
  }

  formattedData.set('confirmed', confirmedArray);
  formattedData.set('deaths', deathsArray);
  formattedData.set('recovered', activeArray);
  formattedData.set('active', recovered);

  return formattedData;
};
