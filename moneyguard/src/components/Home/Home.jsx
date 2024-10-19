import React,{useState} from 'react'
import AddModal from '../AddModal/AddModal';
import s from './Home.module.css'
const Home = () => {
const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      Home
      {isOpen && <AddModal/>}
      <button onClick={()=>{
        
      }} className={s.openBtn}></button>
    </div>
  )
}

export default Home
