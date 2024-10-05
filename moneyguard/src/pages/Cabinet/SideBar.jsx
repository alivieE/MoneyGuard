import React from 'react'
import s from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import Image from '../../assets/index'

const SideBar = () => {
  return (
    <div>
        <div className={s.links}>
            <div className={s.homeLink}>
                <NavLink className={s.link} to='home'><img className={s.homeImage} src={Image.home}></img>Home</NavLink>
            </div>
            <div></div>
            <NavLink className={s.link}to='statistic'><img className={s.statisticImage} src={Image.statistic}></img>Statistic</NavLink>
        </div>
      <div className={s.balance}>
        <p className={s.text}>YOUR BALANCE</p>
        <p className={s.balanceValue}>₴ 24 000.00</p>
      </div>
    </div>
  )
}

export default SideBar
