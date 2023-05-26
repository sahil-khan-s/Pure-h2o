import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <div style={{paddingBottom:'60px'}}>
      <CheckoutSteps step1 step2 step3 />
    <FormContainer>
      <h1 style={{color: 'white', fontWeight:'bold' , fontSize:'40px'}}>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{color: 'white' }} as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
            style={{color: 'white'}}
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
            style={{color: 'white', marginTop:'10px'}}
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button style={{color: 'white',background:'transparent', border: '2px solid white',borderRadius:'10px' , margin:'20px 0px'}} type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
    </div>

  )
}

export default PaymentScreen
