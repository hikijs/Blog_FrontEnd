import { Link } from 'react-router-dom'
import { useRef } from 'react'
import Popover from '../Popover'
import { demo_images, icon_images } from 'src/utils/icons'

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
            <img src={icon_images.logoIcon} alt='logo-icon' className='w-12 h-12'></img>
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
                  changeStyleIcon(searchIconRef, icon_images.selectedSearchIcon)
                }}
              >
                <img
                  ref={searchIconRef}
                  src={icon_images.searchIcon}
                  alt='logo'
                  className='w-6 h-6'
                  onMouseLeave={() => {
                    changeStyleIcon(searchIconRef, icon_images.searchIcon)
                  }}
                ></img>
              </button>
            </div>
          </form>
          <div className='col-span-3 col-start-10 grid grid-cols-6 items-center gap-5'>
            <Link
              to='/new-story'
              className='col-span-2 py-1 flex justify-end gap-3 hover:text-gray-900 cursor-pointer items-center'
            >
              <img src={icon_images.writeIcon} alt='write-icon' className='w-8 h-8'></img>
              <span>Write</span>
            </Link>
            <div className='col-span-2 py-1 flex justify-end gap-3 hover:text-gray-900 cursor-pointer items-center'>
              <img src={icon_images.alertIcon} alt='alert-icon' className='w-8 h-8'></img>
              <span>Alert</span>
            </div>
            <Popover
              className='col-span-2 flex items-center justify-end py-1 hover:text-gray-900 cursor-pointer'
              renderPopover={
                <div className='drop-shadow-md'>
                  <Link
                    to='/profile/about'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={icon_images.profileIcon} alt='profile-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Profile</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/list'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={icon_images.libraryIcon} alt='library-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Library</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/story'
                    className='block w-full bg-white pt-4 pb-6 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <img src={icon_images.storyIcon} alt='story-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Stories</span>
                    </div>
                  </Link>
                  <button className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500 border-t border-lightBlue'>
                    <div className='flex items-center gap-2'>
                      <img src={icon_images.logOutIcon} alt='logout-icon' className='w-5 h-5'></img>
                      <span className='mx-1'>Log out</span>
                    </div>
                  </button>
                </div>
              }
            >
              <div className='col-span-2 col-start-4 flex gap-2 hover:text-gray-900 cursor-pointer items-center'>
                <div className='w-9 h-9 flex-shrink-0'>
                  <img
                    src={demo_images.avatarDemo}
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
