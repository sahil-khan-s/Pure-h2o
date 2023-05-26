import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Slider from '../components/Slider'
import Product from '../components/product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import MainFooter from '../components/MainFooter'
import '../index.css'
import { listProducts } from '../actions/productActions'
import PureH2o from '../components/PureH2o'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    <div className=''>
      <Slider />

      <PureH2o/>

      <h1 style={{color:'white'}} className=' center homeMargin'>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
        <div style={{paddingBottom: '90px'}} className='px-5 '>


        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>

        </div>
      )}
      <MainFooter/>
      </div>
    </>
  )
}

export default HomeScreen
