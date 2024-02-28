import React from 'react'
import { Link } from 'react-router-dom'
import { icon_images } from 'src/utils/icons'
export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-start'>
          <Link to='/'>
            <img src={icon_images.logoIcon} alt='logo' className='w-12 h-12'></img>
          </Link>
        </nav>
      </div>
    </header>
  )
}
