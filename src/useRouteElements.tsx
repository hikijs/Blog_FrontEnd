import { Outlet, Navigate, useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/Profile/About'
import Stories from './pages/Profile/Stories'
import { ReadingListReview, ReadingListShow } from './pages/Profile/Lists'
import { Follow, SuggestionFollow } from './pages/Profile/Follow'
import Register from './pages/Register'
import PostRead from './pages/PostRead'
import PostList from './pages/PostList/PostList'
import PostCreate from './pages/PostCreate'
import MainLayout from './layouts/MainLayout'
import ChangePass from './pages/ChangePass'
import ProfileLayout from './layouts/ProfileLayout'
import RegisterLayout from './layouts/RegisterLayout'

const isAuthenticated = false
// function ProtectedRoute() {
//   // const isAuthenticated = true
//   return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
// }

function RejectedRoute() {
  // const isAuthenticated = false
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    // {
    //   path: '',
    //   element: <ProtectedRoute />,
    //   children: [
    //     {
    //       path: 'profile',
    //       element: (
    //         <MainLayout>
    //           <Profile />
    //         </MainLayout>
    //       )
    //     }
    //   ]
    // },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },
        {
          path: '/reset-password',
          element: (
            <RegisterLayout>
              <ChangePass />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <PostList />
        </MainLayout>
      )
    },
    {
      path: '/:categoryId',
      index: true,
      element: (
        <MainLayout>
          <PostList categoryId='1' />
        </MainLayout>
      )
    },
    {
      path: '/read',
      index: true,
      element: (
        <MainLayout>
          <PostRead />
        </MainLayout>
      )
    },
    {
      path: '/new-story',
      index: true,
      element: (
        <MainLayout>
          <PostCreate />
        </MainLayout>
      )
    },
    {
      path: 'profile/story',
      element: (
        <ProfileLayout>
          <Stories />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/list',
      element: (
        <ProfileLayout>
          <ReadingListReview />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/list/:listId',
      element: (
        <ProfileLayout>
          <ReadingListShow />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/about',
      element: (
        <ProfileLayout>
          <About />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/following',
      element: (
        <ProfileLayout>
          <Follow type='Following' />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/following/suggestions',
      element: (
        <ProfileLayout>
          <SuggestionFollow />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/follower',
      element: (
        <ProfileLayout>
          <Follow type='Follow' />
        </ProfileLayout>
      )
    }
  ])
  return routeElements
}
