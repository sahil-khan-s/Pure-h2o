import React from 'react'
import waterPic from '../slider/drinkingH2o.jpg'
const PureH2o = () => {
  return (
    <div className=''>
      <div>
        <h1
          style={{ fontSize: '50px' , color: 'blue' }}
          className=' font-bold  text-center pt-5'
        >
          We Provide Pure Water
        </h1>
      </div>
      <div style={{display:'grid' , gridTemplateColumns: '1fr 1fr', alignItems: 'center' , justifyItems: 'center', marginTop: '40px' , padding : '0px 50px' , gap: '30px'}}>
        <div>
          <p style={{fontSize: '35px ' , fontWeight: 'normal' , color : 'blue' , marginTop:'60px'}}>Pure Water is <br /> Ethical Hydration for a Better World</p>
          <p style={{fontSize: '20px ' , fontWeight: 'medium' , color : 'black'}}>
            At Pure Water, we are passionate about providing more than just
            exceptional hydration. We are committed to making a positive impact
            on the environment and communities we serve. Pure water can transform your daily hydration
            routine
            <br />
            Refreshing Vitality: Experience the invigorating taste of our pure water, carefully crafted to quench your thirst and revitalize your body. Stay hydrated and feel the difference in your overall well-being.
            
          </p>
        </div>
        <div>
         <img src={waterPic } alt="" className='rounded' width={600} />
        </div>
      </div>
    </div>
  )
}

export default PureH2o