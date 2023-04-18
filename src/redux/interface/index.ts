/* AuthState */
export interface AuthState {
  authButtons: {
    [propName: string]: any
  }
  authRouter: string[]
}

/* GlobalState */
export interface GlobalState {
  token: string
  userInfo: any
}
