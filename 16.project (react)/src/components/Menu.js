import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul className='menu'>
            <li>
                <Link to="/" className='header-link'>ANASAYFA</Link>
            </li>
            <li>
                <Link to="users" className='header-link'>KULLANICILAR</Link>
            </li>
            <li>
                <Link to="contact" className='header-link'>İLETİŞİM</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu