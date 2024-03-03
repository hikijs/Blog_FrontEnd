import { useState } from 'react'
import { Link } from 'react-router-dom'
import { demo_images, icon_svg } from 'src/utils/icons'
import { Comment as CommentType } from 'src/types/comment.type'
import CommentInput from '../CommentInput'
interface Props {
  comment: CommentType
}

export default function CommentShow(props: Props) {
  const { comment } = props
  const [isReplying, setIsReplying] = useState(false)
  const [isLikedComment, setIsLikedComment] = useState(false)
  const [comments, setComments] = useState(comment.commentChild)
  const [showChildComments, setShowChildComments] = useState(false)

  const onComment = (newComment: CommentType) => {
    setComments((prev) => [newComment, ...prev])
    setShowChildComments(true)
  }

  return (
    <div className='py-2 pl-4 border-l border-b border-lightBlue rounded-l-md min-w-64 overflow-x-auto'>
      <div className='flex justify-start items-center gap-4 py-2'>
        <Link to='/profile/about'>
          <img
            src={demo_images.avatarDemo}
            alt='avatar-icon'
            className='w-8 h-8 object-cover rounded-full border border-lightBlue'
          ></img>
        </Link>

        <div className='flex flex-col justify-start'>
          <Link to='/profile/about'>
            <div className='text-base font-bold hover:underline hover:text-lightBlue cursor-pointer'>Kioku</div>
          </Link>
          <div className='text-xs font-thin'>5 days ago</div>
        </div>
      </div>
      <div className='flex justify-start my-2 text-justify text-sm'>{comment.comment}</div>
      <div className='flex justify-between items-center py-3'>
        <div className='flex justify-start gap-5'>
          <button
            onClick={() => {
              setIsLikedComment(!isLikedComment)
            }}
          >
            {isLikedComment ? (
              <div className='w-7 h-7 bg-highlight-like-icon bg-cover cursor-pointer'></div>
            ) : (
              <div className='w-7 h-7 bg-like-icon hover:bg-highlight-like-icon bg-cover cursor-pointer'></div>
            )}
          </button>
          {comments.length > 0 && (
            <button
              className='flex justify-start items-center gap-2'
              onClick={() => {
                setShowChildComments(!showChildComments)
              }}
            >
              {showChildComments ? (
                <div className='flex justify-start items-center gap-1'>
                  <div className='w-7 h-7 bg-highlight-comment-icon bg-cover cursor-pointer'></div>
                  <icon_svg.chevronDown className='w-6 h-6' />
                </div>
              ) : (
                <div className='flex justify-start items-center gap-1'>
                  <div className='w-7 h-7 bg-comment-icon hover:bg-highlight-comment-icon bg-cover cursor-pointer'></div>
                  <div>{comments.length}</div>
                </div>
              )}
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
