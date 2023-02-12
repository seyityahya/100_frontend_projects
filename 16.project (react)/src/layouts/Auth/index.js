import "./style.css"
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className='auth-container'>
        <div className="auth-menu">
          <Link to="/auth">Giriş Yap</Link>
          <Link to="/auth/register">Kayıt Ol</Link>
        </div>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default AuthLayout