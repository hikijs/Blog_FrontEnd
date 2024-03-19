import { demo_images } from 'src/utils/icons'
import { Link } from 'react-router-dom'
export default function SuggestFollow() {
  return (
    <div className='grid grid-cols-6 py-2 gap-2'>
      <div className='col-span-1 flex justify-start items-start cursor-pointer'>
        <Link to='/profile/about'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-10 h-10 object-cover rounded-full border border-lightBlue'
          ></img>
        </Link>
      </div>
      <div className='col-span-3 flex flex-col justify-start cursor-pointer'>
        <Link to='/profile/about'>
          <div className='text-xl font-base pb-2 hover:underline hover:text-lightBlue'>Kioku</div>
          <div className='text-sm font-light'>Geospatial Development, GIS & Cartography</div>
        </Link>
      </div>
      <div className='col-span-2 flex justify-end items-end'>
        <button className='rounded-full py-1 px-4 border border-lightBlue hover:bg-lightBlue'>
          <div className='text-base font-medium hover:text-white'>Follow</div>
        </button>
      </div>
    </div>
  )
}
