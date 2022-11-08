import React from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './dashboard.css';

const Dashboard = ({ children }) => {
  return (
    <div className='dashboard'>
      <Header />
      <div className='main'>
        <Sidebar />
        <div className='main--content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboard