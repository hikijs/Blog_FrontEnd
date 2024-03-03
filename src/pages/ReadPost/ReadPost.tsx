import { useState } from 'react'
import PostThumbnail from 'src/components/PostThumbnail'
import PostInteract from 'src/components/PostInteract'
import CommentPanel from 'src/components/CommentPanel'

export default function ReadPost() {
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
