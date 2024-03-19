import axios, { AxiosError, isAxiosError } from 'axios'
// import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export function isErrorAxios<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === 400
}
