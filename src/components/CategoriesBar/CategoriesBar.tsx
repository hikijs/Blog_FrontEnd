import { useRef } from 'react'

const topicList = [
  'GIS',
  'Relationship',
  'Self',
  'Mental Health',
  'Future',
  'World',
  'Family',
  'Software Engineer',
  'Space',
  'Climate Change',
  'Data Science'
]

function CategoriesBar() {
  const topicWrapper = useRef(document.createElement('div'))

  const handleScroll = (speed: number, distance: number, step: number) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      topicWrapper.current.scrollLeft += step
      scrollAmount += Math.abs(step)
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
      }
    }, speed)
  }

  return (
    <div className='w-5/6 flex gap-3 items-center justify-center cursor-pointer'>
      <div
        className='flex justify-center hover:text-lightBlue'
        onClick={() => {
          handleScroll(25, 50, -10)
        }}
        aria-hidden='true'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
        </svg>
      </div>
      <div className='flex pb-2 border-b border-lightBlue justify-start overflow-hidden' ref={topicWrapper}>
        {topicList.map((element, index) => {
          return (
            <div className='flex-shrink-0 p-4 hover:text-lightBlue' key={index}>
              {element}
            </div>
          )
        })}
      </div>
      <div
        className=' flex justify-center hover:text-lightBlue'
        onClick={() => {
          handleScroll(25, 50, 10)
        }}
        aria-hidden='true'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
        </svg>
      </div>
    </div>
  )
}

export default CategoriesBar
