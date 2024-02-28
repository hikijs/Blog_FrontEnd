import { useState } from 'react'
import NewPostEditor from 'src/components/NewPostEditor'
import PublishPost from 'src/components/PublishPost'

export default function WritePost() {
  const [showPublishPanel, setShowPublishPanel] = useState(false)
  return (
    <div className='relative container py-10 max-w-7xl mx-auto'>
      <NewPostEditor showPublishPanel={showPublishPanel} setShowPublishPanel={setShowPublishPanel} />
      {showPublishPanel && <PublishPost setShowPublishPanel={setShowPublishPanel} />}
    </div>
  )
}
