const api_url = {
  auth: {
    signup: '/auth/signup',
    login: '/auth/login',
    logout: '/auth/logout',
    changePassword: '/auth/password'
  },
  user: {
    user: '/user',
    request_verify_email: '/user/request-verify-email',
    verify_email: '/user/verify-email',
    friend_request: '/user/friend-request',
    answer_friend_request: '/user/answere-request/',
    friend_list: '/user/friends',
    unfriend: '/user/unfriend/',
    notifies_list: '/user/notifies/'
  },
  post: {
    publish: '/post/publish',
    post: '/post/',
    my_post: '/post/my',
    feed_for_user: '/post/feed',
    comment: '/post/comment',
    like: '/post/like',
    unlike: '/post/unlike',
    save: '/post/save',
    unsave: '/post/unave',
    post_from_saved_list: '/post/save-posts/',
    saved_list: '/post/save-list'
  },
  upload: {
    image: '/upload/image'
  }
} as const

export default api_url
