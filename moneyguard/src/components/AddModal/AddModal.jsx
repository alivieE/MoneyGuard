import React, { useState } from 'react';
import s from './AddModal.module.css';
import Image from '../../assets/index';

const AddModal = ({setTransactions,transactions}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIncome, setIsIncome] = useState(true);
    const [amount, setAmount] = useState(0);
    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('blurred');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('blurred');
    };

    const toggleTransactionType = () => {
        setIsIncome(!isIncome);
    };

    function handleAmount(e) {
        setAmount(e.target.value)
    }


    function onSubmit(e) {
      e.preventDefault()  
      const type = isIncome ? 'income' : 'expense'
setTransactions((prev)=>{
    return [...prev, {type, amount: +amount}]
})
setAmount(0)
setIsIncome(true)
    }

    return (
        <div>
            <button className={s.addButton} onClick={openModal}>
                <img className={s.plusScale} src={Image.plus} alt="Add" />
            </button>
                    
            {isModalOpen && (
                <div className={s.modalOverlay}>
                    <form onSubmit={onSubmit} className={s.modalContent}>
                        <h2>Add transaction</h2>
                        <div className={s.toggleContainer}>
                            <span 
                                className={`${s.toggleOption} ${isIncome ? s.activeIncome : ''}`} 
                                onClick={toggleTransactionType}>
                                Income
                            </span>
                            <div className={s.toggleSwitch} onClick={toggleTransactionType}>
                                <div className={`${s.toggleButton} ${isIncome ? s.income : s.expense}`}>{isIncome ? <img src={Image.plus}></img>:'-'}</div>
                            </div>
                            <span 
                                className={`${s.toggleOption} ${!isIncome ? s.activeExpense : ''}`} 
                                onClick={toggleTransactionType}>
                                Expense
                            </span>                            
                        </div>
                        <div className={s.CountAndDate}>
                            <input onChange={handleAmount} value={amount} name='amount' type="number" placeholder="0.00" className={s.inputField} />
                            <input required name='data' type="date" className={s.inputField} />
                        </div>
                        <input name='comment' type="text" placeholder="Comment" className={s.inputField} />
                        <button type='submit' className={s.addButtonPrimary}>Add</button>
                        <button className={s.cancelButton} onClick={closeModal}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddModal;
