import React from 'react'
import '../About.css'
import abPhoto from '../assets/AB photo.jpg'
import teacherHat from '../assets/teacherHat.svg'
import bizOwnerHat from '../assets/bizOwnerHat.svg'
import directorHat from '../assets/directorHat.svg'
import mktgHat from '../assets/mktgHat.svg'
import pjmHat from '../assets/pjmHat.svg'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='home flex p-1 justify-around flex-wrap rounded' >
        <span className='title11'>about ANGELA</span>
        <div className='mainPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='descrip2 flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                    <img className='ab' src={abPhoto} alt="photo of Angela Bereski" />
                </div>
            </div>
            <div className='descrip flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='words'>
                    <p className='title22'>Hello, World. Nice to see you here.</p>
                    <p className='title33'>I'm Angela, a Full Stack Software Developer who didn't know what I was missing until I fixed my first bug. Now I eat, sleep, and dream in code (in moderation of course). Problem-solving is a super-power of mine, but I also bring valuable skills to the table when I'm not wearing my coding cape.</p>
                    <p className='title33'>Before the cape, you could find me wearing many incredible hats:</p>
                </div>
                <div className='hats flex-row flex p-1 justify-around flex-wrap rounded'>
                    <motion.img className='hatPic' src={teacherHat} alt="Teacher Hat" whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }}/>
                    <motion.img className='hatPic' src={bizOwnerHat} alt="Business Owner Hat" whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }}/>
                    <motion.img className='hatPic' src={directorHat} alt="Director Hat" whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }}/>
                    <motion.img className='hatPic' src={mktgHat} alt="Director Hat" whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }}/>
                    <motion.img className='hatPic' src={pjmHat} alt="Project Mgmt Hat" whileHover={{ scale: 2 }} whileTap={{ scale: 0.8 }}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About