import React from 'react'
import Image from '../../assets/index'
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
        <div className={s.logoWrap} >
            <div className={s.logo}>
                <img src={Image.logo} alt='logo' />
                <p className={s.logoText}>MoneyGuard</p>
            </div>
        </div>

    </div>
  )
}

export default Header
