import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from '../reducers/auth/auth'
import  productSlice from '../reducers/products/product'
import  cartSlice  from '../reducers/cart/cart'
import  brandSlice  from '../reducers/brands/brand'
import  categorySlice from '../reducers/categories/category'
import  colorSlice  from '../reducers/color/color'
import  subcategorySlice  from '../reducers/subcategory/subcategory'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
    cart: cartSlice,
    brand: brandSlice,
    category: categorySlice,
    color: colorSlice,
    subcategory: subcategorySlice
  },
})