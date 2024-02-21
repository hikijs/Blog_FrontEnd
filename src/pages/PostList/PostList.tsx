import CategoriesBar from 'src/components/CategoriesBar'
import PostCard from 'src/components/PostCard'
import SuggestFollow from 'src/components/SuggestFollow'
import RecentlySaved from 'src/components/RecentlySaved'
export default function PostList() {
  return (
    <div className='container max-w-7xl mx-auto'>
      <div className='grid grid-cols-3'>
        <div className='col-span-2 p-2'>
          <CategoriesBar />
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
            <div className='text-base font-base text-lightBlue py-4'>See more suggestions (20)</div>
            <div className='text-2xl font-semibold py-6'>Recently Saved</div>
            <RecentlySaved />
            <RecentlySaved />
            <RecentlySaved />
            <div className='text-base font-base text-lightBlue py-4'>See all (20)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
