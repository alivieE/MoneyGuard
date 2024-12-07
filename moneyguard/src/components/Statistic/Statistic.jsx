import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import s from "./Statistic.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Statistic = () => {

  const currentDate = new Date();
  const [pickMonth, setpickMonth] = useState(months[currentDate.getMonth()]);
  const [pickYear, setpickYear] = useState(currentDate.getFullYear());
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const years = [];
  const handlemonth = (e) => setpickMonth(e.target.value);
  const handleyear = (e) => setpickYear(e.target.value);


  for (let i = 0; i <= 9; i++) {
    years.push( currentYear - i);
  }
  

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

  const colors = [
    "#FED057",
    "#FFD8D0",
    "#FD9498",
    "#C5BAFF",
    "#6E78E8",
    "#4A56E2",
    "#81E1FF",
    "#24CCA7",
    "#00AD84",
  ];

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

  const valuesCategories = Object.keys(sumCategories)
    .map((type) => {
      return { label: type, value: sumCategories[type] };
    })
    .sort((category1, category2) => {
      return category2.value - category1.value;
    });
  console.log(valuesCategories);
  const totalExpenses = ExpenseTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncome = IncomeTransactions.reduce(
    (acc, amount) => acc + amount,
    0
  );




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
        <div>
          <select
            className={s.inputField}
            onChange={handlemonth}   
            value={pickMonth}        
            >
              <option className={s.selectTitle} value="">
                  All
              </option>
              {months.map((month) => {
                return ( 
                  <option className={s.selectTitle} value={month}>
                      {month}
                  </option>
                )
              })}
          </select>
          <select
            className={s.inputField}
            onChange={handleyear}
            value={pickYear}
            >
              <option className={s.selectTitle} value="">
              All
              </option>
              {years.map((year) => {
                return ( 
                  <option className={s.selectTitle} value={year}>
                      {year}
                  </option>
                )
              })}
          </select>
        </div>                  
                  

          <ul>
            {valuesCategories.map((transaction, index) => {
              if (transaction.value <= 0) {
                return null;
              }
              return (
                <li key={transaction.id} className={s.listLI}>
                  <div className={s.liWrap}>
                    <div
                      style={{ backgroundColor: colors[index] }}
                      className={s.boxColor}
                    ></div>
                    <p>{transaction.label}</p>
                  </div>
                  <p>{transaction.value}</p>
                </li>
              );
            })}
          </ul>
          <ul className={s.totalWrap}>
            <li className={s.expense}>
              <p>Expense:</p>
              <p>{totalExpenses}</p>
            </li>
            <li className={s.income}>
              <p>Income:</p>
              <p>{totalIncome}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.total}></div>
    </div>
  );
};

export default Statistic;
