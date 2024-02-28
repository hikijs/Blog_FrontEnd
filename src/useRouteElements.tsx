import { Outlet, Navigate, useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import ReadPost from './pages/ReadPost'
import PostList from './pages/PostList'
import WritePost from './pages/WritePost'
import MainLayout from './layouts/MainLayout'
import ResetPassword from './pages/ResetPassword'
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
      path: 'profile',
      element: (
        <MainLayout>
          <Profile />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
