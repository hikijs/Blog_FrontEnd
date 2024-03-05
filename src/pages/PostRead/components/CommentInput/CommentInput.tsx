import { demo_images } from 'src/utils/icons'
import { Comment as CommentType } from 'src/types/comment.type'
import { useState } from 'react'
interface Props {
  onComment: (commentBody: CommentType) => void
  setIsReplying: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CommentInput(props: Props) {
  const { onComment, setIsReplying } = props
  const [commentBody, setCommentBody] = useState('')

  const randomId = () => {
    return Math.random()
  }

  return (
    <div className='border border-lightBlue p-5 w-full rounded-lg'>
      <div className='flex justify-start items-center gap-2 py-2'>
        <img
          src={demo_images.avatarDemo}
          alt='avatar-icon'
          className='w-8 h-8 object-cover rounded-full border border-lightBlue'
        ></img>
        <div className='text-base font-bold'>Kioku</div>
      </div>
      <div className='w-full h-16 flex justify-start items-start py-2'>
        <textarea
          value={commentBody}
          onChange={(event) => setCommentBody(event.target.value)}
          name='search'
          className='text-black  py-2 flex-grow border-none outline-none bg-transparent'
          placeholder='What do you think ?'
        />
      </div>
      <div className='flex justify-end gap-4'>
        <button className='rounded-full my-2 py-1 px-4 border-white' onClick={() => setIsReplying(false)}>
          <div className='text-base font-medium cursor-pointer'>Cancel</div>
        </button>
        <button
          className='rounded-full my-2 py-1 px-4 bg-lightBlue'
          onClick={() => {
            onComment({
              id: randomId(),
              comment: commentBody,
              commentChild: []
            })
            setCommentBody('')
            setIsReplying(false)
          }}
        >
          <div className='text-base font-medium text-white cursor-pointer'>Submit</div>
        </button>
      </div>
    </div>
  )
}
