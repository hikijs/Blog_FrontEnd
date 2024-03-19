import { useRef } from 'react'
import { icon_svg } from 'src/utils/icons'
import { Link } from 'react-router-dom'
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
interface Props {
  categoryId?: string
}
function CategoriesBar(props: Props) {
  const { categoryId } = props
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
        {<icon_svg.chevronLeft className='w-6 h-6 text-lightBlue' />}
      </div>
      <div className='flex pb-2 border-b border-lightBlue justify-start overflow-hidden' ref={topicWrapper}>
        {topicList.map((element, index) => {
          if (element === categoryId) {
            return (
              <div className='flex-shrink-0 p-4 text-lightBlue' key={index}>
                {element}
              </div>
            )
          } else {
            return (
              <Link to={`/${element}`} className='flex-shrink-0 p-4 hover:text-lightBlue' key={index}>
                {element}
              </Link>
            )
          }
        })}
      </div>
      <div
        className=' flex justify-center hover:text-lightBlue'
        onClick={() => {
          handleScroll(25, 50, 10)
        }}
        aria-hidden='true'
      >
        {<icon_svg.chevronRight className='w-6 h-6 text-lightBlue' />}
      </div>
    </div>
  )
}

export default CategoriesBar
