import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const Statistic = () => {
  const desktopOS = [
    {
      label: 'Windows',
      value: 72.72,
    },
    {
      label: 'OS X',
      value: 16.38,
    },
    {
      label: 'Linux',
      value: 3.83,
    },]
    
  return (
    <div style={{width:'100%'}}>
      Statictic

      <div>
      <PieChart
      height={600}
  series={[
    {
      data: [{label:'ok',value:3},{label:'ol',value:8},],
      
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 150,
    }
  ]}
/>
      </div>
    </div>
  )
}

export default Statistic
