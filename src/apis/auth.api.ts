import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_PING = '/auth/ping'
export const URL_LOGIN = '/auth/login'
export const URL_LOGOUT = '/auth/logout'
export const URL_REGISTER = '/auth/signup'
export const URL_PASSWORD = '/auth/password'
export const URL_GOOGLE_LOGIN = '/oauth/google/login'
export const URL_FACEBOOK_LOGIN = '/oauth/google/login'

const authApi = {
  ping() {
    return http.get(URL_PING)
  },
  logout() {
    return http.delete(URL_LOGOUT)
  },
  googleLogin(body: { username: string; password: string }) {
    return http.post<AuthResponse>(URL_GOOGLE_LOGIN, body)
  },
  facebookLogin(body: { username: string; password: string }) {
    return http.post<AuthResponse>(URL_FACEBOOK_LOGIN, body)
  },
  login(body: { email?: string; username?: string; password: string }) {
    return http.post<AuthResponse>(URL_LOGIN, body)
  },
  changePassword(body: { resetCode?: string; newPassword?: string; confirmPassword: string }) {
    return http.post<AuthResponse>(URL_PASSWORD, body)
  },
  register(body: { email: string; username: string; birth?: Date | string | undefined; password: string }) {
    return http.post<AuthResponse>(URL_REGISTER, body)
  }
}

export default authApi
