import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div style={{paddingTop:'103px', margin:'auto',color:'white'  ,background:'transparent' , width:'1076px  '  , borderRadius:'10px' ,  }}>
    <Nav style={{background:'transparent',display:'flex' ,justifyContent:'space-between', border: '2px solid white' , borderRadius:'10px' , padding: '10px 100px'}}  className='   '>
      <Nav.Item>
        {step1 ? (
          <LinkContainer style={{color:'white' , fontWeight:'bold'}} to='/login'>
            <Nav.Link style={{color:'red'}} >Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{color:'red'}}  disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer style={{color:'white' , fontWeight:'bold'}} to='/shipping'>
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer style={{color:'white' , fontWeight:'bold'}} to='/payment'>
            <Nav.Link style={{color:'white' , fontWeight:'bold'}}>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{color:'white' , fontWeight:'bold'}} disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer  to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link style={{color:'white' , fontWeight:'bold' , }} disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default CheckoutSteps
