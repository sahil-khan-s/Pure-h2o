import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import video from '../slider/videoBg.mp4'
const Footer = () => {
  return (
    <div className=' ' style={{position: 'relative'}}>
 <video style={{height:'400px' , width:'100%'}} autoPlay muted loop   className='video  '>
                <source  autoPlay src={video} type="video/mp4" />
            </video>
    <div style={{position:'absolute', top:'200px' , left:'30px', width:'100%'}} className=''>
      
    <footer style={{}} className="footer ">
      <Container>
        <Row>
        <Col md={3} className="footer-col">
            <a className='text-decoration-none' href="/">
            <h4 className='text-white'>Home</h4>

            </a>
            
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/AboutScreen">
            <h4 className='text-white'>About Us</h4>
            </a>
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/ContactUs">
            <h4 className='text-white '>Contact Us</h4>
            </a>
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/">
            <h4 className='text-white'>Follow Us</h4>
          </a>
            <div style={{display:'flex' , justifyContent:'space-between',width:'90px' ,margin:'0 0 0 20px'}} className="social-icons ">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i style={{color:'white' , fontSize:'22px'}}  className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i style={{color:'white' , fontSize:'22px'}}  className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i style={{color:'white' , fontSize:'22px'}} className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mt-5 text-white " style={{fontSize:'16px' , fontWeight: 'normal'}}>
              &copy; {new Date().getFullYear()} Pure Water. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
    </div>
  )
}

export default Footer
