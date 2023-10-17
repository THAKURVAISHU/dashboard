import React, { useState } from 'react'
// import Header from './Header'
import { RiPagesLine } from 'react-icons/ri';
import { FaDollarSign } from 'react-icons/fa';
import { BiWalletAlt } from 'react-icons/bi';
import { HiLockClosed } from 'react-icons/hi';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiFillCaretDown } from 'react-icons/ai';
import MyBarChart from './Chart/MyBarChart';
import PieChartBox from './Chart/PieChartBox';
import BasicTable from './BasicTable';


const Home = () => {
  
  return (
    <main className='main-container'>
     
      {/* card */}
      <div className='main-cards'>
        <div className='card'>
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold"><FaDollarSign className="custom-icon" />
              &nbsp; &nbsp; &nbsp; &nbsp; Earning</p>

            <h2 className="font-weight-bolder">
              $198k
            </h2>
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowUp />55%</span>
              this month
            </p>
          </div>
        </div>
        <div className='card'>
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold"><RiPagesLine className="custom-icon indo" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Orders</p>
            <h2 className="font-weight-bolder">
              $2.4k
            </h2>
            <p class="mb-0">
              <span className="text-red text-sm font-weight-bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowDown />55%</span>
              this month
            </p>
          </div>
        </div>
        <div className='card'>
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold"><BiWalletAlt className="custom-icon blue" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Balance</p>
            <h2 className="font-weight-bolder">
              $2.4k
            </h2>
            <p className="mb-0">
              <span className="text-red text-sm font-weight-bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowDown />55%</span>
              this month
            </p>
          </div>
        </div>
        <div className='card'>
          <div className="numbers">
            <p className="text-sm mb-0 text-uppercase font-weight-bold"><HiLockClosed className="custom-icon red" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total sales</p>
            <h2 className="font-weight-bolder">
              $53,000
            </h2>
            <p className="mb-0">
              <span className="text-success text-sm font-weight-bolder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowUp />55%</span>
              this week
            </p>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className='container'>
        <MyBarChart />
        <PieChartBox />
      </div>
      <BasicTable/>
    </main>
  )
}

export default Home