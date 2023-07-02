import React from 'react';
import about from '../slider/child.jpg'
const AboutUsPage = () => {
  return (
    <div style={{marginTop:'110px' , padding:'10px 0px'}}>
      <header style={{display:'flex', justifyContent:'center'}} className='flex justifyContent'>
      <section>
          <h2 style={{color:'white', textAlign:'center'}}>Welcome to Water Delivery Store</h2>
          <p style={{color:'white', textAlign:'center' , fontSize:'18px' , padding:'5px 80px' , fontWeight:'normal'}} className=''>
            At Our Store, we are dedicated to provide you with high-quality water products and convenient delivery services. Our goal is to ensure that you have access to clean and refreshing drinking water at your doorstep.
          </p>
        </section>
        
      </header>

      <main  style={{color:'white'  ,display:'flex'  ,padding:'0px 20px' ,width:'1-0%'}} className=''>
        <div style={{width:'50%'}}>
       

        <section>
          <h2 style={{color:'white' , marginTop:"40px"}}>Our Mission</h2>
          <p>
            Our mission is to make water delivery a seamless experience for our customers. We strive to deliver pure and safe drinking water to your home or office, saving you time and effort. We understand the importance of hydration and aim to promote a healthy lifestyle by providing easy access to clean water.
          </p>
        </section>

        <section>
          <h2 style={{color:'white'}}>Why Choose Water Delivery Store?</h2>
          <ul>
            <li>Wide range of water products to choose from, including purified water, mineral water, and flavored water.</li>
            <li>Convenient online ordering and flexible delivery options.</li>
            <li>Quality assurance - our water products undergo rigorous testing to ensure purity.</li>
            <li>Competitive prices and regular discounts for our valued customers.</li>
            <li>Friendly and responsive customer support team to assist you with any queries.</li>
          </ul>
        </section>
        </div>
        <div style={{width:'50%' ,marginRight:'30px'}}>
            <img style={{width:'630px' ,height:'400px' , borderRadius:'10px',margin:'90px 10px 0px 50px'}} src={about}/>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPage;
