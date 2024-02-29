import PostCard from 'src/components/PostCard'
import { Link } from 'react-router-dom'

export default function Stories() {
  return (
    <div>
      <div className='text-5xl font-black py-5'>Kioku</div>
      <div className='flex justify-start pb-10 gap-10'>
        <Link to='/profile/about' className='text-base font-normal py-3 cursor-pointer'>
          About
        </Link>
        <Link to='/profile/story' className='text-base font-normal py-3 cursor-pointer border-b border-lightBlue'>
          Stories
        </Link>
        <Link to='/profile/list' className='text-base font-normal py-3 cursor-pointer'>
          Lists
        </Link>
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
