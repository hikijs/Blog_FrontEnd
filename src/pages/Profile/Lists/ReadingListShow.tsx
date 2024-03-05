import { useState } from 'react'
import PostCard from 'src/pages/PostList/components/PostCard'
import { Link } from 'react-router-dom'
import { demo_images, icon_svg } from 'src/utils/icons'

export default function ReadingListShow() {
  const [isUpdateNote, setIsUpdateNote] = useState(false)
  const [isLikedList, setIsLikedList] = useState(false)
  return (
    <div>
      <div className='py-5 flex gap-4 justify-start items-center'>
        <Link to='/profile/about'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-14 h-14 rounded-full border border-lightBlue cursor-pointer'
          ></img>
        </Link>
        <Link to='/profile/about'>
          <div className='flex flex-col gap-2'>
            <div className='text-lg font-medium'>Anh Khoa Vu</div>
            <div className='flex gap-2'>
              <div className='text-xs font-thin'>Dec 9, 2023</div>
              <div className='text-xs font-thin'>-</div>
              <div className='text-xs font-thin'>2 stories</div>
            </div>
          </div>
        </Link>
      </div>
      <div className='text-3xl font-black py-5'>Reading List</div>
      <div className='w-5/6 my-3 p-4 flex justify-between border-y border-lightBlue'>
        <div className='flex justify-start gap-6'>
          <button
            onClick={() => {
              setIsLikedList(!isLikedList)
            }}
          >
            {isLikedList ? (
              <div className='w-7 h-7 bg-highlight-like-icon bg-cover'></div>
            ) : (
              <div className='w-7 h-7 bg-like-icon hover:bg-highlight-like-icon bg-cover'></div>
            )}
          </button>
          <button>
            <div className='w-7 h-7 bg-comment-icon hover:bg-highlight-comment-icon bg-cover'></div>
          </button>
        </div>
        <button>
          <icon_svg.ellipsisHorizontal className='w-7 h-7 font-bold' />
        </button>
      </div>
      <div className='w-5/6 mt-8 mb-4 flex justify-between border-l border-lightBlue'>
        <input
          type='text'
          name='search'
          className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
          placeholder={isUpdateNote ? 'Write a brief description' : 'Add a note ...'}
          onClick={() => setIsUpdateNote(true)}
        />
        {isUpdateNote && (
          <div className='flex gap-4'>
            <button className='text-sm' onClick={() => setIsUpdateNote(false)}>
              Cancel
            </button>
            <button className='text-sm text-lightBlue' onClick={() => setIsUpdateNote(false)}>
              Done
            </button>
          </div>
        )}
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
