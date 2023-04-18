import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import storage from 'redux-persist/lib/storage'
import auth from './modules/auth/reducer'

// 创建reducer(拆分reducer)
const reducer = combineReducers({ auth })
// redux 持久化配置
const persistConfig = {
  key: 'root',
  storage
}
const persistReducerConfig = persistReducer(persistConfig, reducer)

// 开启 redux-devtools
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise)
// 创建 store
const store = createStore(persistReducerConfig, composeEnhancers(middleWares))
// 创建持久化 store
const persistor = persistStore(store)

export { store, persistor }
