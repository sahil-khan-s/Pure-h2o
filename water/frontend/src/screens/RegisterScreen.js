import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password, address, city, postalCode))
    }
  }

  return (
    <FormContainer>
      <h1 style={{ color: 'white' }}>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label style={{ color: 'white' }}>Name</Form.Label>
          <Form.Control
            // pattern='[A-Za-z]'
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            Email Address
          </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            Password
          </Form.Label>
          <Form.Control
            type='password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            placeholder='Enter password'
            value={password}
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            Confirm Password
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='address'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            Address
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            City
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label style={{ color: 'white', paddingTop: '10px' }}>
            Postal Code
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Postalcode'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          style={{
            border: '2px solid white',
            background: 'transparent',
            borderRadius: '5px',
            marginTop: '20px',
          }}
          type='submit'
          variant='primary'
        >
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col style={{ color: 'white', paddingBottom: '20px' }}>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
