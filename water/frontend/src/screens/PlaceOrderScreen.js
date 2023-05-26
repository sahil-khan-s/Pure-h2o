import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [navigate, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        // ...order,
        // user: userInfo._id,
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
    <div  >
      <CheckoutSteps  step1 step2 step3 step4 />
      <Row style={{marginLeft:'100px'}} >
        <Col md={8} style={{margin:'40px' ,width:'50% ' ,border:'2px solid white' ,borderRadius:'14px ' ,padding:'0px 0px 30px 0px' }}>
          <ListGroup style={{marginTop:'40px' }} variant='flush'>
            <ListGroup.Item style={{background:'transparent' ,color:'white'}}>
              <h2 style={{textAlign:'center'}}>Shipping</h2>
              <p style={{ fontWeight:'bold'}}>
                <strong >Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item style={{background:'transparent' ,color:'white'}} >
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item style={{background:'transparent' ,color:'white'}}>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index} style={{background:'transparent' ,color:'white'}}>
                      <Row >
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link style={{color:'white' ,textDecoration:'none'}} to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} = {item.qty * item.price}Rs
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item >
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card style={{ background:'transparent',color:'white' ,marginTop:'40px' ,border:'2px solid white' ,borderRadius:'14px', padding:'20px 0px 20px 0px'}} >
            <ListGroup variant='flush' style={{ background:'',color:'white'}}>
              <ListGroup.Item   style={{ background:'transparent',paddingTop:'30px',color:'white'}} >
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                <Row>
                  <Col>Items</Col>
                  <Col>{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                <Row>
                  <Col>Shipping</Col>
                  <Col>{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                <Row>
                  <Col>Tax</Col>
                  <Col>{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                <Row style={{ background:'transparent',color:'white'}}>
                  <Col>Total</Col>
                  <Col>{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item style={{ background:'transparent',color:'white'}}>
                <Button style={{ background:'transparent',color:'white' ,border:'2px solid white' ,borderRadius:'10px' ,marginTop:'60px'}}
                  type='button'
                  className='btn w-100'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      </div>
    </>


  )
}

export default PlaceOrderScreen
