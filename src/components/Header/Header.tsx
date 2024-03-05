import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import Popover from '../Popover'
import { demo_images } from 'src/utils/icons'

export default function Header() {
  const [isSelectedTab, setIsSelectedTab] = useState({
    writeTab: false,
    chatTab: false,
    notificationsTab: false
  })

  const changeSelectedTab = (tab?: string) => {
    setIsSelectedTab({
      writeTab: tab === 'write' ? true : false,
      chatTab: tab === 'chat' ? true : false,
      notificationsTab: tab === 'notification' ? true : false
    })
  }

  return (
    <div className='bg-white py-5 text-gray-500 border-b border-lightBlue'>
      <div className='container'>
        <div className='grid grid-cols-12 items-center gap-10'>
          <Link className='col-span-1' to='/'>
            <div className='w-16 h-16 bg-logo-icon bg-cover'></div>
          </Link>
          <form className='col-span-5 col-start-2'>
            <div className='border-2 border-lightBlue rounded-full p-1 flex'>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='Search ...'
              />
              <button className='rounded-sm py-1 px-3 flex-shrink-0'>
                <div className='w-8 h-8 bg-search-icon hover:bg-highlight-search-icon bg-cover'></div>
              </button>
            </div>
          </form>
          <div className='col-span-4 col-start-9 flex justify-between items-center'>
            <Link
              to='/new-story'
              className='flex flex-col items-center gap-1 cursor-pointer'
              onMouseEnter={() => {
                changeSelectedTab('write')
              }}
              onMouseLeave={() => {
                changeSelectedTab()
              }}
            >
              {isSelectedTab.writeTab ? (
                <Fragment>
                  <div className='w-8 h-8 bg-highlight-write-icon bg-cover'></div>
                  <span className='text-sm text-lightBlue'>New Story</span>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='w-8 h-8 bg-write-icon bg-cover'></div>
                  <span className='text-sm'>New Story</span>
                </Fragment>
              )}
            </Link>
            <Link
              to='/new-story'
              className='flex flex-col items-center gap-1 cursor-pointer'
              onMouseEnter={() => {
                changeSelectedTab('chat')
              }}
              onMouseLeave={() => {
                changeSelectedTab()
              }}
            >
              {isSelectedTab.chatTab ? (
                <Fragment>
                  <div className='w-8 h-8 bg-highlight-chat-icon bg-cover'></div>
                  <span className='text-sm text-lightBlue'>Messaging</span>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='w-8 h-8 bg-chat-icon bg-cover'></div>
                  <span className='text-sm'>Messaging</span>
                </Fragment>
              )}
            </Link>
            <div
              className='flex flex-col items-center gap-1 cursor-pointer'
              onMouseEnter={() => {
                changeSelectedTab('notification')
              }}
              onMouseLeave={() => {
                changeSelectedTab()
              }}
            >
              {isSelectedTab.notificationsTab ? (
                <Fragment>
                  <div className='w-8 h-8 bg-highlight-alert-icon bg-cover'></div>
                  <span className='text-sm text-lightBlue'>Notifications</span>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='w-8 h-8 bg-alert-icon bg-cover'></div>
                  <span className='text-sm'>Notifications</span>
                </Fragment>
              )}
            </div>
            <Popover
              className='flex items-center justify-center cursor-pointer'
              renderPopover={
                <div className='drop-shadow-md'>
                  <Link
                    to='/profile/about'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-lightBlue'
                  >
                    <div className='flex justify-start items-center pr-28 gap-2'>
                      <div className='w-7 h-7 bg-profile-icon bg-cover'></div>
                      <span className='mx-1'>Profile</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/list'
                    className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-lightBlue'
                  >
                    <div className='flex justify-start items-center pr-28 gap-2'>
                      <div className='w-7 h-7 bg-reading-list-icon bg-cover'></div>
                      <span className='mx-1'>Library</span>
                    </div>
                  </Link>
                  <Link
                    to='/profile/story'
                    className='block w-full bg-white pt-4 pb-6 px-4 text-left hover:bg-slate-100 hover:text-lightBlue'
                  >
                    <div className='flex justify-start items-center pr-28 gap-2'>
                      <div className='w-7 h-7 bg-story-icon bg-cover'></div>
                      <span className='mx-1'>Stories</span>
                    </div>
                  </Link>
                  <button className='block w-full bg-white py-4 px-4 text-left hover:bg-slate-100 hover:text-lightBlue border-t border-lightBlue'>
                    <div className='flex items-center'>
                      <span className='mx-1'>Log out</span>
                    </div>
                  </button>
                </div>
              }
            >
              <div className='col-span-1 cursor-pointer items-center'>
                <div className='w-12 h-12 flex-shrink-0'>
                  <img
                    src={demo_images.avatarDemo}
                    alt='avatar-icon'
                    className='w-full h-full object-cover rounded-full border border-black hover:border-lightBlue'
                  ></img>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
