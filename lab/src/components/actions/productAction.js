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
    EDIT_PRODUCT,
    GET_PRODUCT_EDIT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
} from '../types/'
import apiHandler from '../../service/product.service'

// NEW PRODUCTS
export function newProduct(product) {
    return async (dispatch) => {
        dispatch(addProduct())

        try {
            await apiHandler.post('/products', product)

            dispatch(addProductSuccess(product))
        } catch (error) {
            dispatch(addProductError(true))
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
})

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
})

const addProductError = (status) => ({
    type: ADD_PRODUCT_ERROR,
    payload: status,
})

// GET PRODUCTS
export function getProducts() {
    return async (dispatch) => {
        dispatch(loadProducts())

        try {
            setTimeout(async () => {
                const res = await apiHandler.get('/products')
                dispatch(getProductsSuccess(res.data))
            }, 500)
        } catch (error) {
            dispatch(getProductsError())
        }
    }
}

const loadProducts = () => ({
    type: LOAD_PRODUCTS,
    payload: true,
})

const getProductsSuccess = (products) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: products,
})

const getProductsError = () => ({
    type: LOAD_PRODUCTS_ERROR,
    payload: true,
})

// DELETE PRODUCTS -------- ISN'T WORKING
export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id))
        console.log(id)

        try {
            await apiHandler.delete(`/products/${id}`)
            dispatch(deleteProductSuccess())
        } catch (error) {
            // dispatch(deleteProductError(true))
        }
    }
}

const getProductDelete = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS,
})

// EDIT PRODUCTS