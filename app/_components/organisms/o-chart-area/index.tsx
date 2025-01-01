/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'jan',
    users: 4000,
    bots: 400,
  },
  {
    name: 'feb',
    users: 3000,
    bots: 310,
  },
  {
    name: 'mar',
    users: 2000,
    bots: 290,
  },
  {
    name: 'apr',
    users: 2780,
    bots: 200,
  },
  {
    name: 'may',
    users: 1890,
    bots: 211,
  },
  {
    name: 'jun',
    users: 2390,
    bots: 250,
  },
  {
    name: 'jul',
    users: 3490,
    bots: 210,
  },
  {
    name: 'aug',
    users: 3490,
    bots: 210,
  },
  {
    name: 'sep',
    users: 2390,
    bots: 250,
  },
  {
    name: 'oct',
    users: 3490,
    bots: 310,
  },
  {
    name: 'nov',
    users: 3490,
    bots: 110,
  },
  {
    name: 'dec',
    users: 3490,
    bots: 410,
  },
];

export default class AreaChartComp extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={600}
          height={400}
          data={data}
          className="font-[100] text-xs"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3EC5F0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3EC5F0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* <YAxis axisLine={false} /> */}

          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#3EC5F0"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
