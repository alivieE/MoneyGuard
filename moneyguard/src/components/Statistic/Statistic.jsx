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

  const valuesCategories = Object.keys(sumCategories).map((type) => {
    return { label: type, value: sumCategories[type] };
  });

  return (
    <div className={s.statistic}>
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
              cx: 250,
              cy: 220,
              showLabels: false,
            },
          ]}
        />
        <div></div>
      </div>

      <div className={s.list}>
        <tbody>
          {[...transactions].reverse().map((transaction) => (
            <tr key={transaction.id} className={s.trAny}>
              <td className={s.td}>{transaction.category}</td>
              <td className={s.td}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Statistic;
