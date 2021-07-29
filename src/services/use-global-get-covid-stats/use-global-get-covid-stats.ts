import { useState, useCallback } from 'react';
import { UseGetGlobalCovidStats } from './use-global-get-covid-stats.model';
import api from '../api';
import { GlobalCovidStatsResponse } from '../../models/global-covid-stats-response';

export const useGetGlobalCovidStats: UseGetGlobalCovidStats = () => {
  const [response, setResponse] = useState<
    GlobalCovidStatsResponse | undefined
  >();
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetErrorMessage = useCallback(() => {
    setErrorMessage('');
  }, []);

  const handleGetGlobalStats = useCallback(async () => {
    try {
      const res = await api.get<{ Global: GlobalCovidStatsResponse }>(
        'summary',
      );

      setResponse(res.data.Global);
    } catch {
      setErrorMessage('Não foi possível obter os dados, tente novamente.');
    }
  }, []);

  return {
    response,
    errorMessage,
    handleResetErrorMessage,
    handleGetGlobalStats,
  };
};
