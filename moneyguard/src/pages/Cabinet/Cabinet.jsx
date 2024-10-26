import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import s from './Cabinet.module.css'



const Cabinet = () => {
  return (
    <div>
      <Header></Header>
      <div className={s.mainWrap}>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default Cabinet
