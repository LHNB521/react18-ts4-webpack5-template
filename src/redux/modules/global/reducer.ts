import { AnyAction } from 'redux'
import { produce } from 'immer'
import { GlobalState } from '@/redux/interface'
import * as types from '@/redux/mutation-types'

const globalState: GlobalState = {
  token: '',
  userInfo: ''
}

// global reducer
const global = (state: GlobalState = globalState, action: AnyAction) =>
  produce(state, draftState => {
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token
        break
      default:
        return draftState
    }
  })

export default global
