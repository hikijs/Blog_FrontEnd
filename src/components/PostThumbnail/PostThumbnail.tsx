import { demo_images } from 'src/utils/icons'
export default function PostThumbnail() {
  return (
    <div className='relative h-96'>
      <div
        className='absolute top-0 left-0 h-full w-full bg-cover bg-center flex items-center'
        style={{ backgroundImage: `url(${demo_images.thumbnailDemo})` }}
      ></div>
      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-40'></div>
      <div className='absolute top-0 left-0 h-full w-full flex items-center'>
        <div className='container flex flex-col items-center'>
          <button className='rounded-full my-4 py-2 px-4 bg-black border-2 border-white'>
            <div className='text-base font-medium text-white cursor-pointer hover:text-lightBlue'>Data Source</div>
          </button>
          <div className='my-4 text-3xl font-extrabold text-white cursor-pointer'>
            Reinforcement Learning 101: Building a RL Agent
          </div>
          <div className='flex justify-around items-center gap-2 cursor-pointer'>
            <img
              src={demo_images.avatarDemo}
              alt='avatar-icon'
              className='w-8 h-8 rounded-full border border-lightBlue cursor-pointer'
            ></img>
            <div className='text-xl font-thin text-white hover:text-lightBlue hover:underline'>Kioku</div>
            <div className='text-xl font-thin text-white'>/</div>
            <div className='text-xl font-thin text-white'>January 11 2024</div>
            <div className='text-xl font-thin text-white'>/</div>
            <div className='text-xl font-thin text-white'>Data Source</div>
          </div>
        </div>
      </div>
    </div>
  )
}
