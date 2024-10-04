import React from 'react';
import Image from '../../assets/index';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logoWrap}>
        <div className={s.logo}>
          <img className={s.img} src={Image.logo} alt='logo' />
          <p className={s.logoText}>MoneyGuard</p>
        </div>        
      </div>
      <div className={s.userWrap}>
          <p className={s.user}>Name</p>
          <img className={s.exit} src={Image.exit} alt='exit' />
          <img className={s.vector} src={Image.vector} alt='vector' />
          <p className={s.exit}>Exit</p>
        </div>
    </div>
  );
};

export default Header;
