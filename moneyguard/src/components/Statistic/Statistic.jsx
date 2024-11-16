import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import AddModal from '../AddModal/AddModal';
import { BarLabel } from '@mui/x-charts';

const Statistic = () => {
const transactions = JSON.parse(localStorage.getItem('transactions'))
    console.log(transactions);

  return (
    <div style={{width:'100%',overflow:'hidden',position:'relative'}}>
      Statictic

      <div style={{height:"100%",position:'absolute',top:'-30px',left:'0'}}>
      <PieChart
      style={{width:'100%',height:'100%'}}
      height={600} 
      width={608}
      options={{
        dataLabels: {
          enabled: false, // Disables data point labels
        },
      }} 

  series={[
    {
      data: [{label:'Products',value:3},{label:'Main expense',value:8,}],
      
      innerRadius: 60,
      outerRadius: 100,
      paddingAngle: 0,
      cornerRadius: 0,
      startAngle: -136,
      endAngle: 240,
      cx: 150,
      cy: 150,    
      showLabels: false,
    }
  ]}
  
/>
      </div>
    </div>
  )
}

export default Statistic
