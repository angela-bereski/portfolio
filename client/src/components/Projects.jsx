import React from 'react'
import '../Projects.css'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import ballotBox from '../assets/BallotBox.png'
import beenThere from '../assets/BeenThereRunThat.png'
import bmtiHome from '../assets/bmtiHome.png'
import wmHOA from '../assets/wmHOAhome.png'
import wmLogo from '../assets/MeadowsLogo.svg'
import wmClub from '../assets/wmClub.svg'
import pgTech from '../assets/pgTech.svg'
import mcLogo from '../assets/mcLogo.svg'
import pgWeb from '../assets/pgWebsite.png'

const Projects = () => {
    const audio = new Audio(buttonSound)

  return (
    <div className='projectsMain flex p-1 justify-around flex-wrap rounded'>
        <span className='title666'>WEBSITES</span>
        <hr className='horizontal-line'/>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <p className='title555'>BMTI</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="https://www.bouldermassageinstitute.com/" target='_blank'><img className='projPhoto' src={bmtiHome} alt="screen shot of Massage School Website" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Massage Institute Website</p>
                    <p className='title333'>Wordpress | CSS | Siteground | Mailchimp | Google Analytics</p>
                    <p className='title333'>User-friendly and informative platform that effectively conveys the essence of the institute. The website is designed to attract prospective students and provide them with a comprehensive overview of the institute's offerings, along with a sense of the supportive community and connection they'll experience during their educational journey.</p>
                    <p className='title333'>Transforming healers. Nurturing growth.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="https://www.bouldermassageinstitute.com/" target='_blank'>Visit BMTI Website</a></button>
        </div>
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
          <p className='title555'>WM HOA</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="https://www.wyomissingmeadows.net/" target='_blank'><img className='projPhoto' src={wmHOA} alt="screen shot of Been There, Run That App" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Homeowners Association Community Website</p>
                    <p className='title333'>Wix | CSS | HTML | Javascript | Mailchimp</p>
                    <p className='title333'>This website showcases an exclusive enclave of condominiums. The site offers potential buyers a glimpse into the luxurious and nature-centric lifestyle this community provides. It also serves as an information hub for current residents, offering ownership details and a gallery of visuals to depict the essence of living in this well-cared for neighborhood.</p>
                    <p className='title333'>Community living, elevated.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="https://www.wyomissingmeadows.net/" target='_blank'>Visit HOA Website</a></button>
            </div>
        </div>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <p className='title555'>PG Tech Creations</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={pgWeb} alt="screen shot of Massage School Website" />
                </div>
                <div className='projWords'>
                    <p className='title222'>Tech Consulting Company</p>
                    <p className='title333'>Wix | CSS | HTML | Javascript | Mailchimp | Google Analytics</p>
                    <p className='title333'>Serves as a hub for a tech consulting company, offering a range of services including website building, branding, custom full-stack application development, data analytics, and more. It provides a user-friendly interface to showcase the company's expertise and engage potential clients.</p>
                    <p className='title333'>Creative Tech Solutions.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }>Coming Soon...</button>
        </div>
        </div>
        <span className='title666'>FULL STACK APPLICATIONS</span>
        <hr className='horizontal-line'/>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
            <p className='title555'>Been There, Run That</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="http://100.25.77.155/" target='_blank'><img className='projPhoto' src={beenThere} alt="screen shot of Been There, Run That App" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Online Community for Runners</p>
                    <p className='title333'>Java | Spring | MySQL</p>
                    <p className='title333'>Logged in users can create, edit, and delete their runs and also connect with other runners by cheering for them or requesting mile dedications. Runners can also upload photos from their runs. Passwords are hashed with Bcrypt. Deployed with AWS.</p>
                    <p className='title333'>Get your run on.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="http://100.25.77.155/" target='_blank'>Been There, Run That</a></button>
        </div>
        
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
        <p className='title555'>The Ballot Box</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <a href="https://github.com/angela-bereski/votingApp" target='_blank'><img className='projPhoto' src={ballotBox} alt="screen shot of the Ballot Box App" /></a>
                </div>
                <div className='projWords'>
                    <p className='title222'>Virtual Polling Center</p>
                    <p className='title333'>React.js | Tailwind | MongoDB</p>
                    <p className='title333'>CRUD online voting platform built with MERN stack.<br/>Logged in users can create, edit, and delete candidates. Voters can view candidates, and are limited to one vote per session. Passwords are hashed with Bcrypt. Utilizes exception handling, promises, and RESTful APIs. Deployed with AWS.</p>
                    <p className='title333'>Elect wisely.</p>
                </div>
                <button className="navButtonHome" onClick={()=> {audio.play()} }><a href="https://github.com/angela-bereski/votingApp" target='_blank'>Ballot Box Github</a></button>

            </div>
        </div>

        <span className='title666'>LOGO DESIGN</span>
        <hr className='horizontal-line'/>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <p className='title555'>WM HOA</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wmLogo} alt="screen shot of Massage School Website" />
                </div>
                
        </div>
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
          <p className='title555'>WM Clubhouse</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={wmClub} alt="screen shot of Been There, Run That App" />
                </div>
                
            </div>
            
        </div>
        <div className='projPage flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded'>
            <div className='leftSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
                <p className='title555'>PG Tech Creations</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={pgTech} alt="screen shot of Massage School Website" />
                </div>
        </div>
        <div className='rightSideProj flex-row flex p-1 justify-around flex-wrap rounded'>
          <p className='title555'>Mindful Campus</p>
                <div className='toolScroll flex-row flex p-1 justify-around flex-wrap rounded'>
                  <img className='projPhoto' src={mcLogo} alt="screen shot of Been There, Run That App" />
                </div>
              
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Projects