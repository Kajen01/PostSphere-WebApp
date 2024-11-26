import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Missing.css'

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page Not Found!</h2>
      <p>Well, That's Disappointing.</p>
      <Link to="/">
        <p className='linkHome'>Visit our Homepage...</p>
      </Link>
    </main>
  )
}

export default Missing