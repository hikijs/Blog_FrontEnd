import NewPostEditor from 'src/components/NewPostEditor'
import PublishPost from 'src/components/PublishPost'

export default function WritePost() {
  return (
    <div className='relative container py-10 max-w-7xl mx-auto'>
      <NewPostEditor />
      <PublishPost />
    </div>
  )
}
