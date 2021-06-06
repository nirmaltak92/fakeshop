import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  product: null,
  loading: true,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const seletedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.FETCH_SELECTED_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SELECTED_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { loading: true };
    default:
      return state;
  }
};
