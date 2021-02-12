import { combineReducers } from 'redux'
import Product from '../products/product'
import productReducer from './productReducer'

export default combineReducers({
    products: productReducer
})