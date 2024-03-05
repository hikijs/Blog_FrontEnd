import { demo_images, icon_svg } from 'src/utils/icons'
import { Link } from 'react-router-dom'
export default function FollowingCard() {
  return (
    <div className='py-2'>
      <div className='grid grid-cols-6 gap-2'>
        <Link to='/profile/about' className='col-span-1'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 rounded-full border border-lightBlue cursor-pointer'
          ></img>
        </Link>
        <Link to='/profile/about' className='col-span-4 text-base font-thin cursor-pointer'>
          Vittorio Rivabella
        </Link>
        <div className='col-span-1'>
          <icon_svg.ellipsisHorizontal className='w-6 h-6' />
        </div>
      </div>
    </div>
  )
}
