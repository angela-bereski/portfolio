import React from 'react'
import '../Projects.css'
import mcLogReg from '../assets/mcLogReg.png'
import mcResources from '../assets/mcResources.png'
import mcBB from '../assets/mcBB.png'
import mcHome from '../assets/mindfulCampusHome.png'
import {useNavigate} from 'react-router-dom'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
const McGallery = () => {
    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

    const scrollToTop = () => {
        audio.play();
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    };

    return (
        <div className='projectsMain flex p-1 justify-around flex-wrap rounded'>
            <span className='title555'>Mindful Campus</span>
            <hr className='horizontal-line'/>
              <div className='projWords'>

              <p className='title222'>Virtual Student Portal</p>
                    <p className='title333'>MongoDB | Express | React.js | Node.js</p>
                    <p className='title333'>Online community for BMTI students. Users can login to access a personalized dashboard with to do lists, networking, job boards, resources, yoga, meditation, countdowns, and more.</p>
                    <p className='title333'>Connecting students mindfully.</p>
                    </div>
            
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={mcHome} alt="screen shot of the MC Home Page" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={mcLogReg} alt="screen shot of MC Login Register Page" />
                </div>
            </div>
        </div>

        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={mcBB} alt="screen shot of Brain Breaks" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={mcResources} alt="screen shot of Resources" />
                </div>
            </div>
        </div>


        <button className="navButtonHome" onClick={scrollToTop}>Back to Projects</button>

        </div>
      )
    }

export default McGallery