import React from 'react'
import '../Projects.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import ballotBox from '../assets/BallotBox.png'
import beenThere from '../assets/BeenThereRunThat.png'
const Projects = () => {
    const audio = new Audio(buttonSound)

  return (
    <div className='projectsMain flex p-1 justify-around flex-wrap rounded'>
        <span className='title222'>project demos coming soon... for now, check out the live links!</span>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <p className='title555'>The Ballot Box</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="http://100.26.160.109/"><img className='projPhoto' src={ballotBox} alt="screen shot of the Ballot Box App" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Virtual Polling Center</p>
                    <p className='title333'>React.js | Tailwind | MongoDB<br/>CRUD online voting platform built with MERN stack.<br/>Logged in users can create, edit, and delete candidates. Voters can view candidates, and are limited to one vote per session. Passwords are hashed with Bcrypt. Utilizes exception handling, promises, and RESTful APIs. Deployed with AWS.
</p>
                    <p className='title333'>Elect wisely.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="http://100.26.160.109/">The Ballot Box</a></button>
        </div>
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
          <p className='title555'>Been There, Run That</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="http://100.25.77.155/"><img className='projPhoto' src={beenThere} alt="screen shot of Been There, Run That App" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Online Community for Runners</p>
                    <p className='title333'>Java| Spring | MySQL<br/>Online running community with full CRUD capabilities.<br/>Logged in users can create, edit, and delete their runs and also connect with other runners by cheering for them or requesting mile dedications. Runners can also upload photos from their runs. Passwords are hashed with Bcrypt. Deployed with AWS.</p>
                    <p className='title333'>Get your run on.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="http://100.25.77.155/">Been There, Run That</a></button>
            </div>
        </div>
    </div>
  )
}

export default Projects