import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { demo_images } from 'src/utils/icons'

interface Props {
  type: string
}

export default function FollowCard(props: Props) {
  const { type } = props
  const [followStatus, setFollowStatus] = useState(type)

  useEffect(() => {
    setFollowStatus(type)
  }, [type])

  return (
    <div className='flex flex-row py-4 gap-6'>
      <div className='flex justify-start items-start cursor-pointer'>
        <Link to='/profile/about'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-10 h-10 object-cover rounded-full border border-lightBlue'
          ></img>
        </Link>
      </div>
      <div className='basis-9/12 flex flex-col justify-start cursor-pointer'>
        <Link to='/profile/about'>
          <div className='text-xl font-base pb-2 hover:underline hover:text-lightBlue'>Kioku</div>
          <div className='text-sm font-light'>
            Code and Ideas for 3D Data Science & Research | Director of Innovation | Award-winning Senior Researcher &
            Engineer | Online course at: https://learngeodata.eu
          </div>
        </Link>
      </div>
      <div className='basis-1/15 flex justify-end items-start'>
        {followStatus === 'Following' ? (
          <button
            className='rounded-full py-1 px-6 border border-lightBlue '
            onClick={() => {
              setFollowStatus('Follow')
            }}
          >
            <div className='text-base font-medium text-lightBlue'>{followStatus}</div>
          </button>
        ) : (
          <button
            className='rounded-full py-1 px-4 bg-blue'
            onClick={() => {
              setFollowStatus('Following')
            }}
          >
            <div className='text-base font-medium text-white'>{followStatus}</div>
          </button>
        )}
      </div>
    </div>
  )
}
