import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import '../Hamburger.css'
import hamburgerIcon from '../assets/hamburger2.svg'
import hamburgerCross from '../assets/hamburgerCross.svg'
import { motion } from 'framer-motion';
const Hamburger = () => {
  return (
    <div className='sideBar'>
        <Menu right noOverlay customBurgerIcon={ <img src={hamburgerIcon} /> } customCrossIcon={ <img src={hamburgerCross} /> }>
            <a className="menu-item" href="/">
                home
            </a>
            <a className="menu-item" href="/about">
                about
            </a>
            <a className="menu-item" href="/projects">
                projects
            </a>
            <a className="menu-item" href="/resume">
                resume
            </a>
            <a className="menu-item" href="/contact">
                contact
            </a>    
        </Menu>
        <div className='bm-burger-button'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Hamburger