import { useState } from 'react'
import { icon_svg } from 'src/utils/icons'
export default function ChatInput() {
  const [isFullChat, setisFullChat] = useState(false)
  return (
    <div className='absolute bottom-0 left-0 right-0 bg-white'>
      <div className='p-4 flex gap-4 border-y border-slate-200'>
        <div className='basis-11/12'>
          <textarea
            name='search'
            className=' w-full text-black rounded-md p-4 flex-grow border-none outline-none bg-[#f4f3ec] text-base font-medium'
            style={{ height: isFullChat ? '500px' : '128px' }}
            placeholder='Write a message ...'
          />
        </div>
        <div className='basis-1/12'>
          <button
            className='p-2 hover:rounded-full hover:bg-slate-200'
            onClick={() => {
              setisFullChat(!isFullChat)
            }}
          >
            {isFullChat ? <icon_svg.chevronDown className='w-7 h-7' /> : <icon_svg.chevronUp className='w-7 h-7' />}
          </button>
        </div>
      </div>
      <div className='p-4 flex items-center justify-between'>
        <div className='flex justify-between gap-3'>
          <button>
            <icon_svg.photo className='w-7 h-7 hover:text-lightBlue' />
          </button>
          <button>
            <icon_svg.paperClip className='w-7 h-7 font-semibold hover:text-lightBlue' />
          </button>
          <button>
            <icon_svg.gif className='w-7 h-7 font-semibold hover:text-lightBlue' />
          </button>
          <button>
            <icon_svg.faceSmile className='w-7 h-7 font-semibold hover:text-lightBlue' />
          </button>
        </div>
        <div className='flex justify-between gap-3 pb-11'>
          <button className='py-1 px-3 bg-lightBlue text-white rounded-full'>Send</button>
          <button>
            <icon_svg.ellipsisHorizontal className='w-7 h-7 font-semibold hover:text-lightBlue' />
          </button>
        </div>
      </div>
    </div>
  )
}
