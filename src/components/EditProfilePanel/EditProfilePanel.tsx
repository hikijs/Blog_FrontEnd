import avatarIcon from 'src/assets/images/demo-avatar.jpeg'

export default function EditProfilePanel() {
  return (
    <div className='container'>
      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-10'></div>
      <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
        <div className='container p-14 w-1/3 shadow-2xl bg-white'>
          <div className='flex justify-center text-2xl font-semibold pb-5'>Profile Information</div>
          <div className='flex justify-start text-base font-medium py-2'>Photo</div>
          <div className='grid grid-cols-6 pb-4 gap-1'>
            <div className='col-span-1 flex items-center'>
              <img
                src={avatarIcon}
                alt='avatar-icon'
                className='w-16 h-16 rounded-full border border-lightBlue cursor-pointer'
              ></img>
            </div>
            <div className='col-span-5 flex flex-col'>
              <div className='flex justify-start py-1 gap-4'>
                <div className='text-base font-thin text-green hover:underline cursor-pointer'>Update</div>
                <div className='text-base font-thin text-red hover:underline cursor-pointer'>Remove</div>
              </div>
              <div className='flex justify-start py-1'>
                <div className='text-base font-thin'>
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-start text-base font-medium py-2'>Name *</div>
          <div className='flex justify-start border-b border-lightBlue'>
            <input
              type='text'
              name='search'
              className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
            />
          </div>
          <div className='flex justify-start text-base font-medium py-2'>Bio</div>
          <div className='flex justify-start border-b border-lightBlue'>
            <input
              type='text'
              name='search'
              className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
            />
          </div>
          <div className='flex justify-end gap-4 pt-10'>
            <button className='rounded-full my-2 py-1 px-4 border-white'>
              <div className='text-base font-medium cursor-pointer'>Cancel</div>
            </button>
            <button className='rounded-full my-2 py-1 px-4 bg-lightBlue'>
              <div className='text-base font-medium text-white cursor-pointer'>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
