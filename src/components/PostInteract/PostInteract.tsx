interface Props {
  isLikedPost: boolean
  isSavedPost: boolean
  setIsLikePost: React.Dispatch<React.SetStateAction<boolean>>
  setIsSavedPost: React.Dispatch<React.SetStateAction<boolean>>
  setShowCommentPanel: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostInteract(props: Props) {
  const { isLikedPost, isSavedPost, setIsLikePost, setIsSavedPost, setShowCommentPanel } = props

  return (
    <div className='py-5 relative'>
      <div className='container w-1/3'>
        <div className='border-y border-lightBlue py-5 flex justify-between items-center'>
          <div className='flex justify-start gap-5'>
            <button
              className='flex justify-start items-center gap-2 cursor-pointer'
              onClick={() => {
                setIsLikePost(!isLikedPost)
              }}
            >
              {isLikedPost ? (
                <div className='w-8 h-8 bg-highlight-like-icon bg-cover'></div>
              ) : (
                <div className='w-8 h-8 bg-like-icon hover:bg-highlight-like-icon bg-cover'></div>
              )}
              <div className='text-base font-light'>10</div>
            </button>

            <button
              className='flex justify-start items-center gap-2 cursor-pointer'
              onClick={() => {
                setShowCommentPanel(true)
              }}
            >
              <div className='w-8 h-8 bg-comment-icon hover:bg-highlight-comment-icon bg-cover'></div>
              <div className='text-base font-light'>5</div>
            </button>
          </div>
          <button
            className='flex justify-end items-center cursor-pointer'
            onClick={() => {
              setIsSavedPost(!isSavedPost)
            }}
          >
            {isSavedPost ? (
              <div className='w-10 h-10 bg-highlight-reading-list-icon bg-cover'></div>
            ) : (
              <div className='w-10 h-10 bg-reading-list-icon hover:bg-highlight-reading-list-icon bg-cover'></div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
