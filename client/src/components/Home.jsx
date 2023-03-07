import React from 'react'
import '../Home.css'
import bugCollector from '../assets/bugCollector.svg'
import { motion } from 'framer-motion'
import bugCatch from '../assets/bugCatch.svg'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const audio = new Audio(buttonSound)
    
  return (
    <div className='homeHome flex-row flex p-1 justify-around flex-wrap rounded' >
        <div className='descripA'>
            <span className='title1'>SOFTWARE DEVELOPER</span>
            <span className='title2'>DESIGNER</span>
            <span className='title3'>BUG CATCHER</span>
            <span className='title4'>bugs ... get it?</span>
            <motion.img className='bugs' src={bugCatch} whileHover={{ scale: 3 }} whileTap={{ scale: 0.8 }}/>
        </div>
        <div className='descrip2A'>
          <span className='title5'>Now that you're intrigued by my bug catching skills, would you care to learn more?</span>
          <button className="navButtonHome" onClick={()=> {audio.play(); navigate("/about")} }>about</button>
        </div>




    </div>
  )
}

export default Home