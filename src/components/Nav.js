import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input 
          autoFocus
          tabIndex={0}
          type="text" 
          name="search" 
          id="search" 
          placeholder='Search Posts'
          value={search}
          onChange={(e) => (setSearch(e.target.value))}
        />
      </form>
      <ul className="navbar">
        {/* Navigation Links */}
        <li><Link  to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav