import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'src/assets/images/logo.png'

export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-start'>
          <Link to='/'>
            <img src={logo} alt='logo'></img>
          </Link>
        </nav>
      </div>
    </header>
  )
}
