import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../slider/1.avif'
import image2 from '../slider/2.jpg'
import image3 from '../slider/3.jpg'
import image4 from '../slider/4.jpg'
import image8 from '../slider/8.jpg'



const Slider = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const images = [
    {
      id: 1,
      src: image1,
      alt: 'Image 1',
    },
    {
      id: 2,
      src: image2,
      alt: 'Image 2',
    },
    {
      id: 3,
      src: image3,
      alt: 'Image 3',
    },
    {
      id: 4,
      src: image4,
      alt: 'Image 4',
    },
   
    
      {
      id: 8,
      src: image8,
      alt: 'Image 4',
    },
    // Add more image URLs if needed
  ]

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel 
    style={{ marginTop : '63px',}}
    activeIndex={index} onSelect={handleSelect}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
    <h1 className='text-center' style={{fontSize: '50px', color: 'white',  lineHeight : '75px',  position: 'absolute' , top : '36%' , left: '19%'}}>Pure Water Is Essential  For <br/> Good Health </h1>

          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: '600px' ,margin : 'auto' , }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
