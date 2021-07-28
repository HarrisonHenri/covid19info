import { CovidStatsResponse } from '../../models/covid-stats-response';

export interface UseGetCovidStats {
  (): {
    response?: CovidStatsResponse;
    errorMessage: string;
    handleResetErrorMessage: () => void;
    handleGetCountryStats: (country?: string) => void;
  };
}
