/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'DDoS',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Malware',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Phishing',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'SQL Injection',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'XSS',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Zero Day',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class RadialChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
