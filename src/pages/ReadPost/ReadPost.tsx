import PostThumbnail from 'src/components/PostThumbnail'
import PostInteract from 'src/components/PostInteract'
import CommentPanel from 'src/components/CommentPanel'
export default function ReadPost() {
  return (
    <div className='relative'>
      <PostThumbnail />
      <PostInteract />
      <CommentPanel />
    </div>
  )
}
