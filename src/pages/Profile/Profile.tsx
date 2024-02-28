import PostCard from 'src/components/PostCard'
import FollowingCard from 'src/components/FollowingCard'
import EditProfilePanel from 'src/components/EditProfilePanel'
import { demo_images } from 'src/utils/icons'

export default function Profile() {
  return (
    <div>
      <div className='relative container max-w-7xl mx-auto'>
        <div className='grid grid-cols-3'>
          <div className='col-span-2 p-2'>
            <div className='text-5xl font-black py-5'>Kioku</div>
            <div className='flex justify-start pb-10 gap-10'>
              <div className='text-base font-normal py-3 cursor-pointer'>Home</div>
              <div className='text-base font-normal py-3 cursor-pointer border-b border-lightBlue'>Saved</div>
            </div>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className='col-span-1 p-5'>
            <div className='container'>
              <div className='flex flex-col justify-start'>
                <img
                  src={demo_images.avatarDemo}
                  alt='avatar-icon'
                  className='w-28 h-28 rounded-full border border-lightBlue cursor-pointer'
                ></img>
                <div className='text-2xl font-bold pt-5'>Anh Khoa Vu</div>
                <div className='text-1xl font-thin pt-3 hover:underline hover:text-lightBlue cursor-pointer'>
                  3 follower
                </div>
              </div>
              <div className='text-1xl font-thin my-10 hover:underline text-lightBlue cursor-pointer'>Edit profile</div>
              <div className='text-2xl font-semibold py-2'>Following</div>
              <FollowingCard />
              <FollowingCard />
              <FollowingCard />
              <FollowingCard />
              <div className='text-base font-base text-lightBlue py-4'>See all (20)</div>
            </div>
          </div>
        </div>
      </div>
      <EditProfilePanel />
    </div>
  )
}
