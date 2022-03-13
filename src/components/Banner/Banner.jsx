import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <Link to='/products'>
      <img src="https://godrejinterio.com/imagestore/B2C/EspotImages/Images/Banners/Q4_HomePage-01.webp" alt="Sofa_Sets"
      width={'100%'}
      className="banner-img"
      ></img>
    </Link>
  )
}
