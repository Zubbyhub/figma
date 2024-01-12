import React from 'react'
import { BiGlobe } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="nav-img">
            <img src="./assets/Rectangle 9.jpg" alt="" />
        </div>
        <h1>XYZ</h1>
        <div className="nav-links">
            <a href="">Overview</a>
            <a href="">Feature</a>
            <a href="">About</a>
            <a href="">Pricing</a>
        </div>
            <div className="lan-link"><a href=""><BiGlobe className='globe'/> Language</a></div>
            <button className='btn'><a href="">Sign up</a></button>
      </div>
    </>
  )
}

export default Navbar
