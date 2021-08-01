import { CountryCovidStatsResponse } from '../../models/country-covid-stats-response';

export interface UseGetCountryCovidStats {
  (): UseGetCountryCovidStats.Result;
}

export namespace UseGetCountryCovidStats {
  export type HandleGetCountryStats = (country: string) => Promise<void>;
  export type Result = {
    response: CountryCovidStatsResponse[];
    errorMessage: string;
    handleResetErrorMessage: () => void;
    handleGetCountryStats: HandleGetCountryStats;
  };
}
