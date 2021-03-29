import { configureStore } from '@reduxjs/toolkit'
import userType from './userType'

export default configureStore({
  reducer: {
      userType: userType
  }
})