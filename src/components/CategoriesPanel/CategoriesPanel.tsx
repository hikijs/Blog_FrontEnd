const topicList = [
  'GIS',
  'Relationship',
  'Self',
  'Mental Health',
  'Future',
  'World',
  'Family',
  'Software Engineer',
  'Space',
  'Climate Change',
  'Data Science',
  'Football',
  'Software'
]

export default function CategoriesPanel() {
  return (
    <div className='w-full h-32 flex flex-wrap justify-start gap-3 overflow-y-auto'>
      {topicList.map((element, index) => {
        return (
          <button
            className='flex justify-center items-center px-4 py-2 rounded-full text-xs font-semibold text-lightBlue bg-white border border-lightBlue hover:text-white hover:bg-blue'
            key={index}
          >
            {element}
          </button>
        )
      })}
    </div>
  )
}
