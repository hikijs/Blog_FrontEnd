import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import FollowingCard from 'src/components/FollowingCard'
import EditProfilePanel from 'src/components/EditProfilePanel'
import { Link } from 'react-router-dom'
import { demo_images } from 'src/utils/icons'
import { useState } from 'react'

interface Props {
  children?: React.ReactNode
}
export default function ProfileLayout({ children }: Props) {
  const [showEditPanel, setShowEditPanel] = useState(false)

  return (
    <div>
      <Header />
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-3'>
          <div className='col-span-2 p-2'>{children}</div>
          <div className='col-span-1 p-5'>
            <div className='container'>
              <div className='flex flex-col justify-start'>
                <img
                  src={demo_images.avatarDemo}
                  alt='avatar-icon'
                  className='w-28 h-28 rounded-full border border-lightBlue cursor-pointer'
                ></img>
                <div className='text-2xl font-bold pt-5'>Anh Khoa Vu</div>
                <Link
                  to='/profile/follower'
                  className='text-1xl font-thin pt-3 hover:underline hover:text-lightBlue cursor-pointer'
                >
                  3 follower
                </Link>
              </div>
              <button
                className='text-1xl font-thin my-10 hover:underline text-lightBlue cursor-pointer'
                onClick={() => setShowEditPanel(true)}
              >
                Edit profile
              </button>
              <div className='text-2xl font-semibold py-2'>Following</div>
              <FollowingCard />
              <FollowingCard />
              <FollowingCard />
              <FollowingCard />
              <Link
                to='/profile/following'
                className='text-base font-base text-lightBlue py-4 hover:underline hover:text-lightBlue cursor-pointer'
              >
                See all (20)
              </Link>
            </div>
          </div>
          {showEditPanel && <EditProfilePanel setShowEditPanel={setShowEditPanel} />}
        </div>
      </div>
      <Footer />
    </div>
  )
}
