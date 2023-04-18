import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import allReducers from './reducers'
// WHITELIST: 白名单
const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['user'] // 需要缓存的白名单,不设置则全部缓存
}
const persistedReducer = persistReducer(persistConfig, allReducers)
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export { store, persistor }
