export interface PublishPost {
  newPostId: string
  thumbnail: string
}

export interface Author {
  userId: string
  userName: string
  avatar: string
}

export interface PostInfor {
  userId: string
  userName: string
  avatarUrl: string
  postId: string
  title: string
  thumbnailUrl: string
  statusEdit: string
  sharePermission: string
  summarize: string
  content: string
  categrogies: [string]
  created_at: string
  updated_at: string
}
