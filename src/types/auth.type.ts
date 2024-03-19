import { SuccessResponse } from './utils.type'

export type AuthResponse = SuccessResponse<{
  newUserId: string
}>
