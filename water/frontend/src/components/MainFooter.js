import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const MainFooter = () => {
  return (
    <div style={{padding:'150px 0px 150px 0px'}} className='bg-footer py-10'>
    <footer style={{marginTop:'250px'}} className="footer ">
      <Container>
        <Row>
        <Col md={3} className="footer-col">
            <a className='text-decoration-none' href="/">
            <h4 className='text-white'>Home</h4>

            </a>
            
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/">
            <h4 className='text-white'>About Us</h4>
            </a>
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/">
            <h4 className='text-white'>Contact Us</h4>
            </a>
          </Col>
          <Col md={3} className="footer-col">
          <a className='text-decoration-none' href="/">
            <h4 className='text-white'>Follow Us</h4>
          </a>
            <div style={{display:'flex' , justifyContent:'space-between',width:'70px' ,margin:'0 0 0 30px'}} className="social-icons ">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-white " style={{fontSize:'23px'}}>
              &copy; {new Date().getFullYear()} Pure Water. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default MainFooter;
