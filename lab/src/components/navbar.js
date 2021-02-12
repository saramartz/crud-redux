import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg='dark' variant='dark' className='px-5 py-3'>
            <Link to={'/'}>
                <Navbar.Brand>Redux CRUD</Navbar.Brand>
            </Link>

            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Link to={'/product/new'}>
                    <Button variant='outline-light'>New Product</Button>
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
