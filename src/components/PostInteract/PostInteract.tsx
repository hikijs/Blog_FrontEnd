import { icon_images } from 'src/utils/icons'
interface Props {
  setShowCommentPanel: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostInteract(props: Props) {
  const { setShowCommentPanel } = props

  return (
    <div className='py-5 relative'>
      <div className='container w-1/3'>
        <div className='border-y border-lightBlue py-5 flex justify-between items-center'>
          <div className='flex justify-start gap-5'>
            <div className='flex justify-start items-center gap-2 cursor-pointer'>
              <img src={icon_images.likeIcon} alt='alert-icon' className='w-6 h-6'></img>
              <div className='text-base font-light'>10</div>
            </div>
            <button
              className='flex justify-start items-center gap-2 cursor-pointer'
              onClick={() => {
                setShowCommentPanel(true)
              }}
            >
              <img src={icon_images.commentIcon} alt='alert-icon' className='w-6 h-6'></img>
              <div className='text-base font-light'>5</div>
            </button>
          </div>
          <div className='flex justify-end items-center cursor-pointer'>
            <img src={icon_images.libraryIcon} alt='alert-icon' className='w-7 h-7'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
