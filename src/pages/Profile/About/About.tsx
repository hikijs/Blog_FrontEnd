import { useState } from 'react'
import { Link } from 'react-router-dom'
import { icon_svg } from 'src/utils/icons'

export default function About() {
  const [showGetStartedPanel, setShowGetStartedPanel] = useState(true)
  const [showTextareaPanel, setShowTextareaPanel] = useState(false)
  return (
    <div>
      <div className='pb-10 border-b border-lightBlue'>
        <div className='text-5xl font-black py-5'>Kioku</div>
        <div className='flex justify-start pb-10 gap-10'>
          <Link to='/profile/about' className='text-base font-normal py-3 cursor-pointer border-b border-lightBlue'>
            About
          </Link>
          <Link to='/profile/story' className='text-base font-normal py-3 cursor-pointer'>
            Stories
          </Link>
          <Link to='/profile/list' className='text-base font-normal py-3 cursor-pointer'>
            Lists
          </Link>
        </div>
        {showGetStartedPanel && (
          <div className='flex justify-center items-center w-full p-10 bg-slate-100'>
            <div className='w-3/5 h-3/5 flex flex-col justify-center items-center'>
              <div className='text-base font-semibold py-2'>Tell the world about yourself</div>
              <div className='text-sm font-normal text-center py-2'>
                Here’s where you can share more about yourself: your history, work experience, accomplishments,
                interests, dreams, and more. You can even add images and use rich text to personalize your bio.
              </div>
              <button
                className='border border-lightBlue text-base font-normal mt-4 py-3 px-5 rounded-full'
                onClick={() => {
                  setShowGetStartedPanel(false)
                  setShowTextareaPanel(true)
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {showTextareaPanel && (
          <div className='w-full'>
            <div className='flex flex-col justify-start border border-lightBlue items-start py-2 mb-5'>
              <textarea
                name='search'
                className='w-full h-28 text-black px-3 py-2 flex-grow border-none outline-none bg-transparent text-sm font-thin'
                placeholder='Write bout your self ...'
              />
            </div>
            <div className='flex items-center justify-between py-2'>
              <button className='flex justify-start items-center gap-3'>
                <div className='rounded-full border border-lightBlue p-1'>
                  <icon_svg.photo className='w-6 h-6 text-lightBlue' />
                </div>
                <div className='text-lightBlue text-base font-normal'>Insert photo</div>
              </button>
              <div className='flex justify-end gap-2'>
                <button
                  className='py-2 px-4 rounded-full border border-lightBlue text-lightBlue'
                  onClick={() => {
                    setShowGetStartedPanel(true)
                    setShowTextareaPanel(false)
                  }}
                >
                  Cancel
                </button>
                <button className='py-2 px-4 rounded-full bg-blue text-white'>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-start py-4 text-base font-medium'>Medium member since November 2023</div>
      <div className='flex justify-start text-lightBlue text-base font-thin gap-4'>
        <div>3 Followers</div>
        <div>27 Following</div>
      </div>
    </div>
  )
}
