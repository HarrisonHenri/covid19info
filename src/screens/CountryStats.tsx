import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { Box, Container, Label, Row } from '../components';
import AreaChart from '../components/area/area';
import StatusBar from '../components/status-bar/status-bar';
import { formatCountryStats } from '../helpers/format-country-stats';
import { RootStackParamList } from '../routes/stack.routes';
import { useGetCountryCovidStats } from '../services/use-get-country-covid-stats/use-get-country-covid-stats';

type Props = StackScreenProps<RootStackParamList, 'CountryStats'>;

const CountryStats: React.FC<Props> = ({ route }) => {
  const [status, setStatus] = useState('confirmed');

  const handleSetPicker = useCallback((newStatus: string) => {
    setStatus(newStatus);
  }, []);

  const {
    handleGetCountryStats,
    response,
    errorMessage,
    handleResetErrorMessage,
  } = useGetCountryCovidStats();

  useEffect(() => {
    handleGetCountryStats(route.params.country);
  }, [handleGetCountryStats, route]);

  if (errorMessage) {
    Alert.alert('Ops', errorMessage, [
      {
        text: 'Ok',
        onPress: () => {
          handleResetErrorMessage();
          handleGetCountryStats(route.params.country);
        },
        style: 'cancel',
      },
    ]);
  }

  const formattedData = useMemo(() => {
    if (response.length) {
      return formatCountryStats(response);
    }
  }, [response]);

  return (
    <Container>
      <StatusBar status={status} handleSetPicker={handleSetPicker} />
      <Row marginTop="20px">
        <Box>
          <Row fluid>
            <Label type="subtitle" color="light">
              Country Accumulated Stats
            </Label>
            <Label>{`Last 7 days from ${route.params.country}`}</Label>
          </Row>
          <Row fluid>
            <AreaChart
              name={status}
              data={formattedData ? formattedData.get(status) : undefined}
            />
          </Row>
        </Box>
      </Row>
    </Container>
  );
};

export default CountryStats;
