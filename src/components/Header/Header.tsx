import { Link } from 'react-router-dom'
import Popover from '../Popover'
import { demo_images, icon_images, icon_svg } from 'src/utils/icons'

export default function Header() {
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
              <button className='rounded-sm py-1 px-6 flex-shrink-0'>
                <icon_svg.search className='w-6 h-6 hover:text-lightBlue' />
              </button>
            </div>
          </form>
          <div className='col-span-3 col-start-10 grid grid-cols-6 items-center gap-5'>
            <Link
              to='/new-story'
              className='col-span-2 py-1 flex justify-end gap-2 hover:text-gray-900 cursor-pointer items-center hover:text-lightBlue'
            >
              <icon_svg.write className='w-8 h-8' />
              <span>Write</span>
            </Link>
            <div className='col-span-2 py-1 flex justify-end gap-2 hover:text-gray-900 cursor-pointer items-center hover:text-lightBlue'>
              <icon_svg.bellAlert className='w-8 h-8 ' />
              <span>Alert</span>
            </div>
            <Popover
              className='col-span-2 flex items-center justify-end py-1 hover:text-gray-900 cursor-pointer '
              renderPopover={
                <div className='drop-shadow-md'>
                  <Link
                    to='/profile/about'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <icon_svg.user className='w-5 h-5' />
                      <span className='mx-1'>Profile</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/list'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <icon_svg.bookmark className='w-5 h-5' />
                      <span className='mx-1'>Library</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/story'
                    className='block w-full bg-white pt-4 pb-6 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <icon_svg.bookOpen className='w-5 h-5' />
                      <span className='mx-1'>Stories</span>
                    </div>
                  </Link>
                  <button className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-cyan-500 border-t border-lightBlue'>
                    <div className='flex items-center'>
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
