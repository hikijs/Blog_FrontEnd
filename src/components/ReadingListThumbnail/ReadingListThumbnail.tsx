import { demo_images, icon_svg } from 'src/utils/icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ReadingListThumbnail() {
  const [isSavedList, setIsSavedList] = useState(false)
  return (
    <div className='mb-10 flex flex-row bg-slate-50 rounded-lg shadow-md cursor-pointer'>
      <div className='basis-3/5 p-5'>
        <Link to='/profile/about' className='flex justify-start items-center py-3 gap-2'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 rounded-full border border-lightBlue'
          ></img>
          <div className='text-base font-thin hover:underline hover:text-lightBlue'>Anh Khoa Vu</div>
        </Link>
        <Link to='1' className='flex justify-start py-3'>
          <div className='text-2xl font-bold'>Reading List</div>
        </Link>
        <div className='flex justify-between items-center py-3'>
          <Link to='/profile/about' className='text-sm font-thin'>
            11 stories
          </Link>
          <div className='flex justify-start items-center gap-2'>
            {isSavedList ? (
              <button
                className='w-7 h-7 bg-highlight-reading-list-icon bg-cover'
                onClick={() => {
                  setIsSavedList(!isSavedList)
                }}
              ></button>
            ) : (
              <button
                className='w-7 h-7 bg-reading-list-icon hover:bg-highlight-reading-list-icon bg-cover'
                onClick={() => {
                  setIsSavedList(!isSavedList)
                }}
              ></button>
            )}
            <button>
              <icon_svg.ellipsisHorizontal className='w-7 h-7 font-bold' />
            </button>
          </div>
        </div>
      </div>
      <Link
        to='1'
        className='basis-1/5 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.thumbnailDemo})` }}
      ></Link>
      <Link
        to='1'
        className='basis-1/15 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.avatarDemo})` }}
      ></Link>
      <Link
        to='1'
        className='basis-1/20 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.thumbnailDemo})` }}
      ></Link>
    </div>
  )
}
