import React, { useEffect } from 'react';
import { Box, Label, Row } from '..';
import { useGetGlobalCovidStats } from '../../services/use-global-get-covid-stats/use-global-get-covid-stats';
import { formatDatetime } from '../../helpers/format-datetime';

import VerticalBarChart from '../charts/bars';

const GlobalStats = () => {
  const { handleGetGlobalStats, response } = useGetGlobalCovidStats();

  useEffect(() => {
    handleGetGlobalStats();
  }, [handleGetGlobalStats]);

  return (
    <Row marginTop="20px">
      <Box>
        <Row fluid>
          <Label type="subtitle" color="light">
            Covid Global Stats
          </Label>
          <Label>{response?.Date ? formatDatetime(response?.Date) : ''}</Label>
        </Row>
        <Row fluid>
          <VerticalBarChart data={response} />
        </Row>
      </Box>
    </Row>
  );
};

export default GlobalStats;
