import React from 'react'
import ContentFooter from './ContentFooter'

function Content() {
  return (
    <>
    <section className='main'>
        <input className='toggle-all' type="checkbox" />
        <label htmlFor="toggle-all">
            Mark all as complete
        </label>

        <ul className='todo-list'>
            <li className='completed'>
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label>Learn Javascript</label>
                    <button className='destroy'></button>
                </div>
            </li>
            <li>
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label>Learn React</label>
                    <button className='destroy'></button>
                </div>
            </li>
            <li>
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label>Have a life!</label>
                    <button className='destroy'></button>
                </div>
            </li>
        </ul>
    </section>
    <ContentFooter/>
    </>
  )
}

export default Content