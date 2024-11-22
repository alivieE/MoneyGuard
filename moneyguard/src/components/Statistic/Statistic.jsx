import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import AddModal from '../AddModal/AddModal';
import { BarLabel } from '@mui/x-charts';
import s from './Statistic.module.css';

const Statistic = () => {  

  const transactions = JSON.parse(localStorage.getItem('transactions'));
  const sumCategories = {
    MainExpenses: 0,
    Products: 0,
    Car: 0,
    Selfcare: 0,
    Childcare: 0,
    Householdproducts: 0,
    Education: 0,
    Leisure: 0
  };

  const ExpenseTransactions = transactions.filter((transaction) => {
    return transaction.type === 'expense';
  }).map((transaction) => {
    sumCategories[transaction.category] = sumCategories[transaction.category] + transaction.amount;
    return transaction;
  });

  const valuesCategories = Object.keys(sumCategories).map((type) => {
    return { label: type, value: sumCategories[type] };
  });



  return (
    <div>
      <div>
        <PieChart
          height={600}
          width={608}
          options={{
            dataLabels: {
              enabled: false,
            },
          }} 
          series={[
            {
              data: valuesCategories,
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

      <div className={s.list}>
        <ul>
          {Object.keys(sumCategories).map((category) => (
            sumCategories[category] > 0 && (
              <li key={category}>
                <strong>{category}</strong> {sumCategories[category]} 
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Statistic;
