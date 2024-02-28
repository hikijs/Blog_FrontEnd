import { useState } from 'react'
import { demo_images, icon_images } from 'src/utils/icons'
import { Comment as CommentType } from 'src/types/comment.type'
import CommentInput from '../CommentInput'
import { icon_svg } from 'src/utils/icons'
interface Props {
  comment: CommentType
}

export default function CommentShow(props: Props) {
  const { comment } = props
  const [isReplying, setIsReplying] = useState(false)
  const [comments, setComments] = useState(comment.commentChild)
  const [showChildComments, setShowChildComments] = useState(false)

  const onComment = (newComment: CommentType) => {
    setComments((prev) => [newComment, ...prev])
    setShowChildComments(true)
  }

  return (
    <div className='py-2 pl-4 border-l border-b border-lightBlue rounded-md min-w-64 overflow-x-auto'>
      <div className='flex justify-start items-center gap-4 py-2'>
        <img
          src={demo_images.avatarDemo}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
        <div className='flex flex-col justify-start'>
          <div className='text-base font-bold hover:underline hover:text-lightBlue cursor-pointer'>Kioku</div>
          <div className='text-xs font-thin'>5 days ago</div>
        </div>
      </div>
      <div className='flex justify-start my-2 text-justify text-sm'>{comment.comment}</div>
      <div className='flex justify-between items-center py-3'>
        <div className='flex justify-start gap-5'>
          <img src={icon_images.likeIcon} alt='alert-icon' className='w-6 h-6 cursor-pointer'></img>
          {comments.length > 0 && (
            <button
              className='flex justify-start items-center gap-2'
              onClick={() => {
                setShowChildComments(!showChildComments)
              }}
            >
              <img src={icon_images.commentIcon} alt='comment-icon' className='w-6 h-6 cursor-pointer'></img>
              {showChildComments ? <icon_svg.chevronDown className='w-6 h-6' /> : <div>{comments.length}</div>}
            </button>
          )}
        </div>
        <button
          className='flex justify-end text-sm font-semibold hover:text-lightBlue cursor-pointer'
          onClick={() => {
            setIsReplying(true)
          }}
        >
          Reply
        </button>
      </div>
      {isReplying && (
        <div className=' pt-4'>
          <CommentInput onComment={onComment} setIsReplying={setIsReplying} />
        </div>
      )}

      {showChildComments &&
        comments.map((comment) => (
          <div className='py-2' key={comment.id}>
            <CommentShow comment={comment} />
          </div>
        ))}
    </div>
  )
}
