import React, { useState, useEffect } from "react";
import s from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import Image from "../../assets/index";

const SideBar = () => {
  const [page, setPage] = useState("home");

  useEffect(() => {
  
      fetch('https://api.monobank.ua/bank/currency').then((data)=>{
        return data.json()
      }).then((res)=>{
console.log(res);
if(res.errCode === 'TMR'){
  console.log('too many requests');
  return
        }
        // console.log(res.find((currency)=>{
        //   return currency.currencyCodeA === 392
        // }));
      }).catch((error)=> {
      console.log(error);
     
    })
  }, []);

  return (
    <aside className={s.sideBar}>
      <div className={s.links}>
        <div className={s.homeLink}>
          <NavLink
            onClick={() => {
              setPage("home");
            }}
            className={s.link}
            style={{ fontWeight: page === "home" ? "bold" : "normal" }}
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
          style={{ fontWeight: page === "statistic" ? "bold" : "normal" }}
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
        <div className={s.balanceCount}>
          <p className={s.currency}>₴</p>
          <p className={s.balanceValue}> 24 000.00</p>
          </div>
      </div>    
      <table className={s.table}>
          <tr>
            <th className={s.th}>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
          <tr>
            <td className={s.td}>USD</td>
            <td className={s.td}>27.55</td>
            <td className={s.td}>27.65</td>
          </tr>
          <tr>
            <td className={s.td}>EUR</td>
            <td className={s.td}>30.00</td>
            <td className={s.td}>30.10</td>
          </tr>
      </table>  
    </aside>
  );
};

export default SideBar;