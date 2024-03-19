import React from 'react'
import { Link } from 'react-router-dom'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-start'>
          <Link to='/'>
            <div className='w-12 h-12 bg-logo-icon bg-cover'></div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
