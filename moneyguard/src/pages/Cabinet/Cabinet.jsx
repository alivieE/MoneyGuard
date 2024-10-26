import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import s from './Cabinet.module.css'
import AddModal from '../../components/AddModal/AddModal'


const Cabinet = () => {
  return (
    <div>
      <Header></Header>
      <div className={s.mainWrap}>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <AddModal></AddModal>
    </div>
  )
}

export default Cabinet
