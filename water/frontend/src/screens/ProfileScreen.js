import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <div className='py-4'>
    <Row style={{ marginTop:'100px' , padding: '0px 130px'}}>
      
      <Col  md={12}>
        <h2 style={{color:'white' , fontWeight:'bold'}}>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table style={{border : '2px solid white'}} striped bordered hover responsive className='table-sm'>
            <thead>
              <tr >
                <th style={{color:'white' , fontWeight:'bold' , fontSize:'22px'}}>ID</th>
                {/* <th style={{color:'white' , fontWeight:'bold'}}>DATE</th> */}
                <th style={{color:'white' , fontWeight:'bold',fontSize:'22px'}}>TOTAL</th>
                <th style={{color:'white' , fontWeight:'bold',fontSize:'22px'}}>PAID</th>
                <th style={{color:'white' , fontWeight:'bold',fontSize:'22px'}}>DELIVERED</th>
                <th style={{color:'white' , fontWeight:'bold',fontSize:'22px'}}>Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td style={{color:'white' , fontWeight:'bold'}}>{order._id}</td>
                  {/* <td style={{color:'white' , fontWeight:'bold'}}>{order.createdAt && order.createdAt.substring(0, 10)}</td> */}
                  <td style={{color:'white' , fontWeight:'bold'}}>{order.totalPrice}</td>
                  <td style={{color:'white' , fontWeight:'bold'}}>
                    {order.isPaid ? (
                      order.paidAt && order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td style={{color:'white' , fontWeight:'bold'}}>
                    {order.isDelivered ? (
                      order.deliveredAt && order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer style={{ fontWeight:'bold'}} to={`/order/${order._id}`}>
                      <Button style={{ fontWeight:'bold'}} className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
    <Row style={{ marginTop:'30px' , padding: '0px 280px' , borderRadius:'10px'}}>
      <Col md={12}>
        <h2 style={{ fontWeight:'bold' , color:'white'}}>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label style={{  borderRadius:'10px' ,fontWeight:'bold',color:'white'}}>Name</Form.Label>
            <Form.Control
              style={{  borderRadius:'10px' ,fontWeight:'bold'}}
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email' style={{marginTop:'10px'}}>
            <Form.Label style={{  borderRadius:'10px' ,fontWeight:'bold',color:'white'}}>Email Address</Form.Label>
            <Form.Control
              style={{  borderRadius:'10px' ,fontWeight:'bold'}}
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password 'style={{marginTop:'10px'}}>
            <Form.Label style={{  borderRadius:'10px' ,fontWeight:'bold' ,color:'white'}}>Password</Form.Label>
            <Form.Control
              style={{  borderRadius:'10px' ,fontWeight:'bold'}}
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword' style={{marginTop:'10px' , fontWeight:'bold'}}>
            <Form.Label style={{  borderRadius:'10px' ,fontWeight:'bold',color:'white'}}>Confirm Password</Form.Label>
            <Form.Control
            style={{  borderRadius:'10px' , fontWeight:'bold'}}
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button style={{  marginTop:'20px'  , marginBottom:'30px', borderRadius:'10px' , background:'transparent' , border:'2px solid white'}} type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
    </Row>
    </div>
  )
}

export default ProfileScreen
