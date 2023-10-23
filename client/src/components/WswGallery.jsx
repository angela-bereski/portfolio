import React from 'react'
import '../Projects.css'
import wswHome from '../assets/wswHome.png'
import wswAbout from '../assets/wswAbout.png'
import wswServices from '../assets/wswServices.png'
import wswContact from '../assets/wswContact.png'
import wswGC from '../assets/wswGC.png'
import {useNavigate} from 'react-router-dom'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'


const WswGallery = () => {

    const navigate = useNavigate();
    const audio = new Audio(buttonSound)

    const scrollToTop = () => {
        audio.play();
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    };

    return (
        <div className='projectsMain flex p-1 justify-around flex-wrap rounded'>
            <span className='title555'>Wandering Sparrow Wellness</span>
            <hr className='horizontal-line'/>
              <div className='projWords'>
              <p className='title222'>Massage & Yoga Business</p>
                        <p className='title333'>Wix | CSS | HTML | Javascript | Mailchimp | Square</p>
                        <p className='title333'>The website features a variety of services, including massages like Swedish and deep tissue, sports massage, cupping therapy, and private yoga sessions tailored to individual needs. It aims to capture the essence of "Wandering Sparrow Wellness" by promoting relaxation and wellness goals.</p>
                        <p className='title333'>Seek. Practice. Find.</p>
                    </div>
            
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wswHome} alt="screen shot of the Ballot Box App" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wswAbout} alt="screen shot of the Ballot Box App" />
                </div>
            </div>
        </div>

        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wswServices} alt="screen shot of the Ballot Box App" />
                </div>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wswContact} alt="screen shot of the Ballot Box App" />
                </div>
            </div>
        </div>

        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
              
            <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wswGC} alt="screen shot of the Ballot Box App" />
                </div>
        </div>
        </div>
        <button className="navButtonHome" onClick={scrollToTop}>Back to Projects</button>

        </div>
      )
    }

export default WswGallery