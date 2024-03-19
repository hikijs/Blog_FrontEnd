import { demo_images } from 'src/utils/icons'

export default function UserCard() {
  return (
    <button className='w-full flex items-center px-4 hover:bg-slate-50'>
      <div className='basis-1/5 flex justify-center items-center'>
        <div className='p-1'>
          <img src={demo_images.avatarDemo} alt='avatar-icon' className='w-12 h-12 object-cover rounded-full '></img>
        </div>
      </div>
      <div className='basis-4/5 flex py-4 border-b border-slate-200'>
        <div className='basis-4/5 flex flex-col gap-1 '>
          <div className='text-lg font-normal flex justify-start'>Kioku</div>
          <div className='text-sm font-thin flex justify-start text-start'>
            You: hi bạn, hiện tại mình đang open cho các vị trí liên quan đến GIS nha
          </div>
        </div>
        <div className='basis-1/5 flex justify-end items-start '>
          <div className='text-sm font-thin'>11:43 AM</div>
        </div>
      </div>
    </button>
  )
}
