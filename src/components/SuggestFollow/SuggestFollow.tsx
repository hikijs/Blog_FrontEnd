import { demo_images } from 'src/utils/icons'
export default function SuggestFollow() {
  return (
    <div className='grid grid-cols-6 py-2 gap-2'>
      <div className='col-span-1 flex justify-start items-start'>
        <img
          src={demo_images.avatarDemo}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
      </div>
      <div className='col-span-3 flex flex-col justify-start'>
        <div className='text-xl font-base pb-2'>Kioku</div>
        <div className='text-sm font-light'>Geospatial Development, GIS & Cartography</div>
      </div>
      <div className='col-span-2 flex justify-end items-end'>
        <button className='rounded-full py-1 px-4 border border-lightBlue hover:bg-lightBlue'>
          <div className='text-base font-medium hover:text-white'>Follow</div>
        </button>
      </div>
    </div>
  )
}
