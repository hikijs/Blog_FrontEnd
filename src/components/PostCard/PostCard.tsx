import { demo_images } from 'src/utils/icons'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'

export default function PostCard() {
  const [isSavedPost, setIsSavedPost] = useState(false)
  return (
    <div className='w-5/6 py-5 justify-start border-b border-lightBlue'>
      <div className='flex justify-start items-center gap-2 py-1'>
        <Link to='/profile/about'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 rounded-full border border-lightBlue cursor-pointer'
          ></img>
        </Link>
        <Link to='/profile/about'>
          <div className='text-sm font-light cursor-pointer hover:underline hover:text-lightBlue'>Kioku</div>
        </Link>
        <div className='text-sm font-light'>-</div>
        <div className='text-xs font-extralight'>4 hours ago</div>
      </div>
      <Link to='/read'>
        <Fragment>
          <div className='flex justify-start py-1'>
            <div className='text-xl font-semibold'>Data Intelligence Platform</div>
          </div>
          <div className='grid grid-cols-4 gap-4 py-2'>
            <div className='col-span-3'>
              <div className='text-base font-light text-justify cursor-pointer'>
                From DWH to Data Platform to Data Intelligence Platform — DWH Unlock the power of data with DWH, your
                gateway to seamless information integration! In the dynamic landscape of today’s products,
              </div>
            </div>
            <div className='col-span-1 flex items-center'>
              <img src={demo_images.thumbnailDemo} alt='avatar-icon' className='w-auto h-full cursor-pointer'></img>
            </div>
          </div>
        </Fragment>
      </Link>
      <div className='grid grid-cols-4 gap-4 py-1'>
        <div className='col-span-3 flex justify-between'>
          <button className='rounded-full py-1 px-2 border border-lightBlue hover:bg-lightBlue'>
            <div className='text-base font-medium hover:text-white'>Data Source</div>
          </button>
          {isSavedPost ? (
            <button
              className='w-8 h-8 bg-highlight-reading-list-icon bg-cover cursor-pointer'
              onClick={() => {
                setIsSavedPost(false)
              }}
            ></button>
          ) : (
            <button
              className='w-8 h-8 bg-reading-list-icon bg-cover cursor-pointer'
              onClick={() => {
                setIsSavedPost(true)
              }}
            ></button>
          )}
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  )
}
