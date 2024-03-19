import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'
import api_url from 'src/constants/url.api'

const authApi = {
  logout() {
    return http.delete(api_url.auth.logout)
  },
  login(body: { username: string; password: string }) {
    return http.post<AuthResponse>(api_url.auth.login, body)
  },
  register(body: { email: string; username: string; birth: string | Date | undefined; password: string }) {
    return http.post<AuthResponse>(api_url.auth.signup, body)
  },
  changePassword(body: { resetToken: string; newPassword: string; confirmPassword: string }) {
    return http.post<AuthResponse>(api_url.auth.changePassword, body)
  }
}

export default authApi
