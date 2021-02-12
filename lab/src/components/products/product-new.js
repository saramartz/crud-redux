import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { newProduct } from '../actions/productAction'

const NewProduct = ({history}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)

    // enable to use dispatch (returns another function)
    const dispatch = useDispatch()

    // Access to loading key and error key
    const loading = useSelector(state => state.products.loading)
    const error = useSelector((state) => state.products.error)
    
    // call the action
    const addProduct = (product) => dispatch(newProduct(product))

    const handleSubmit = e => {
        e.preventDefault()

        //validate
        if (name.trim() === '' || price <= 0) {
            return
        }

        addProduct({
            name, 
            price
        })

        history.push('/')
        
    }

    return (
        <Container>
            <h1 className='heading text-center'>ADD NEW PRODUCT </h1>
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
                                onChange={(e) => setName(e.target.value)}
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
                                onChange={(e) => setPrice(Number(e.target.value))}
                            ></Form.Control>
                        </Form.Group>
                        <Button variant='none' size='lg' block type='submit'>
                            ADD
                        </Button>
                    {error && (
                        <Button className='mt-4' size='md' variant='danger' block>
                            Errooooor!
                        </Button>
                    )}
                    </Form>
                    {loading && <p>loading....</p>}
                </Col>
            </Row>
        </Container>
    )
}

export default NewProduct
