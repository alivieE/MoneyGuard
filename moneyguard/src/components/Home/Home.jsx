import React, { useState } from 'react';
import AddModal from '../AddModal/AddModal';
import s from './Home.module.css';
import Image from '../../assets/index';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem('transactions')) || [];
  });

  const DeleteTransaction = (id) => {
    const filteredArray = transactions.filter((transaction) => {
      return transaction.id !== id
    })
    setTransactions(filteredArray)
    localStorage.setItem('transactions', JSON.stringify(filteredArray))
    
  }

  return (
    <div className={s.Home}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.trHead}>
            <th className={`${s.th} ${s.radiusLeft}`}>Date</th>
            <th className={s.th}>Type</th>
            <th className={s.th}>Category</th>
            <th className={s.th}>Comment</th>
            <th className={s.th}>Sum</th>
            <th className={s.th}></th>
            <th className={`${s.th} ${s.radiusRight}`}></th>
          </tr>
        </thead>
        <tbody>
          {[...transactions].reverse().map((transaction) => (
            <tr className={s.trAny}>
              <td className={s.td}>{transaction.date}</td>
              <td className={s.td}>{transaction.type === 'income' ? '+' : '-'}</td>
              <td className={s.td}>{transaction.category || "Other"}</td>
              <td className={s.td}>{transaction.comment}</td>
              <td className={s.td}>{transaction.amount}</td>
              <td><img src={Image.pencil} alt="Edit" /></td>
              <td><button className={s.btnDelete} type='button' onClick={() => {DeleteTransaction(transaction.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddModal transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
};

export default Home;
