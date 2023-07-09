import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ContactUs from './screens/ContactUs'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import './index.css'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-1'>
        <div className='pt-5'>
          <Routes>
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            <Route path='/admin/productlist' exact element={<ProductListScreen />} />
            {/* <Route path='/seller/productlist' exact element={<ProductListScreen />} /> */}
            <Route path='/admin/productlist/:pageNumber' exact element={<ProductListScreen />} />
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            {/* <Route path='/seller/orderlist' element={<OrderListScreen />} /> */}
            <Route path='/search/:keyword' exact element={<HomeScreen />} />
            <Route path='/' exact element={<HomeScreen />} />
            <Route path='/page/:pageNumber' exact element={<HomeScreen />} />
            <Route path='/search/:keyword/page/:pageNumber' exact element={<HomeScreen />} />
            <Route path='/AboutScreen' exact element={<AboutScreen />} />
            <Route path='/ContactUs' exact element={<ContactUs />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
