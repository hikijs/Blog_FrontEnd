import axios, { AxiosInstance } from 'axios'
import { toast } from 'react-toastify'

const apiDomain = process.env.REACT_APP_API_DOMAIN
const versionAPI = process.env.REACT_APP_API_VERSION

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: `${apiDomain}/${versionAPI}/api`,
      timeout: 10000,
      headers: {
        'Content-Length': 'application-json'
      }
    })

    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        // const code = error.response?.data?.code
        const message = error.response?.data?.message
        toast.error(message)
        // if (code === 10004) {
        // }
        // if (message === 'Not Found') {
        //   toast.error(message)
        // }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
