import React from 'react'
import '../Projects.css'
import bbLogin from '../assets/bbLogin.png'
import bbReg from '../assets/bbReg.png'
import bbCand from '../assets/bbCand.png'
import ballotBox from '../assets/BallotBox.png'
import {useNavigate} from 'react-router-dom'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const BbGallery = () => {
    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

    const scrollToTop = () => {
        audio.play();
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    };

    return (
        <div className='projectsMain flex p-1 justify-around flex-wrap rounded'>
            <span className='title555'>The Ballot Box</span>
            <hr className='horizontal-line'/>
              <div className='projWords'>

              <p className='title222'>Virtual Polling Center</p>
                    <p className='title333'>React.js | Tailwind | MongoDB</p>
                    <p className='title333'>CRUD online voting platform built with MERN stack.<br/>Logged in users can create, edit, and delete candidates. Voters can view candidates, and are limited to one vote per session. Passwords are hashed with Bcrypt. Utilizes exception handling, promises, and RESTful APIs. Deployed with AWS.</p>
                    <p className='title333'>Elect wisely.</p>
                    </div>
            
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={ballotBox} alt="screen shot of the Ballot Box App" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={bbLogin} alt="screen shot of the Ballot Box App" />
                </div>
            </div>
        </div>

        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={bbReg} alt="screen shot of the Ballot Box App" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={bbCand} alt="screen shot of the Ballot Box App" />
                </div>
            </div>
        </div>


        <button className="navButtonHome" onClick={scrollToTop}>Back to Projects</button>

        </div>
      )
    }

export default BbGallery