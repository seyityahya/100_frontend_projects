import React from 'react'

function Header() {
  return (
    <header className=''>
        <h1>todos</h1>
        <form>
            <input
                className='new-todo'
                placeholder='Ne Yapmak İstiyorsun?'
                autoFocus
            />
        </form>
    </header>
  )
}

export default Header