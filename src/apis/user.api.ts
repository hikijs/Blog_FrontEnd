import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'
import api_url from 'src/constants/url.api'

const userApi = {
  getOtherUser(id: string) {
    return http.get<SuccessResponse<User>>(`${api_url.user.user}/${id}`)
  },
  deleteUser(id: string) {
    return http.delete<SuccessResponse<User>>(`${api_url.user.user}/${id}`)
  },
  updateUserProfile(id: string) {
    return http.put<SuccessResponse<User>>(`${api_url.user.user}/${id}`)
  },
  requestVerifyEmail() {
    return http.post<SuccessResponse<User>>(api_url.user.request_verify_email)
  },
  verifyEmail(body: { verifyToken: string }) {
    return http.post<SuccessResponse<User>>(api_url.user.request_verify_email, body)
  },
  sendFriendRequest(id: string) {
    return http.post<SuccessResponse<User>>(`${api_url.user.friend_request}/${id}`)
  },
  getFriendRequestList() {
    return http.get<SuccessResponse<User>>(api_url.user.friend_request)
  },
  answerFriendRequest(id: string, ans: string) {
    return http.post<SuccessResponse<User>>(`${api_url.user.answer_friend_request}/${id}/?ans=${ans}`)
  },
  getFriendList() {
    return http.get<SuccessResponse<User>>(api_url.user.friend_list)
  },
  unFriend(id: string) {
    return http.delete<SuccessResponse<User>>(`${api_url.user.unfriend}/${id}`)
  },
  getListNotifies() {
    return http.get<SuccessResponse<User>>(api_url.user.notifies_list)
  }
}

export default userApi
