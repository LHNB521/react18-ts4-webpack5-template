import request from '@/server/server'

export const loginApi = (query: any) => {
  const data = {
    token: '123'
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}
