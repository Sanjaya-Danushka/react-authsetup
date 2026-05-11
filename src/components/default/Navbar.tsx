// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left side */}
        <Link className="text-2xl font-bold text-blue-600" to="/">
          ShopHub
        </Link>
        {/* center  links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 transition hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/checkout"
            className="text-gray-700 transition hover:text-blue-600"
          >
            Cart
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <Link
              to="/auth"
              className="rounded-md px-4 py-2 text-gray-700 transition hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
