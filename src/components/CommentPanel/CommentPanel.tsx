import CommentInput from '../CommentInput'
import CommentShow from '../CommentShow'

export default function CommentPanel() {
  return (
    <div className='absolute right-0 top-0 h-full w-1/4 bg-white drop-shadow-xl overflow-auto'>
      <div className='container'>
        <div className='border-b border-lightBlue mx-5 pt-2 pb-10'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold my-5'>Comment (10)</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-8 h-8 cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </div>
          <CommentInput />
        </div>
        <div className='border-b border-lightBlue mx-5 pt-2 pb-5'>
          <CommentShow />
          <CommentShow />
          <CommentShow />
        </div>
      </div>
    </div>
  )
}
