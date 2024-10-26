import React,{useState} from 'react'
import AddModal from '../AddModal/AddModal';
import s from './Home.module.css'
const Home = () => {
const [isOpen, setIsOpen] = useState(false);
const [transactions, setTransactions] = useState([]);

  return (
    <div>
      Home

      
      <AddModal transactions={transactions} setTransactions={setTransactions}/>
     
    </div>
  )
}

export default Home
