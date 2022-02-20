import * as React from 'react';
import { RadialChart } from 'react-vis';

export default function PieChart({data}) {
  return (
    <RadialChart 
      data={data}
      labelsStyle={{ fontSize: 12 }}
      showLabels
      width={300}
      height={300}
      labelsRadiusMultiplier={0.8}
    />
  )
}
