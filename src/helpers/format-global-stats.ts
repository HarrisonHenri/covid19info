import { FormatGlobalStats } from '../models/format-global-stats';

export const formatGlobalStats: FormatGlobalStats = data => {
  let formattedData = [];

  for (const [name, value] of Object.entries(data)) {
    if (typeof value === 'number') {
      formattedData.push({
        name,
        data: [value],
        borderWidth: 0,
      });
    }
  }

  return formattedData;
};
