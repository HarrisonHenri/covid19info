import React from 'react';

import { StyleSheet } from 'react-native';

import { Chart } from '..';
import colors from '../../styles/colors';

interface Props {
  data?: number[];
  name: string;
}

const AreaChart: React.FC<Props> = ({ name, data }) => {
  return (
    <Chart
      styles={style.chart}
      options={{
        chart: {
          type: 'areaspline',
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
          backgroundColor: colors.dark,
        },
        credits: { enabled: false },
        legend: {
          enabled: false,
        },
        plotOptions: {
          areaspline: {
            lineColor: colors.success,
            lineWidth: 5,
          },
        },
        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
          min: data ? Math.min(...data) : 0,
        },
        title: {
          text: '',
        },
        tooltip: {
          borderRadius: 10,
          borderWidth: 1,
          formatter: function (this: any): string {
            return `${this.y}`;
          },
        },
        series: [
          {
            name,
            data,
            color: colors.success,
          },
        ],
      }}
    />
  );
};

export default AreaChart;

const style = StyleSheet.create({
  chart: {
    flex: 1,
    height: 300,
    width: '100%',
  },
});
