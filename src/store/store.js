import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from '../reducers/auth/auth'
import  productSlice from '../reducers/products/product'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice
  },
})