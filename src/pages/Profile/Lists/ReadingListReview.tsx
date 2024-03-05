import { Link } from 'react-router-dom'
import ReadingListCard from 'src/pages/Profile/Lists/components/ReadingListCard'

export default function ReadingListReview() {
  return (
    <div>
      <div className='text-5xl font-black py-5'>Kioku</div>
      <div className='flex justify-start pb-10 gap-10'>
        <Link to='/profile/about' className='text-base font-normal py-3 cursor-pointer'>
          About
        </Link>
        <Link to='/profile/story' className='text-base font-normal py-3 cursor-pointer'>
          Stories
        </Link>
        <Link to='/profile/list' className='text-base font-normal py-3 cursor-pointer border-b border-lightBlue'>
          Lists
        </Link>
      </div>
      <ReadingListCard />
      <ReadingListCard />
      <ReadingListCard />
    </div>
  )
}
