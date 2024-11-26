import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='Footer'>
      <h3>Copyrights &copy; {year}</h3>
    </div>
  )
}

export default Footer