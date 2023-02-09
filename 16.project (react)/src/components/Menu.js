import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul className='menu'>
            <li>
                <Link to="/">AnaSayfa</Link>
            </li>
            <li>
                <Link to="users">Kullanıcılar</Link>
            </li>
            <li>
                <Link to="contact">İletişim</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu