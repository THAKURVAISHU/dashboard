import React from 'react';
import { BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="menu-icons">
        Hello Shahrukh 👋
      </div>
      <div className="header-right">
        <div className="search-input">
          <div className="search-icon">
            <BsSearch />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
