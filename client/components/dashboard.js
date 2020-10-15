import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'


const Dashboard = () => {
    return (
      <div> 
        <Head title="Hello" />
        <div className="flex items-center justify-center h-screen">
          <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"> 
            <div id="title">Dashboard</div>
            <Link to="/dashboard/profile/e75ae02a-45e3-4bbb-b660-b0ea81b02dcd">Go To Profile</Link>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div> 
      </div>
    )
  }

  Dashboard.propTypes = {}

export default Dashboard