import { Link } from 'react-router-dom'
import logo from 'src/assets/images/logo.png'
import Popover from '../Popover'

export default function Header() {
  return (
    <div className='bg-white pb-5 pt-2 text-gray-500 border-b'>
      <div className='container'>
        <div className='mt-4 grid grid-cols-5 lg:grid-cols-12 items-center gap-5 lg:gap-10'>
          <Link className='col-span-2' to='/'>
            <img src={logo} alt='logo'></img>
          </Link>
          <form className='col-span-7 lg:col-span-5 col-start-3'>
            <div className='bg-gray-100 rounded-full p-1 flex border-solid'>
              <button className='rounded-sm py-2 px-6 flex-shrink-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
              />
            </div>
          </form>
          <div className='col-span-10 lg:col-span-5 lg:col-start-10 grid grid-cols-5 justify-center items-center'>
            <div className='col-span-2 py-1 flex gap-2 hover:text-gray-900 cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
              <span>Write</span>
            </div>
            <div className='col-span-1 col-start-3 py-1 pl-2 hover:text-gray-900 cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                />
              </svg>
            </div>
            <Popover
              className='flex items-center py-1 hover:text-gray-900 cursor-pointer ml-6'
              renderPopover={
                <div className='drop-shadow-md'>
                  <Link
                    to='/'
                    className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                        />
                      </svg>
                      <span className='mx-1'>Profile</span>
                    </div>
                  </Link>
                  <Link
                    to='/'
                    className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                        />
                      </svg>
                      <span className='mx-1'>Library</span>
                    </div>
                  </Link>
                  <Link
                    to='/'
                    className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    <div className='flex justify-start pr-28 gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                        />
                      </svg>
                      <span className='mx-1'>Stories</span>
                    </div>
                  </Link>
                  <button className='block w-full bg-white py-6 px-4 text-left hover:bg-slate-100 hover:text-cyan-500 border-t'>
                    Log out
                  </button>
                </div>
              }
            >
              <div className='col-span-2 col-start-4 py-1 flex gap-2 hover:text-gray-900 cursor-pointer'>
                <div className='w-5 h-5 mr-2 flex-shrink-0'>
                  <img
                    src='https://miro.medium.com/v2/resize:fill:64:64/0*4VeCVLdrzYDI6Ki6'
                    alt='avatar'
                    className='w-full h-full object-cover rounded-full'
                  ></img>
                </div>
                <div>Kioku</div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
