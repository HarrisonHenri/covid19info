import { CountryCovidStatsResponse } from './country-covid-stats-response';

export interface FormatCountryStats {
  (data: FormatCountryStats.Params): FormatCountryStats.Result;
}

export namespace FormatCountryStats {
  export type Params = CountryCovidStatsResponse[];
  export type Result = Map<string, number[]>;
}
