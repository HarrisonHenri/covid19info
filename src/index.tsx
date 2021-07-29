import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container } from './components';
import CountryCard from './components/country-card/country-card';
import GlobalStats from './components/global-stats/global-stats';
import colors from './styles/colors';

import contries from './static/countries.json';

const App = () => {
  return (
    <View style={styles.container}>
      <Container>
        <GlobalStats />
      </Container>
      <View style={styles.countries}>
        <FlatList
          data={contries}
          horizontal
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => <CountryCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.dark50 },
  countries: {
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
