import CategoriesBar from 'src/components/CategoriesBar'
import PostCard from 'src/components/PostCard'
import SuggestFollow from 'src/components/SuggestFollow'
import RecentlySaved from 'src/components/RecentlySaved'
import { Link } from 'react-router-dom'

interface Props {
  categoryId?: string
}
export default function PostList(props: Props) {
  const { categoryId } = props
  return (
    <div className='container max-w-7xl mx-auto'>
      <div className='grid grid-cols-3'>
        <div className='col-span-2 p-2'>
          <CategoriesBar categoryId={categoryId} />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className='col-span-1 p-5'>
          <div className='container'>
            <div className='text-2xl font-semibold pt-2 pb-6'>Who to Follow</div>
            <SuggestFollow />
            <SuggestFollow />
            <SuggestFollow />
            <Link
              to='/profile/following/suggestions'
              className='text-base font-base text-lightBlue py-4 hover:underline hover:text-lightBlue cursor-pointer'
            >
              See more suggestions (20)
            </Link>
            <div className='text-2xl font-semibold py-6'>Recently Saved</div>
            <RecentlySaved />
            <RecentlySaved />
            <RecentlySaved />
            <Link to='/profile/list'>
              <div className='text-base font-base text-lightBlue py-4 hover:underline hover:text-lightBlue cursor-pointer'>
                See all (20)
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
