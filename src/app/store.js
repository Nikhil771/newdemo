import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'
import authReducer from '../features/signin/authSlice'

export const store = configureStore({
 reducer: {
  counterme: counterReducer,
  theme: themeReducer,
  auth :authReducer,
 },
})  