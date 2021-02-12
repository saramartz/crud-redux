import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProductAction } from '../actions/productAction'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const ProductEdit = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [actualproduct, setActualProduct] = useState({
        name: '',
        price: ''
    })

    const product = useSelector((state) => state.products.editProduct)

    useEffect(() => {
        setActualProduct(product)
    }, [product])

    const handleInputChange = e => {
        setActualProduct({
            ...actualproduct,
            [e.target.name]: e.target.value,
        })
    }

    const { name, price } = actualproduct
    
    const handleSubmit = e => {
        e.preventDefault()        
        dispatch(editProductAction(actualproduct))
        history.push('/')
    }  
    
    return (
        <Container>
            <h1 className='heading text-center'>EDIT PRODUCT </h1>
            <Row className='my-5'>
                <Col lg={{ span: 8, offset: 2 }}>
                    <Form className='my-4 new-product' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className='my-4 text-uppercase'>Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                size='lg'
                                placeholder='Product Name'
                                value={name}
                                onChange={handleInputChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='my-4 text-uppercase'>Price</Form.Label>
                            <Form.Control
                                type='number'
                                name='price'
                                size='lg'
                                placeholder='Price'
                                value={price}
                                onChange={handleInputChange}
                            ></Form.Control>
                        </Form.Group>
                        <Button variant='none' type='submit' size='lg' block>
                            SAVE
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductEdit
