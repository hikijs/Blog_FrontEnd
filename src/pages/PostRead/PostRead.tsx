import { useState } from 'react'
import PostThumbnail from 'src/pages/PostRead/components/PostThumbnail'
import PostInteract from 'src/pages/PostRead/components/PostInteract'
import CommentPanel from 'src/pages/PostRead/components/CommentPanel'

export default function PostRead() {
  const [showCommentPanel, setShowCommentPanel] = useState(false)
  const [isLikedPost, setIsLikePost] = useState(false)
  const [isSavedPost, setIsSavedPost] = useState(false)
  return (
    <div className='relative'>
      <PostThumbnail />
      <PostInteract
        isLikedPost={isLikedPost}
        isSavedPost={isSavedPost}
        setIsLikePost={setIsLikePost}
        setIsSavedPost={setIsSavedPost}
        setShowCommentPanel={setShowCommentPanel}
      />
      {showCommentPanel && <CommentPanel setShowCommentPanel={setShowCommentPanel} />}
    </div>
  )
}
