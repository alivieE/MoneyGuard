import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import AddModal from '../AddModal/AddModal';

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
      data: [{label:'Products',value:3},{label:'Main expense',value:8},],
      
      innerRadius: 60,
      outerRadius: 100,
      paddingAngle: 0,
      cornerRadius: 0,
      startAngle: -136,
      endAngle: 240,
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
