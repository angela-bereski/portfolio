import React from 'react'
import '../Contact.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate();
    const audio = new Audio(buttonSound)
    
  return (
    <div className='contactMain'>
        <span className='title1111'>Want to collaborate? Have a question?</span>
        <span className='title2222'>Let me know!</span>
        <span className='title4444'>I'm happy to chat about all things development, design, and bugs.</span>
        <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="mailto:angelakbereski@gmail.com?subject=!false (It's funny because it's true.)">send email</a></button>
    </div>
  )
}

export default Contact