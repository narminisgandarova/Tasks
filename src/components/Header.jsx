import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import logo from '../assets/imgs/logo.webp'
const Header = () => {
  const {totalItems} = useCart();
  return (
    <Navbar   variant='dark' className='fixed-top' expand="lg">
      <Container>
       <LinkContainer to="/">
       <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
       </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to='/'>
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link >Contact</Nav.Link>
            </LinkContainer>   
          </Nav>
          <Nav className="ms-auto">
            <LinkContainer to='/search'>
            <Nav.Link ><i className="fa-solid fa-magnifying-glass"></i></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link ><i className="fa-solid fa-cart-shopping"></i>({totalItems})</Nav.Link>
            </LinkContainer>   
            <LinkContainer to="/user">
            <Nav.Link ><i className="fa-solid fa-user"></i></Nav.Link>
            </LinkContainer>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header