import { useState, useCallback } from 'react';
import { UseGetCovidStats } from './use-get-covid-stats.model';
import { CovidStatsResponse } from '../../models/covid-stats-response';
import api from '../api';

export const useGetCovidStats: UseGetCovidStats = () => {
  const [response, setResponse] = useState<CovidStatsResponse | undefined>();
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetErrorMessage = useCallback(() => {
    setErrorMessage('');
  }, []);

  const handleGetCountryStats = useCallback(async (country = 'World') => {
    try {
      const res = await api.get<CovidStatsResponse>(country);

      setResponse(res.data);
    } catch {
      setErrorMessage('Não foi possível obter os dados, tente novamente.');
    }
  }, []);

  return {
    response,
    errorMessage,
    handleResetErrorMessage,
    handleGetCountryStats,
  };
};
