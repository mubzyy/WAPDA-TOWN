import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img9 from "../assets/img9.jpg"

const ContentAnimation = () => {
   const images = [ img2 , img3, img4 , img5 ,img6 , img7 , img9]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  return (
     <div
      className=" h-[600px] bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
  
    </div>
  )
}

export default ContentAnimation
