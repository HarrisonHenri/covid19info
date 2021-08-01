import { useState, useCallback } from 'react';

import { getDateMinus7 } from '../../helpers/get-date-minus-7';
import { CountryCovidStatsResponse } from '../../models/country-covid-stats-response';
import api from '../api';
import { UseGetCountryCovidStats } from './use-get-country-covid-stats.model';

export const useGetCountryCovidStats: UseGetCountryCovidStats = () => {
  const [response, setResponse] = useState<CountryCovidStatsResponse[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetErrorMessage = useCallback(() => {
    setErrorMessage('');
  }, []);

  const handleGetCountryStats: UseGetCountryCovidStats.HandleGetCountryStats =
    useCallback(async country => {
      const date = getDateMinus7();

      try {
        const res = await api.get<CountryCovidStatsResponse[]>(
          `live/country/${country}/status/active/date/${date}`,
        );

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
