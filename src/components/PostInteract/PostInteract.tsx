import likeIcon from 'src/assets/images/like-icon.png'
import commentIcon from 'src/assets/images/comment-icon.png'
import libraryIcon from 'src/assets/images/library-icon.png'

export default function PostInteract() {
  return (
    <div className='py-5 relative'>
      <div className='container w-1/3'>
        <div className='border-y border-lightBlue py-5 flex justify-between items-center'>
          <div className='flex justify-start gap-5'>
            <div className='flex justify-start items-center gap-2 cursor-pointer'>
              <img src={likeIcon} alt='alert-icon' className='w-6 h-6'></img>
              <div className='text-base font-light'>10</div>
            </div>
            <div className='flex justify-start items-center gap-2 cursor-pointer'>
              <img src={commentIcon} alt='alert-icon' className='w-6 h-6'></img>
              <div className='text-base font-light'>5</div>
            </div>
          </div>
          <div className='flex justify-end items-center cursor-pointer'>
            <img src={libraryIcon} alt='alert-icon' className='w-7 h-7'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
