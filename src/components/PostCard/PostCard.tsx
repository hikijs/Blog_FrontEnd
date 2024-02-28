import { demo_images, icon_images } from 'src/utils/icons'

export default function PostCard() {
  return (
    <div className='w-5/6 py-5 justify-start border-b border-lightBlue'>
      <div className='flex justify-start items-center gap-2 py-1'>
        <img
          src={demo_images.avatarDemo}
          alt='avatar-icon'
          className='w-8 h-8 rounded-full border border-lightBlue cursor-pointer'
        ></img>
        <div className='text-sm font-light cursor-pointer hover:underline hover:text-lightBlue'>Kioku</div>
        <div className='text-sm font-light'>-</div>
        <div className='text-xs font-extralight'>4 hours ago</div>
      </div>
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
      <div className='grid grid-cols-4 gap-4 py-1'>
        <div className='col-span-3 flex justify-between'>
          <button className='rounded-full py-1 px-2 border border-lightBlue hover:bg-lightBlue'>
            <div className='text-base font-medium hover:text-white'>Data Source</div>
          </button>
          <img src={icon_images.likeIcon} alt='avatar-icon' className='w-7 h-7 cursor-pointer'></img>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  )
}
