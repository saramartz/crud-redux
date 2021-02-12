import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import Product from './product'

const Products = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const displayProducts = () => dispatch(getProducts())
        displayProducts()
    }, [])

    const products = useSelector((state) => state.products.products[0])
    const error = useSelector((state) => state.products.error)
    const loading = useSelector((state) => state.products.loading)

    return (
        <Container>           
                <Row>
                    <Col>
                        <Table striped bordered hover variant='light' className='text-center'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!products ? (
                                    <p className='text-center'>No produuuuucts</p>
                                ) : (
                                    products.map((product) => <Product key={product.id} product={product} />)
                                )}
                            </tbody>
                        </Table>
                        {error && (
                            <Button className='my-4' size='md' variant='danger' block>
                                Errooooor!
                            </Button>
                        )}
                        {loading && <p className='text-center'>loaaaading....</p>}
                    </Col>
                </Row>
          
        </Container>
    )
}

export default Products
