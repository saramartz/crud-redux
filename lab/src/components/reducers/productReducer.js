import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
} from '../types/'

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    editProduct: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
            }
        case LOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: [...state.products, action.payload],
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== state.deleteProduct),
                deleteProduct: null,
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                editProduct: action.payload,
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                editProduct: null,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? (product = action.payload) : product
                ),
            }
        default:
            return state
    }
}
