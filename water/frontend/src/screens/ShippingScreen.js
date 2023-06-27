import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import { getUserDetails } from '../actions/userActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setAddress(user.address || '');
        setCity(user.city || '');
        setPostalCode(user.postalCode || '');
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode }))
    navigate('/payment')
  }

  return (
    <div style={{}}>
      <CheckoutSteps step1 step2 />
      <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label style={{ color: 'white' }}>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label style={{ color: 'white', marginTop: '10px' }}>
              City
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label style={{ color: 'white', marginTop: '10px' }}>
              PostalCode
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postalCode'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            style={{ margin: '20px 0px', background: 'gray', color: 'white' }}
            type='submit'
            variant='primary'
          >
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default ShippingScreen
