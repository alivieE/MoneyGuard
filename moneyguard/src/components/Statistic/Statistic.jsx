import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import AddModal from "../AddModal/AddModal";
import { BarLabel } from "@mui/x-charts";
import s from "./Statistic.module.css";

const Statistic = () => {
  const sumCategories = {
    MainExpenses: 0,
    Products: 0,
    Car: 0,
    Selfcare: 0,
    Childcare: 0,
    Household: 0,
    Education: 0,
    Leisure: 0,
    Other: 0,
  };



const colors = ['#FED057', '#FFD8D0', '#FD9498', '#C5BAFF', '#6E78E8', '#4A56E2', '#81E1FF','#24CCA7', '#00AD84']

  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  const ExpenseTransactions = transactions
    .filter((transaction) => {
      return transaction.type === "expense";
    })
    .map((transaction) => {
      sumCategories[transaction.category] =
        sumCategories[transaction.category] + transaction.amount;
      return transaction;
    });


    const IncomeTransactions = transactions
    .filter((transaction) => {
      return transaction.type === "income";
    })
    .map((transaction) => {
      return transaction.amount;
    });

    
  const valuesCategories = Object.keys(sumCategories).map((type) => {
    return { label: type, value: sumCategories[type] };
  });

  const totalExpenses = ExpenseTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncome = IncomeTransactions.reduce((acc, amount) => acc + amount, 0);
  

  return (
    <div className={s.statistic}>
      <h1 className={s.Name}>Statistics</h1>
      <div className={s.chartWrap}>
        <PieChart
        colors={colors}
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
              cx: 250,
              cy: 220,
              showLabels: false,
            },
          ]}
        />
        <div></div>
      </div>

      <div className={s.list}>
        <div>
        <ul>
          {[...transactions].filter((transaction) => {
            return transaction.type != "income"
          }).map((transaction) => (
            
              <li key={transaction.id} className={s.listLI}>
                <div className={s.liWrap}>
                  <div className={s.boxColor}>{}</div>
                  <p>{transaction.category}</p>
                </div>
                <p>{transaction.amount}</p>
                
              </li>            
          ))} 
          </ul>
        </div>
      </div>
      <div className={s.total}>
        <div className={s.totalWrap}>
          <p className={s.expense}>Expense: <p className={s.totalAmoutExpense}>{totalExpenses}</p></p>
          <p className={s.income}>Income: <p className={s.totalAmoutIncome}>{totalIncome}</p></p>
        </div>
      </div>
     
    </div>
  );
};

export default Statistic;
