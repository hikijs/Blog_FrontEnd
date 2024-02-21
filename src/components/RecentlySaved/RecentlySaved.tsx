import avatarIcon from 'src/assets/images/demo-avatar.jpeg'

export default function RecentlySaved() {
  return (
    <div className='py-2'>
      <div className='flex justify-start gap-6 py-2'>
        <img
          src={avatarIcon}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
        <div className='text-xl font-base pb-2'>Kioku</div>
      </div>
      <div className='flex justify-start text-sm font-semibold py-1'>The GeoParquet Ecosystem at 1.0.0</div>
      <div className='flex justify-start text-xs font-light py-1'>Sep 19, 2023</div>
    </div>
  )
}
