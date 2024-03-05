import { useState } from 'react'
import CommentInput from '../CommentInput'
import Comment from '../Comment'
import { Comment as CommentType } from 'src/types/comment.type'
import { icon_svg } from 'src/utils/icons'

const dummyComment: Array<CommentType> = [
  {
    id: 0,
    comment:
      'Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.',
    commentChild: [
      {
        id: 0,
        comment:
          'Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.',
        commentChild: [
          {
            id: 0,
            comment:
              'Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.',
            commentChild: []
          }
        ]
      }
    ]
  },
  {
    id: 1,
    comment:
      'Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.',
    commentChild: []
  },
  {
    id: 2,
    comment:
      'Thank you for mentioning our building footprint data in Japan. We are going to update the dataset and include more attributes such as addresses and building names sometime this year. I am very excited about GeoParquet.',
    commentChild: []
  }
]
interface Props {
  setShowCommentPanel: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CommentPanel(props: Props) {
  const { setShowCommentPanel } = props
  const [comments, setComments] = useState(dummyComment)
  const [isReplying, setIsReplying] = useState(true)

  const onComment = (newComment: CommentType) => {
    setComments((prev) => [newComment, ...prev])
  }

  return (
    <div className='absolute right-0 top-0 h-screen w-1/4 bg-white drop-shadow-xl overflow-auto'>
      <div className='container'>
        <div className='mx-5 pt-2 pb-10'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold my-5'>Comment (10)</div>
            <button
              onClick={() => {
                setShowCommentPanel(false)
              }}
            >
              <icon_svg.xCircle className='w-8 h-8 cursor-pointer' />
            </button>
          </div>
          {isReplying ? (
            <CommentInput onComment={onComment} setIsReplying={setIsReplying} />
          ) : (
            <button
              className='flex p-4 justify-start items-center w-full shadow-md shadow-lightBlue rounded-lg cursor-pointer text-base font-thin'
              onClick={() => {
                setIsReplying(true)
              }}
            >
              What are you thoughts ?
            </button>
          )}
        </div>
        <div className='mx-5 py-4'>
          {comments.map((comment) => (
            <div className='mt-3 py-2' key={comment.id}>
              <Comment comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
