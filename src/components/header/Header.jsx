import React, { useState, useContext } from 'react';
import './header.css'
import { FaAlignJustify } from 'react-icons/fa';
import { SidebarContext } from '../../context/SidebarContext';

const Header = () => {
  const [sidebarContext, setSidebarContext] = useContext(SidebarContext);
  return (
    <div className='header'>
      <div className='header--title'>
        Online Shop
      </div>
      <div className='header--content' onClick={() => setSidebarContext(!sidebarContext)}>
        <FaAlignJustify />
      </div>
    </div>
  )
}

export default Header;