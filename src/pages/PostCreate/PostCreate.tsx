import { useState } from 'react'
import PostEditor from 'src/components/PostEditor'
import PublishPanel from 'src/pages/PostCreate/components/PublishPanel'

export default function PostCreate() {
  const [showPublishPanel, setShowPublishPanel] = useState(false)
  return (
    <div className='relative container py-10 max-w-7xl mx-auto'>
      <PostEditor showPublishPanel={showPublishPanel} setShowPublishPanel={setShowPublishPanel} />
      {showPublishPanel && <PublishPanel setShowPublishPanel={setShowPublishPanel} />}
    </div>
  )
}
