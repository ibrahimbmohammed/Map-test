/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProp {
  labels?: string[];
  dataFromApi?: string[] | unknown[];
}

function DonutChart({ labels = ['bots', 'users'], dataFromApi = [1, 10] }: DonutChartProp) {
  // const style = getComputedStyle(document.body);
  //  const primCol = style.getPropertyValue('--color-primaryColor');
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: dataFromApi,
        backgroundColor: [
          'rgba(62, 167, 220, 0.9)',
          'rgba(242, 244, 240, 0.9)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default DonutChart;
