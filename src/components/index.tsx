import colors from '../styles/colors';
import typography from '../styles/typography';
import styled from 'styled-components/native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.dark50};
`;

interface CustomViewProps extends ViewProps {
  fluid?: boolean;
  spaced?: boolean;
  marginTop?: string;
  zIndex?: number;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  noPadding?: boolean;
}

export const Row = styled.View<CustomViewProps>`
  padding-left: ${props => (props.fluid ? 0 : '20px')};
  padding-right: ${props => (props.fluid ? 0 : '20px')};
  padding-top: ${props => (props.spaced ? '20px' : 0)};
  padding-bottom: ${props => (props.spaced ? '20px' : 0)};
  margin-top: ${props => props.marginTop || 0};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.flexDirection || 'column'};
  z-index: ${props => props.zIndex || 0};
`;

export const Box = styled.View<CustomViewProps>`
  padding: ${props => (props.noPadding ? '0' : '20px')};
  background-color: ${colors.dark};
  border-radius: 10px;
  overflow: hidden;
`;

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  active?: boolean;
}

export const Picker = styled.TouchableOpacity<CustomTouchableOpacityProps>`
  background: ${props => (props.active ? colors.primary : 'transparent')};
  padding: 7px 35px;
  border-radius: 20px;
`;

interface CustomTextProps extends TextProps {
  color?:
    | 'light'
    | 'dark'
    | 'dark50'
    | 'dark25'
    | 'grey'
    | 'grey50'
    | 'primary'
    | 'danger'
    | 'success';
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  type?: 'title' | 'subtitle' | 'label' | 'small';
}

export const Label = styled.Text<CustomTextProps>`
  color: ${props => (props.color ? colors[props.color] : colors.grey)};
  font-size: ${props =>
    props.type ? typography[props.type] : typography.label};
  font-weight: ${props =>
    ['title', 'subtitle'].includes(props.type ?? '') ? 'bold' : 'normal'};
  align-self: ${props => props.align || 'flex-start'};
`;

export const Chart = styled(HighchartsReactNative).attrs({})``;
