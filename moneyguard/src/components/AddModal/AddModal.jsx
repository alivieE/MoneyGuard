import React, { useState, useEffect } from 'react';
import s from './AddModal.module.css';
import Image from '../../assets/index';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const AddModal = ({setEditTransaction, setTransactions, transactions,setIsModalOpen,isModalOpen,editTransaction }) => {
    
    const [isIncome, setIsIncome] = useState(true);    
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(storedTransactions);
    }, [setTransactions]);

    useEffect(() => {
        console.log(editTransaction);
        if(editTransaction){
            console.log(editTransaction);
            setIsIncome(editTransaction.type === 'income' ? true: false)
            setAmount(editTransaction.amount)
            setDate(editTransaction.date)
            setCategory(editTransaction.category)
            setComment(editTransaction.comment)
        }

    }, [isModalOpen]);
    
    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('blurred');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('blurred');
        setEditTransaction(null)
        resetForm();
    };

    const toggleTransactionType = () => {
        setIsIncome(!isIncome);
        setCategory(''); 
    };

    const resetForm = () => {
        setAmount(0);
        setDate('');
        setCategory('');
        setComment('');
        setIsIncome(true);
    };

    const handleAmount = (e) => setAmount(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleComment = (e) => setComment(e.target.value);

    const validateForm = () => amount > 0 && date && (isIncome || category);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("Please fill in all required fields and ensure amount is greater than zero.");
            return;
        }

        const type = isIncome ? 'income' : 'expense';
        const newTransaction = { type, amount: +amount, date, category: isIncome ? '' : category, comment, id:uuidv4()};
        if(editTransaction){
            const EditedArray = transactions.map((currentTransaction)=>{
                if(editTransaction.id === currentTransaction.id){
                    return newTransaction
                }

                return currentTransaction
            })
            setTransactions((prev) => {
                
                localStorage.setItem('transactions', JSON.stringify(EditedArray));
                return EditedArray;
            });

        }else{
            setTransactions((prev) => {
                const updatedTransactions = [...prev, newTransaction];
                localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
                return updatedTransactions;
            });
        }
        

        closeModal();
    };

    return (
        <div>
            <button className={s.addButton} onClick={openModal}>
                <img className={s.plusScale} src={Image.plus} alt="Add" />
            </button>
                    
            {isModalOpen && (
                <div className={s.modalOverlay} style={{ animation:isModalOpen ? `fadeIn 1s`: 'none' }}>
                    <form onSubmit={onSubmit} className={s.modalContent}>
                        <h2>Add transaction</h2>
                        <div className={s.toggleContainer}>
                            <span 
                                className={`${s.toggleOption} ${isIncome ? s.activeIncome : ''}`} 
                                onClick={toggleTransactionType}>
                                Income
                            </span>
                            <div className={s.toggleSwitch} onClick={toggleTransactionType}>
                                <div className={`${s.toggleButton} ${isIncome ? s.income : s.expense}`}>
                                    {isIncome ? <img src={Image.plus} alt="Income" /> : <img src={Image.minus} alt="Expense" />}
                                </div>
                            </div>
                            <span 
                                className={`${s.toggleOption} ${!isIncome ? s.activeExpense : ''}`} 
                                onClick={toggleTransactionType}>
                                Expense
                            </span>                            
                        </div>

                        {!isIncome && <div className={s.select}>
                            <select className={s.inputField} value={category} onChange={handleCategory} required>
                                <option className = {s.selectTitle} value="">Select a category</option>
                                <option className = {s.selectTitle} value="MainExpenses">Main expenses</option>
                                <option className = {s.selectTitle} value="Products">Products</option>
                            </select></div>}
                        <div className={s.CountAndDate}>
                            <input required min={0} onChange={handleAmount} value={amount} name="amount" type="number" placeholder="0.00" className={s.inputField}
                            />
                            <input required onChange={handleDate} value={date} name="data" type="date" className={s.inputField}
                            />
                        </div>

                        <div className={s.coment}>
                            <input
                                onChange={handleComment} value={comment} name="comment" type="text" placeholder="Comment" className={s.inputField}
                            />
                        </div>

                        <button type="submit" className={s.addButtonPrimary}>{editTransaction ? 'Edit': 'Add'}</button>
                        <button type="button" className={s.cancelButton} onClick={closeModal}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddModal;
