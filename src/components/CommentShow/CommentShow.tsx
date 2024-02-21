import avatarIcon from 'src/assets/images/demo-avatar.jpeg'
import likeIcon from 'src/assets/images/like-icon.png'

export default function CommentShow() {
  return (
    <div className='py-2'>
      <div className='flex justify-start items-center gap-4 py-2'>
        <img
          src={avatarIcon}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
        <div className='flex flex-col justify-start'>
          <div className='text-base font-bold hover:underline hover:text-lightBlue cursor-pointer'>Kioku</div>
          <div className='text-xs font-thin'>5 days ago</div>
        </div>
      </div>
      <div className='flex justify-start pl-5 my-2 text-justify text-sm border-l border-lightBlue'>
        Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include
        more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.
      </div>
      <div className='flex justify-between items-center py-3'>
        <img src={likeIcon} alt='alert-icon' className='w-6 h-6 cursor-pointer'></img>
        <div className='text-sm font-semibold hover:text-lightBlue cursor-pointer'>Reply</div>
      </div>
    </div>
  )
}
