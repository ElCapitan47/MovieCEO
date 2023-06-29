import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className="navbar-home"> HOME </Link>
      <Link to="/WatchList" className="navbar-watchlist"> WATCHLIST </Link>
      <Link to="/About" className="navbar-about"> ABOUT US </Link>
    </nav>
  )
}

export default Navbar
