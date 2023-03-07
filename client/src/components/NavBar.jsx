import React from 'react'
import logo from '../assets/angelabLongLogo.svg';
import laptopLogo from '../assets/laptopLogo.svg'
import '../Nav.css';
import { useState } from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion';
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'


const NavBar = () => {

  const navigate = useNavigate();
  const audio = new Audio(buttonSound)


  return (
    <div className='navBar'>
      <img className='plainLogo' src={laptopLogo} alt="laptop img" onClick={()=> {audio.play(); navigate("/")}}></img>
      <div className='centerNav'>
          <img src={logo} alt="laptop img" onClick={()=> {audio.play(); navigate("/")}}/>
      </div>
      <div className='leftNav'>
        <ul className='navList flex lg:flex-row md:flex-row'>
          <li className='listItem'>
            <button className="navButton" onClick={()=> {audio.play(); navigate("/about")} }>about</button>
          </li>
          <li className='listItem'>
            <button className="navButton" onClick={()=> {audio.play(); navigate("/projects")}}>projects</button>
          </li>
          <li className='listItem'>
            <button className="navButton" onClick={()=> {audio.play(); navigate("/resume")}}>resume</button>
          </li>
          <li className='listItem'>
            <button className="navButton" onClick={()=>{audio.play(); navigate("/contact")}}>contact</button>
          </li>
        </ul>
        
      </div>

    </div>
  )
}

export default NavBar;