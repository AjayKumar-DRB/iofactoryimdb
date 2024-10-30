import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navcustom w-100">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="navbar-brand">
            <Link to="/">IMDB Clone</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
