import { AxiosRequestConfig } from 'axios'

// 紀錄請求中 API
let RequestPending = <any> []

class CancelToken {

  public removeRequestPending(config: AxiosRequestConfig) {
    RequestPending.forEach((item: any, index: number, arr: any) => {
      if (item.uuid === `${config.url}&${config.method}`) {
        item.cancel()
        arr.splice(index, 1)
      }
    })
  }

  public cancelAllPending() {
    RequestPending.forEach((item: any) => {
      item.cancel()
    })
    RequestPending = []
  }

  public clearRequestPending(config: AxiosRequestConfig) {
    RequestPending = RequestPending.filter((item: any) => item.uuid !== `${config.url}&${config.method}`)
  }

  public addRequestPending(item: any) {
    RequestPending.push(item)
  }

}

export const cancelToken = new CancelToken()
