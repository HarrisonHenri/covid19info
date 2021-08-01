import { GlobalCovidStatsResponse } from '../../models/global-covid-stats-response';

export interface UseGetGlobalCovidStats {
  (): {
    response?: GlobalCovidStatsResponse;
    errorMessage: string;
    handleResetErrorMessage: () => void;
    handleGetGlobalStats: () => Promise<void>;
  };
}
