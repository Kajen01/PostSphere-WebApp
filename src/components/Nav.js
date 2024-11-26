import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({search}, {setSearch}) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder='Search Posts'
          value={search}
          onChange={(e) => (setSearch(e.target.value))}
        />
      </form>
      <ul className="navbar">
        <li><Link  to="/">Home</Link></li>
        <li><Link to="/PostPage">Post</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav