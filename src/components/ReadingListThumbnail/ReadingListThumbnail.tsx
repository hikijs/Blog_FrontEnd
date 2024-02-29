import { demo_images, icon_svg } from 'src/utils/icons'
import { Link } from 'react-router-dom'

export default function ReadingListThumbnail() {
  return (
    <div className='mb-10 flex flex-row bg-slate-50 rounded-lg shadow-md cursor-pointer'>
      <div className='basis-3/5 p-5'>
        <div className='flex justify-start items-center py-3 gap-2'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 rounded-full border border-lightBlue'
          ></img>
          <Link to='/profile/home' className='text-base font-thin hover:underline hover:text-lightBlue'>
            Anh Khoa Vu
          </Link>
        </div>
        <div className='flex justify-start py-3 gap-2'>
          <div className='text-2xl font-bold'>Reading List</div>
        </div>
        <div className='flex justify-between py-3'>
          <div className='flex justify-start items-center gap-4'>
            <div className='text-sm font-thin'>11 stories</div>
            <icon_svg.bookOpen className='w-6 h-6' />
          </div>
          <icon_svg.ellipsisHorizontal className='w-7 h-7 font-bold' />
        </div>
      </div>
      <div
        className='basis-1/5 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.thumbnailDemo})` }}
      ></div>
      <div
        className='basis-1/15 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.avatarDemo})` }}
      ></div>
      <div
        className='basis-1/20 ml-1 bg-cover bg-center'
        style={{ backgroundImage: `url(${demo_images.thumbnailDemo})` }}
      ></div>
    </div>
  )
}
