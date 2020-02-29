import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../react-playground-logo.jpg'
import './Nav.css'

const Nav = () => (
   <>
      <Link to="/" className="nav-home-link">
         <img src={logo} className="Nav-logo" alt="logo" />
         <p className="App-link">SVR from ZEIT</p>
      </Link>
      <nav>
         <ul>
            <li>
               <Link to="/swr">SWR</Link>
            </li>
         </ul>
      </nav>
   </>
)

export default Nav
