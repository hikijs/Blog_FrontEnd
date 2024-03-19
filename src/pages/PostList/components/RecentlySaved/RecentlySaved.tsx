import { Link } from 'react-router-dom'
import { demo_images } from 'src/utils/icons'
export default function RecentlySaved() {
  return (
    <div className='py-2'>
      <Link to='/profile/about'>
        <div className='flex justify-start gap-6 py-2'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 object-cover rounded-full border border-lightBlue'
          ></img>
          <div className='text-xl font-base pb-2 hover:underline hover:text-lightBlue'>Kioku</div>
        </div>
      </Link>
      <Link to='/read'>
        <div className='flex justify-start text-sm font-semibold py-1 cursor-pointer'>
          The GeoParquet Ecosystem at 1.0.0
        </div>
        <div className='flex justify-start text-xs font-light py-1 cursor-pointer'>Sep 19, 2023</div>
      </Link>
    </div>
  )
}
