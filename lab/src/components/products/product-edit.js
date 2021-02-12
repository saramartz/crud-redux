import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const ProductEdit = () => {
    return (
        <Container>
            <h1 className='heading text-center'>EDIT PRODUCT </h1>
            <Row className='my-5'>
                <Col lg={{ span: 8, offset: 2 }}>
                    <Form className='my-4 new-product'>
                        <Form.Group>
                            <Form.Label className='my-4 text-uppercase'>Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                size='lg'
                                placeholder='Product Name'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='my-4 text-uppercase'>Price</Form.Label>
                            <Form.Control
                                type='number'
                                name='price'
                                size='lg'
                                placeholder='Price'
                            ></Form.Control>
                        </Form.Group>
                        <Button variant='none' size='lg' block>
                            SAVE
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductEdit
