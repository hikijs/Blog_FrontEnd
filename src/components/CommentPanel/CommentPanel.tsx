import { useState } from 'react'
import CommentInput from '../CommentInput'
import CommentShow from '../CommentShow'
import { Comment as CommentType } from 'src/types/comment.type'

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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-8 h-8 cursor-pointer'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
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
              <CommentShow comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
