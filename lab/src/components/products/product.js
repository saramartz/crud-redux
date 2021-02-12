import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/productAction'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Product = ({ product }) => {
    const { name, price, id } = product

    const dispatch = useDispatch()
    const history = useHistory()

    // Delete
    const getProductDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    // Redirect to edit
    const redirectEditProduct = () => {
        dispatch(editProduct(product))
        history.push(`/product/${id}`)
    }

    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <Button className='ml-4' variant='light' onClick={() => redirectEditProduct(id)}>
                    Edit
                </Button>

                <Button className='ml-4' variant='dark' onClick={() => getProductDelete(id)}>
                    Delete
                </Button>
            </td>
        </tr>
    )
}

export default Product
