import avatarIcon from 'src/assets/images/demo-avatar.jpeg'

export default function FollowingCard() {
  return (
    <div className='py-2'>
      <div className='grid grid-cols-6 gap-2'>
        <div className='col-span-1'>
          <img
            src={avatarIcon}
            alt='avatar-icon'
            className='w-8 h-8 rounded-full border border-lightBlue cursor-pointer'
          ></img>
        </div>
        <div className='col-span-4 text-base font-thin cursor-pointer'>Vittorio Rivabella</div>
        <div className='col-span-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
