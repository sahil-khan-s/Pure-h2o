import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
import { getUserDetails } from '../actions/userActions'

const OrderListScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders = [] } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  useEffect(() => {
    if(!user || !user.name) {
      dispatch(getUserDetails())
    }
    if (userInfo && (userInfo.isAdmin || user.isSeller)) {
      dispatch(listOrders())
    } else {
      navigate('/login')
    }
  }, [dispatch, navigate, userInfo, user])


  return (
    <>
      <h1 style={{color:"white " , marginTop:"50px" , paddingLeft:"70px"}}>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr style={{color:"white "}}>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr style={{color:"white "}} key={order._id}>
                <td style={{color:"white "}}>{order._id}</td>
                <td style={{color:"white "}}>{order.user && order.user.name}</td>
                <td style={{color:"white "}}>
                    {order.createdAt && order.createdAt.substring(0, 10)}
                </td>
                <td style={{color:"white "}}>
                    {order.totalPrice && String(order.totalPrice).substring(0, 10)}
                </td>
                <td style={{color:"white "}}>
                  {order.isPaid ? (
                    order.paidAt &&  order.paidAt.substring(0,10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td style={{color:"white "}}>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0,10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td style={{color:"white "}}>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen
