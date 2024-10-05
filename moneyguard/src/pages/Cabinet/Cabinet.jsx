import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


const Cabinet = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Cabinet
