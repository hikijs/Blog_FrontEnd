import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Popover from '../Popover'
import logoIcon from 'src/assets/images/logo.png'
import storyIcon from 'src/assets/images/story-icon.png'
import writeIcon from 'src/assets/images/write-icon.png'
import alertIcon from 'src/assets/images/alert-icon.png'
import logoutIcon from 'src/assets/images/logout-icon.png'
import searchIcon from 'src/assets/images/search-icon.png'
import selectedSearchIcon from 'src/assets/images/selected-search-icon.png'
import avatarIcon from 'src/assets/images/demo-avatar.jpeg'
import profileIcon from 'src/assets/images/profile-icon.png'
import libraryIcon from 'src/assets/images/library-icon.png'

export default function Header() {
  const searchIconRef = useRef<HTMLImageElement>(null)

  const changeStyleIcon = (iconRef: React.RefObject<HTMLImageElement>, icon: string) => {
    if (iconRef.current) {
      iconRef.current.src = icon
    }
  }

  return (
    <div className='bg-white py-5 text-gray-500 border-b border-lightBlue'>
      <div className='container'>
        <div className='grid grid-cols-12 items-center gap-10'>
          <Link className='col-span-1' to='/'>
            <img src={logoIcon} alt='logo-icon' className='w-12 h-12'></img>
          </Link>
          <form className='col-span-5 col-start-2'>
            <div className='border-2 border-lightBlue rounded-full p-1 flex'>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='Search ...'
              />
              <button
                className='rounded-sm py-1 px-6 flex-shrink-0'
                onClick={() => {
                  changeStyleIcon(searchIconRef, selectedSearchIcon)
                }}
              >
                <img
                  ref={searchIconRef}
                  src={searchIcon}
                  alt='logo'
                  className='w-6 h-6'
                  onMouseLeave={() => {
                    changeStyleIcon(searchIconRef, searchIcon)
                  }}
                ></img>
              </button>
            </div>
          </form>
          <div className='col-span-3 col-start-10 grid grid-cols-6 justify-center items-center gap-5'>
            <div className='col-span-2 py-1 flex gap-3 hover:text-gray-900 cursor-pointer items-center'>
              <img src={writeIcon} alt='write-icon' className='w-8 h-8'></img>
              <span>Write</span>
            </div>
            <div className='col-span-2 py-1 flex gap-3 hover:text-gray-900 cursor-pointer items-center'>
              <img src={alertIcon} alt='alert-icon' className='w-8 h-8'></img>
              <span>Alert</span>
            </div>
            <Popover
              className='flex items-center py-1 hover:text-gray-900 cursor-pointer'
              renderPopover={
                <div className='drop-shadow-md'>
                  <Link
                    to='/'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={profileIcon} alt='profile-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Profile</span>
                    </div>
                  </Link>
                  <Link
                    to='/'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={libraryIcon} alt='library-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Library</span>
                    </div>
                  </Link>
                  <Link
                    to='/'
                    className='block w-full bg-white pt-4 pb-6 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={storyIcon} alt='story-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Stories</span>
                    </div>
                  </Link>
                  <button className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500 border-t border-lightBlue'>
                    <div className='flex items-center gap-2'>
                      <img src={logoutIcon} alt='logout-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Log out</span>
                    </div>
                  </button>
                </div>
              }
            >
              <div className='col-span-2 col-start-4 flex gap-2 hover:text-gray-900 cursor-pointer items-center'>
                <div className='w-8 h-8 flex-shrink-0'>
                  <img
                    src={avatarIcon}
                    alt='avatar-icon'
                    className='w-full h-full object-cover rounded-full border border-lightBlue'
                  ></img>
                </div>
                <div>Me</div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
