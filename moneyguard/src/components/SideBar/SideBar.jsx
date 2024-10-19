import React, { useState, useEffect } from 'react'
import s from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import Image from '../../assets/index'

const SideBar = () => {
  const [page, setPage] = useState('home')
  const [currencies, setCurrencies] = useState(()=>{
    return JSON.parse(localStorage.getItem('currencies')) || {
      dollar:{
        rateBuy:'-',
        rateSell:'-'
      },
      euro:{
        rateBuy:'-',
        rateSell:'-'
      }
    }
  });
  useEffect(() => {
    fetch('https://api.monobank.ua/bank/currency')
      .then((data) => {
        return data.json()
      })
      .then((res) => {
        console.log(res)
        if (res.errCode === 'TMR') {
          console.log('too many requests')

          return
        }

        const dollar = res.find((currency) => {
          return currency.currencyCodeA === 840
        })
        const euro = res.find((currency) => {
          return currency.currencyCodeA === 978
        })
        localStorage.setItem('currencies', JSON.stringify({dollar,euro}))
        setCurrencies({dollar,euro})
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <aside className={s.sideBar}>
      <div className={s.links}>
        <div className={s.homeLink}>
          <NavLink
            onClick={() => {
              setPage('home')
            }}
            className={s.link}
            style={{ fontWeight: page === 'home' ? 'bold' : 'normal' }}
            to="home"
          >
            <div className="activeWrap">
              <img
                className={s.homeImage}
                src={page === 'home' ? Image.homeWhite : Image.home}
              ></img>
            </div>
            Home
          </NavLink>
        </div>
        <div></div>
        <NavLink
          onClick={() => {
            setPage('statistic')
          }}
          className={s.link}
          style={{ fontWeight: page === 'statistic' ? 'bold' : 'normal' }}
          to="statistic"
        >
          <div className="activeWrap">
            <img
              className={s.statisticImage}
              src={
                page === 'statistic' ? Image.statisticWhite : Image.statistic
              }
            ></img>
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
        <tr className={s.trTH}>
          <th className={s.th}>Currency</th>
          <th className={s.th}>Purchase</th>
          <th className={s.th}>Sale</th>
        </tr>
        <tr className={s.tr}>
          <td className={s.tdUSD}>USD</td>
          <td className={s.tdUSD}>{currencies.dollar.rateSell}</td>
          <td className={s.tdUSD}>{currencies.dollar.rateBuy}</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.tdEUR}>EUR</td>
          <td className={s.tdEUR}>{currencies.euro.rateSell}</td>
          <td className={s.tdEUR}>{currencies.euro.rateBuy}</td>
        </tr>
      </table>
      <div className={s.waves}>        
        <img className={s.orangeVector} src={Image.orangeVector}/>
        <img src={Image.whiteVector}/>
      </div>
      <p className={s.countOne} >41.4852</p>
      <div className={s.pointOne}></div>
      <p className={s.countTwo}>45.0349</p>
      <div className={s.pointTwo}></div>
    </aside>
  )
}

export default SideBar
