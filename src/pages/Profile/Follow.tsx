import { icon_svg } from 'src/utils/icons'
import FollowCard from './FollowCard'
import { Link } from 'react-router-dom'

interface Props {
  type: string
}

export default function Follow(props: Props) {
  const { type } = props
  return (
    <div className='w-5/6'>
      <div className='flex justify-start items-center gap-3 py-5'>
        <Link to='/profile/about' className='text-base font-thin'>
          Anh Khoa Vu
        </Link>
        <icon_svg.chevronRight className='w-6 h-6' />
        <div className='text-base font-thin'>{type}</div>
      </div>
      <div className='text-4xl font-black py-10'>27 {type}</div>
      <FollowCard type={type} />
      <FollowCard type={type} />
      <FollowCard type={type} />
      <FollowCard type={type} />
    </div>
  )
}
