import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
       <LinkContainer to="/">
       <Navbar.Brand href="#home">My Task</Navbar.Brand>
       </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/blog">
           <Nav.Link >Blog</Nav.Link>
           </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
           <LinkContainer to="/login">
           <Nav.Link >Login <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>
           </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header