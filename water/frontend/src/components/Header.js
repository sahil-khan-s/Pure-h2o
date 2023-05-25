import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import '../index.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar  className='nav'
      style={{ color: 'white' ,
      position : 'fixed', 
      zIndex : '1000'
      }}  expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='yellow logo'>Pure-H2O</Navbar.Brand>
          </LinkContainer>
          <LinkContainer style={{paddingLeft:'200px'}} to='/'>
            <Navbar.Brand  className='yellow logo'>Home </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand className='yellow logo'>About Us</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand className='yellow logo'>Contact Us  </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link className='yellow cart'>
                  <i className=' fas fa-shopping-cart yellow'></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className='yellow signIn'>
                    <i className=' fas fa-user yellow'></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
