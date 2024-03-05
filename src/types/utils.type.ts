export interface ResponseApi<metaData> {
  code?: number
  message?: string
  metaData?: metaData
}
