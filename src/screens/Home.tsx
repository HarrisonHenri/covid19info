import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container } from '../components';
import CountryCard from '../components/country-card/country-card';
import GlobalStats from '../components/global-stats/global-stats';
import contries from '../static/countries.json';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(
    (country: string) => {
      navigation.navigate('CountryStats', { country });
    },
    [navigation],
  );

  return (
    <Container>
      <GlobalStats />
      <View style={styles.countries}>
        <FlatList
          data={contries}
          horizontal
          keyExtractor={item => String(item.name)}
          renderItem={({ item }) => (
            <CountryCard
              data={item}
              onPress={handleNavigation.bind(null, item.name)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  countries: {
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
