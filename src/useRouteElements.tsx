import { Outlet, Navigate, useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import { Stories, Lists, About, Follow, ReadingListChild, SuggestionFollow } from './pages/Profile'
import Register from './pages/Register'
import ReadPost from './pages/ReadPost'
import PostList from './pages/PostList/PostList'
import WritePost from './pages/WritePost'
import MainLayout from './layouts/MainLayout'
import ResetPassword from './pages/ResetPassword'
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
              <ResetPassword />
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
          <ReadPost />
        </MainLayout>
      )
    },
    {
      path: '/new-story',
      index: true,
      element: (
        <MainLayout>
          <WritePost />
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
          <Lists />
        </ProfileLayout>
      )
    },
    {
      path: 'profile/list/:listId',
      element: (
        <ProfileLayout>
          <ReadingListChild />
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
