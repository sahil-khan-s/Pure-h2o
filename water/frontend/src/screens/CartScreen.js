import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const productId = id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/shipping')
  }

  return (

    <div className='' style={{padding: '122px 0px 0px 0px' ,   background: 'linear-gradient(to top right, #243558 28%, #8bb6f7 70%)'
  }}>

    <Row style={{background: 'transparent'}}>
      <Col md={12} style={{background: 'transparent'}}>
        <h1 style={{fontSize:'48px' , fontWeight:'bold' , color : 'white'}} className='text-center '>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup style={{background:'transparent' , padding:'40px 0px 20px 90px '}} variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product} style={{background:'transparent'}}>
                <Row style={{background:'transparent' , display: 'flex ' , alignItems: 'baseline'}}>
                  <Col md={2}  style={{background:'transparent',}}>
                    <Image style={{background:'transparent'}} src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link style={{fontSize:'26px' ,color : 'white', textDecoration:'none' , fontWeight:'bold'}} to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col style={{fontSize:'26px' ,color : 'white', textDecoration:'none' , fontWeight:'bold'}} md={2}>{item.price} Rs</Col>
                  <Col md={2} >
                    <Form.Control  style={{background:'transparent',color : 'white' ,border:'2px solid white' , borderRadius:'10px' ,fontSize:'19px' , fontWeight:'bold'}}
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option style={{background:'white' , color:'black'}} key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                    style={{background:'transparent', color : 'white'}}
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash' />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      </Row>
      <div  className=' text-center '>
        <Row className=''>
      <Col md={12}>
        <Card style={{background:'transparent'}}>
          <ListGroup variant='flush' style={{background:'transparent'}}>
            <ListGroup.Item style={{background:'transparent' , color : 'white' , fontWeight: 'bold'}}>
              <h2 style={{color : 'white'}}>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}{' '}
              Rs
            </ListGroup.Item>
            <ListGroup.Item style={{background:'transparent ',  padding: '45px 0px' , border:'none'}}>
              <Button
              style={{background:'transparent ' ,borderRadius: '10px' , padding: '15px 10px', border:'2px white solid' }}
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </div>
    </div>

  )
}

export default CartScreen
