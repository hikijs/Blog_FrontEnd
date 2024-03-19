export interface SuccessResponse<metaData> {
  code?: number
  message?: string
  metaData?: metaData
}

export interface ErrorResponse<> {
  code?: number
  message?: string
}
