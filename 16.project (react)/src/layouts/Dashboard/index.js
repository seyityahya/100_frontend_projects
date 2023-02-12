import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

function DashboardLayout() {
  return (
    <div>
        <Menu/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout