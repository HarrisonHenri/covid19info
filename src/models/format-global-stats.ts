import { GlobalCovidStatsResponse } from './global-covid-stats-response';

export interface FormatGlobalStats {
  (data: FormatGlobalStats.Params): FormatGlobalStats.Result;
}

export namespace FormatGlobalStats {
  export type Params = GlobalCovidStatsResponse;
  export type Result = {
    name: string;
    data: number[];
    borderWidth: number;
  }[];
}
