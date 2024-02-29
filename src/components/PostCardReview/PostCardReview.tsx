import { demo_images, icon_svg } from 'src/utils/icons'
export default function PostCardReview() {
  return (
    <div className='w-full py-5 mb-2 justify-start border-b border-lightBlue'>
      <div className='flex justify-start items-center gap-2 py-1'>
        <img
          src={demo_images.avatarDemo}
          alt='avatar-icon'
          className='w-6 h-6 rounded-full border border-lightBlue cursor-pointer'
        ></img>
        <div className='text-xs font-light cursor-pointer hover:underline hover:text-lightBlue'>Kioku</div>
        <div className='text-xs font-light'>-</div>
        <div className='text-[10px] font-extralight'>4 hours ago</div>
      </div>
      <div className='flex justify-start py-1'>
        <div className='text-base font-semibold'>Data Intelligence Platform</div>
      </div>
      <div className='grid grid-cols-4 gap-4 py-2'>
        <div className='col-span-3'>
          <div className='text-[11px] font-light text-justify cursor-pointer'>
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
            <div className='text-sm font-medium hover:text-white'>Data Source</div>
          </button>
          <icon_svg.bookmark className='w-5 h-5 cursor-pointer hover:text-lightBlue' />
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  )
}
