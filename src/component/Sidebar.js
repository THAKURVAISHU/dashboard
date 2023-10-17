import React from 'react'
import { TbHexagonNumber0, TbHexagonalPrism } from 'react-icons/tb';
import { VscDashboard } from 'react-icons/vsc';
import { MdLiveHelp } from 'react-icons/md';
import { LuBadgePercent } from 'react-icons/lu';
import { FaUserCircle, } from 'react-icons/fa';
import {  AiOutlineCaretDown } from 'react-icons/ai';
import { FaCaretRight } from 'react-icons/fa';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <TbHexagonNumber0 className='icon top' />&nbsp; Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>&nbsp; &nbsp;&nbsp;X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item active'>
                    <a href="">
                        <VscDashboard className='icon ' /> Dashboard<FaCaretRight className='arrow' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        < TbHexagonalPrism className='icon' />&nbsp; Products<FaCaretRight className='arrow' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <FaUserCircle className='icon' />&nbsp; Customers<FaCaretRight className='arrow' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <LuBadgePercent className='icon' />&nbsp;Income<FaCaretRight className='arrow' />
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <MdLiveHelp className='icon' />&nbsp; Help<FaCaretRight className='arrow' />
                    </a>
                </li>

            </ul>
            <div className="row">
                <div className="colu">
                    <img src="/image/pic2.png" alt="Your Image" />
                </div>
                <div className="colu">
                    <div className="text-container">
                        <h4>Evano</h4>
                        <p>Project Manager</p>
                    </div>
                    <div className="icon-container">
                        <AiOutlineCaretDown  style={{ color: '#9e9ea4' }}/>
                    </div>
                </div>
            </div>





        </aside>
    )
}

export default Sidebar