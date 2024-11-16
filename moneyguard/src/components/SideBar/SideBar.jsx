import React, { useState, useEffect } from 'react'
import s from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import Image from '../../assets/index'


const SideBar = () => {
  const [page, setPage] = useState('home')
  const [currencies, setCurrencies] = useState(() => {
    return JSON.parse(localStorage.getItem('currencies')) || {
      dollar: {
        rateBuy: '-',
        rateSell: '-'
      },
      euro: {
        rateBuy: '-',
        rateSell: '-'
      }
    }
  })

  useEffect(() => {
    fetch('https://api.monobank.ua/bank/currency')
      .then((data) => data.json())
      .then((res) => {
      
        if (res.errCode === 'TMR') {
          
          return
        }

        const dollar = res.find((currency) => currency.currencyCodeA === 840)
        const euro = res.find((currency) => currency.currencyCodeA === 978)

        const updatedCurrencies = {
          dollar: {
            rateBuy: dollar?.rateBuy || '-',
            rateSell: dollar?.rateSell || '-'
          },
          euro: {
            rateBuy: euro?.rateBuy || '-',
            rateSell: euro?.rateSell || '-'
          }
        }

        localStorage.setItem('currencies', JSON.stringify(updatedCurrencies))
        setCurrencies(updatedCurrencies)
      })
      .catch((error) => {
        
      })
  }, [])

  const formatRate = (rate) => (typeof rate === 'number' ? rate.toFixed(2) : '-')

  return (
    <aside className={s.sideBar}>
      <div className={s.links}>
        <div className={s.homeLink}>
          <NavLink
            onClick={() => setPage('home')}
            className={s.link}
            style={{ fontWeight: page === 'home' ? 'bold' : 'normal' }}
            to="home"
          >
            <div className="activeWrap">
              <img
                className={s.homeImage}
                src={page === 'home' ? Image.homeWhite : Image.home}
                alt="Home"
              />
            </div>
            Home
          </NavLink>
        </div>
        <div></div>
        <NavLink
          onClick={() => setPage('statistic')}
          className={s.link}
          style={{ fontWeight: page === 'statistic' ? 'bold' : 'normal' }}
          to="statistic"
        >
          <div className="activeWrap">
            <img
              className={s.statisticImage}
              src={page === 'statistic' ? Image.statisticWhite : Image.statistic}
              alt="Statistic"
            />
          </div>
          Statistic
        </NavLink>
      </div>
      {/* Currency Table */}
      <table className={s.table}>
        <thead>
          <tr className={s.trTH}>
            <th className={s.th}>Currency</th>
            <th className={s.th}>Purchase</th>
            <th className={s.th}>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.tr}>
            <td className={s.tdUSD}>USD</td>
            <td className={s.tdUSD}>{formatRate(currencies.dollar.rateBuy)}</td>
            <td className={s.tdUSD}>{formatRate(currencies.dollar.rateSell)}</td>
          </tr>
          <tr className={s.tr}>
            <td className={s.tdEUR}>EUR</td>
            <td className={s.tdEUR}>{formatRate(currencies.euro.rateBuy)}</td>
            <td className={s.tdEUR}>{formatRate(currencies.euro.rateSell)}</td>
          </tr>
        </tbody>
      </table>
      <div className={s.waves}>        
          <img className={s.orangeVector} src={Image.orangeVector} alt="Orange Vector" />
          <img src={Image.whiteVector} alt="White Vector" />
          <p className={s.countOne}>{formatRate(currencies.dollar.rateBuy)}</p>
          <div className={s.pointOne}></div>
          <p className={s.countTwo}>{formatRate(currencies.euro.rateBuy)}</p>
          <div className={s.pointTwo}></div>
      </div>      
    </aside>
  )
}

export default SideBar
