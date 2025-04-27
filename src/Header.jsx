import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-dark text-white p-3 shadow" >
      <div className="container d-flex justify-content-between align-items-center">
      <h1 className="text-white h3 m-0 zoom-animation">
        Navnath Portfolio
      </h1>
        <nav className="d-flex gap-2">
          <Link className="btn btn-outline-light" to="/home">Home</Link>
          <Link className="btn btn-outline-light" to="/about">About</Link>
          <Link className="btn btn-outline-light" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
