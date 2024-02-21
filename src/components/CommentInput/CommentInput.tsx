import avatarIcon from 'src/assets/images/demo-avatar.jpeg'

export default function CommentInput() {
  return (
    <div className='border border-lightBlue p-5 w-full rounded-lg'>
      <div className='flex justify-start items-center gap-2 py-2'>
        <img
          src={avatarIcon}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
        <div className='text-base font-bold'>Kioku</div>
      </div>
      <div className='w-full h-16 flex justify-start items-start py-2'>
        <textarea
          name='search'
          className='text-black  py-2 flex-grow border-none outline-none bg-transparent'
          placeholder='What do you think ?'
        />
      </div>
      <div className='flex justify-end gap-4'>
        <button className='rounded-full my-2 py-1 px-4 border-white'>
          <div className='text-base font-medium cursor-pointer'>Cancel</div>
        </button>
        <button className='rounded-full my-2 py-1 px-4 bg-lightBlue'>
          <div className='text-base font-medium text-white cursor-pointer'>Submit</div>
        </button>
      </div>
    </div>
  )
}
