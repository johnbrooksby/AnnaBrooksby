import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Books from './Books'
import Blog from './Blog'
import About from '../About'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='navbar'>
    <About />
    <Books />
    <Blog />
    </div>
  )
}

export default Navbar