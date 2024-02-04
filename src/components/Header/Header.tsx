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
          <form className='col-span-3 lg:col-span-5 col-start-3'>
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
          <div className='col-span-5 lg:col-start-10 flex justify-center lg:justify-end'>
            <Popover
              className='flex items-center px-5 py-1 hover:text-gray-900 cursor-pointer'
              renderPopover={
                <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                  <div className='flex flex-col py-2 pr-28 pl-3'>
                    <button className='py-2 px-3 text-left hover:text-orange' onClick={() => {}}>
                      VN
                    </button>
                    <button className='mt-2 py-2 px-3 text-left hover:text-orange' onClick={() => {}}>
                      EN
                    </button>
                  </div>
                </div>
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span className='mx-1'>VN</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            </Popover>
            <div className='flex items-center py-1 hover:text-gray-900 cursor-pointer'></div>
            <div className='flex items-center py-1 hover:text-gray-900 cursor-pointer'>
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
            <div className='flex items-center py-1 hover:text-gray-900 cursor-pointer ml-6'>
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
            <div className='flex items-center py-1 hover:text-gray-900 cursor-pointer ml-6'>
              <div className='w-5 h-5 mr-2 flex-shrink-0'>
                <img
                  src='https://miro.medium.com/v2/resize:fill:64:64/0*4VeCVLdrzYDI6Ki6'
                  alt='avatar'
                  className='w-full h-full object-cover rounded-full'
                ></img>
              </div>
              <div>Kioku</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
