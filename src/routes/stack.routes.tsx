import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CountryStats from '../screens/CountryStats';
import Home from '../screens/Home';
import colors from '../styles/colors';

export type RootStackParamList = {
  Home: undefined;
  CountryStats: { country: string };
};

const StackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.light,
      },
    }}>
    <StackRoutes.Screen name="Home" component={Home} />
    <StackRoutes.Screen name="CountryStats" component={CountryStats} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
