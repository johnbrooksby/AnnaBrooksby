import React from 'react'
import Books from './Books'
import Blog from './Blog'
import About from './About'

const Navbar = () => {
  return (
    <div className='navbar'>
    <About />
    <Books />
    <Blog />
    </div>
  )
}

export default Navbar