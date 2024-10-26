import React, { useState } from 'react';
import s from './AddModal.module.css';
import Image from '../../assets/index';

const AddModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isIncome, setIsIncome] = useState(true);

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

    return (
        <div>
            <button className={s.addButton} onClick={openModal}>
                <img className={s.plusScale} src={Image.plus} alt="Add" />
            </button>
                    
            {isModalOpen && (
                <div className={s.modalOverlay}>
                    <div className={s.modalContent}>
                        <h2>Add transaction</h2>
                        <div className={s.toggleContainer}>
                            <span 
                                className={`${s.toggleOption} ${isIncome ? s.activeIncome : ''}`} 
                                onClick={toggleTransactionType}>
                                Income
                            </span>
                            <div className={s.toggleSwitch} onClick={toggleTransactionType}>
                                <div className={`${s.toggleButton} ${isIncome ? s.income : s.expense}`}></div>
                            </div>
                            <span 
                                className={`${s.toggleOption} ${!isIncome ? s.activeExpense : ''}`} 
                                onClick={toggleTransactionType}>
                                Expense
                            </span>                            
                        </div>
                        <div className={s.CountAndDate}>
                            <input type="number" placeholder="0.00" className={s.inputField} />
                            <input type="date" className={s.inputField} />
                        </div>
                        <input type="text" placeholder="Comment" className={s.inputField} />
                        <button className={s.addButtonPrimary}>Add</button>
                        <button className={s.cancelButton} onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddModal;
