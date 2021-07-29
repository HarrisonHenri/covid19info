import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';

interface Props extends RectButtonProps {
  data: {
    name: string;
    flag: string;
  };
}

const CountryCard: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.flag} width={70} height={70} fillRule="nonzero" />
      <Text style={styles.title}>{`${data.name.slice(0, 8)}...`}</Text>
    </RectButton>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: colors.grey,
    fontWeight: 'bold',
  },
});
