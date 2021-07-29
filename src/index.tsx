import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from './components';
import GlobalStats from './components/global-stats/global-stats';

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <GlobalStats />
      </SafeAreaView>
    </Container>
  );
};

export default App;
