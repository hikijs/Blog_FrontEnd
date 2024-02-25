import PostCardReview from '../PostCardReview'
import CategoriesPanel from '../CategoriesPanel'

export default function PublishPost() {
  return (
    <div className='container'>
      <div className='absolute top-0 left-0 h-full w-full bg-white'></div>
      <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center'>
        <div className='container w-5/6 border bg-white border-lightBlue shadow-lg p-14 grid grid-cols-2 gap-14'>
          <div className='col-span-1'>
            <div className='flex justify-start my-4'>
              <div className='text-xl font-semibold'>Story Review</div>
            </div>
            <div className='flex justify-start border-b border-lightBlue my-5 py-2'>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent text-sm font-thin'
                placeholder='Write a review title ...'
              />
            </div>
            <div className='w-full border border-lightBlue flex justify-start items-start my-10 py-2'>
              <textarea
                name='search'
                className='h-32 text-black px-3 py-2 flex-grow border-none outline-none bg-transparent text-sm font-thin'
                placeholder='Write a review story ...'
              />
            </div>
            <div className='w-full border border-lightBlue shadow-lg mt-10 p-4'>
              <PostCardReview />
            </div>
          </div>
          <div className='col-span-1'>
            <div className='flex justify-start gap-2 my-4'>
              <div className='text-base font-thin'>Publishing to</div>
              <div className='text-base font-semibold'>Kioku</div>
            </div>
            <div className='flex justify-between items-center py-2 my-5'>
              <div className='text-base font-thin'>Change your thumbnail: </div>
              <div className='text-base font-semibold'>
                <button className='px-4 py-2 bg-blue text-white text-base font-medium rounded-full'>Choose File</button>
              </div>
            </div>
            <div className='w-full border border-lightBlue shadow-lg my-10 p-3'>
              <CategoriesPanel />
            </div>
            <div className='flex justify-start my-5'>
              <button className='px-4 py-2 bg-blue text-white text-base font-medium rounded-full'>Publish now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
