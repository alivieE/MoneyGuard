import React, { useState,useEffect } from "react";
import s from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import Image from "../../assets/index";

const SideBar = () => {
  const [page, setPage] = useState("home");


 useEffect(() => {
  try {
    fetch('https://api.monobank.ua/bank/currency').then((data)=>{
      return data.json()
    }).then((res)=>{
      console.log(res);
      console.log(res.find((currency)=>{
        return currency.currencyCodeA === 392
      }));
    })
  } catch (error) {
    
  }
 }, []);
  return (
    <div>
      <div className={s.links}>
        <div className={s.homeLink}>
          <NavLink
            onClick={() => {
              setPage("home");
            }}
            className={s.link}
            to="home"
          >
            <div className="activeWrap">
              <img className={s.homeImage} src={page==='home'? Image.homeWhite:Image.home }></img>
            </div>
            Home
          </NavLink>
        </div>
        <div></div>
        <NavLink
          onClick={() => {
            setPage("statistic");
          }}
          className={s.link}
          to="statistic"
        >
          <div className="activeWrap">
            <img className={s.statisticImage} src={page==='statistic'?Image.statisticWhite:Image.statistic}></img>
          </div>
          Statistic
        </NavLink>
      </div>
      <div className={s.balance}>
        <p className={s.text}>YOUR BALANCE</p>
        <p className={s.balanceValue}>₴ 24 000.00</p>
      </div>
    </div>
  );
};

export default SideBar;
