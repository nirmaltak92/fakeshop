import { ActionTypes } from '../contants/action-types'

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const fetchSelectedProduct = () => {
    return {
        type: ActionTypes.FETCH_SELECTED_PRODUCT
    }
}

export const selectedProductSuccess = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT_SUCCESS,
        payload : product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload : []
    }
}