import React from 'react'

const Nav = ({search}, {setSearch}) => {
  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor=""></label>
      </form>
      <ul className="navbar">
        <li>Home</li>
        <li>Post</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Nav