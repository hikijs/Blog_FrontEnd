import { useState } from 'react'
import { icon_svg } from 'src/utils/icons'
import UserCard from './components/UserCard'
import ChatInput from './components/ChatInput'
export default function Messaging() {
  const [isSelectedFocus, setIsSelectedFocus] = useState(true)
  return (
    <div className='container max-w-7xl py-10'>
      <div className='w-full h-[700px] mx-auto shadow-lg border border-lightBlue shadow-lightBlue bg-white rounded-lg grid grid-cols-3'>
        <div className='col-span-1 border-r border-lightBlue overflow-y-scroll'>
          <div className='sticky top-0 bg-white'>
            <div className='flex h-[75px] justify-between items-center px-4 border-b border-lightBlue shadow-md '>
              <div className='flex text-xl font-bold'>Messaging</div>
              <div className='flex gap-6'>
                <icon_svg.ellipsisHorizontal className='w-7 h-7' />
                <icon_svg.pencilSquare className='w-7 h-7' />
              </div>
            </div>
            <form className='w-full py-4 px-3'>
              <div className='border-2 border-lightBlue rounded-lg py-1 px-2 flex'>
                <button className='rounded-sm py-1 px-1 flex-shrink-0'>
                  <div className='w-6 h-6 bg-search-icon hover:bg-highlight-search-icon bg-cover'></div>
                </button>
                <input
                  type='text'
                  name='search'
                  className='text-black px-1 py-1 flex-grow border-none outline-none bg-transparent'
                  placeholder='Search Message'
                />
              </div>
            </form>
            {isSelectedFocus ? (
              <div className='grid grid-cols-2'>
                <button className='flex items-center justify-center text-lg font-medium border-b border-lightBlue text-lightBlue hover:bg-slate-50 pb-2'>
                  Focused
                </button>
                <button
                  className='flex items-center justify-center text-base font-medium hover:text-lightBlue pb-2 hover:bg-slate-100'
                  onClick={() => {
                    setIsSelectedFocus(!isSelectedFocus)
                  }}
                >
                  Other
                </button>
              </div>
            ) : (
              <div className='grid grid-cols-2'>
                <button
                  className='flex items-center justify-center text-base font-medium hover:text-lightBlue hover:bg-slate-50 pb-2'
                  onClick={() => {
                    setIsSelectedFocus(!isSelectedFocus)
                  }}
                >
                  Focused
                </button>
                <button className='flex items-center justify-center text-lg font-medium border-b border-lightBlue text-lightBlue pb-2 hover:bg-slate-100'>
                  Other
                </button>
              </div>
            )}
          </div>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <div className='col-span-2 relative'>
          <div className='flex h-[60px] justify-between items-center px-4 border-b border-lightBlue shadow-md'>
            <div className='flex flex-col gap-1'>
              <div className='text-base font-semibold'>Kioku</div>
              <div className='text-sm font-normal'>Active now</div>
            </div>
            <div className='flex gap-6'>
              <icon_svg.ellipsisHorizontal className='w-7 h-7' />
              <icon_svg.videoCamera className='w-7 h-7' />
              <icon_svg.star className='w-7 h-7' />
            </div>
          </div>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
