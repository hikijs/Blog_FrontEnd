import FollowCard from './components/FollowCard'

export default function SuggestionFollow() {
  return (
    <div className='w-5/6'>
      <div className='text-3xl font-black py-5'>Who to follow</div>
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
      <FollowCard type={'Follow'} />
    </div>
  )
}
