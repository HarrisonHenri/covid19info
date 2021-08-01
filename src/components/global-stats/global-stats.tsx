import React, { useEffect } from 'react';

import { Alert } from 'react-native';

import { Box, Label, Row } from '..';
import { formatDatetime } from '../../helpers/format-datetime';
import { useGetGlobalCovidStats } from '../../services/use-global-get-covid-stats/use-global-get-covid-stats';
import VerticalBarChart from '../charts/bars';

const GlobalStats = () => {
  const {
    handleGetGlobalStats,
    response,
    errorMessage,
    handleResetErrorMessage,
  } = useGetGlobalCovidStats();

  useEffect(() => {
    handleGetGlobalStats();
  }, [handleGetGlobalStats]);

  if (errorMessage) {
    Alert.alert('Ops', errorMessage, [
      {
        text: 'Ok',
        onPress: () => {
          handleResetErrorMessage();
          handleGetGlobalStats();
        },
        style: 'cancel',
      },
    ]);
  }

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
