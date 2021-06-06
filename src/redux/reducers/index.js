import { combineReducers } from 'redux'
import { productReducer, seletedProductReducer } from './productReducer'

const rootReducer = combineReducers({
    allProducts: productReducer,
    selectedProduct : seletedProductReducer
});

export default rootReducer;