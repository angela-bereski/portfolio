import React from 'react'
import '../Projects.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const Projects = () => {
    const audio = new Audio(buttonSound)

  return (
    <div className='projectsMain'>
        <span className='title222'>Hang tight... construction is almost finished. For now, checkout some of my projects!</span>
        <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="http://100.26.160.109/">The Ballot Box</a></button>
        <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="http://3.235.234.136/">Been There, Run That</a></button>
    </div>
  )
}

export default Projects