import React from 'react';
import { StyleSheet } from 'react-native';
import { Chart } from '..';
import { formatGlobalStats } from '../../helpers/format-global-stats';
import { GlobalCovidStatsResponse } from '../../models/global-covid-stats-response';

interface Props {
  data?: GlobalCovidStatsResponse;
}

const VerticalBarChart: React.FC<Props> = ({ data }) => {
  const series = data ? formatGlobalStats(data) : null;

  return (
    <Chart
      styles={style.chart}
      options={{
        chart: {
          type: 'column',
          spacing: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        credits: { enabled: false },
        legend: {
          verticalAlign: 'top',
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          },
        },
        yAxis: {
          visible: false,
          minPadding: 0,
          maxPadding: 0,
        },
        title: {
          text: '',
        },
        tooltip: {
          borderRadius: 10,
          borderWidth: 1,
          formatter: function (this: any): string {
            return `${this.series.name}: ${this.y}`;
          },
        },
        series,
      }}
    />
  );
};

export default VerticalBarChart;

const style = StyleSheet.create({
  chart: {
    height: 300,
    width: '100%',
  },
});
