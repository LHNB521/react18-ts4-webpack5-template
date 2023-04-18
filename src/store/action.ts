import { SET_DOC } from './constant'

export const setDoc = (data: string) => {
  return {
    type: SET_DOC,
    data: data
  }
}
