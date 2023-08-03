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
      
    <footer  className="footer ">
      <Container>
        <Row style={{paddingLeft:"330px"}}> 
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
          <a className='text-decoration-none'
  href='https://m-ismaeel-portfolio-w9fo.vercel.app/'
  target='_blank'
  rel='noopener noreferrer'
  >
            <h4 className='text-white'>Follow Us</h4>
          </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center mt-4">
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
