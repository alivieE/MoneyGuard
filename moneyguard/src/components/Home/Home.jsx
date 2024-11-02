import React,{useState} from 'react'
import AddModal from '../AddModal/AddModal';
import s from './Home.module.css'
const Home = () => {
const [isOpen, setIsOpen] = useState(false);
const [transactions, setTransactions] = useState([]);

  return (
    <div className={s.Home}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.th}>Date</th>
            <th className={s.th}>Type</th>
            <th className={s.th}>Category</th>
            <th className={s.th}>Comment</th>
            <th className={s.th}>Sum</th>    
            <th className={s.th}></th>
            <th className={s.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      
      <AddModal transactions={transactions} setTransactions={setTransactions}/>
     
    </div>
  )
}

export default Home
