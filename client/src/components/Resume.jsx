import React from 'react'
import { useState } from 'react'
import '../Skills.css'
import reactLogo from '../assets/react-2.svg'
import jsLogo from '../assets/javascript-1.svg'
import javaLogo from '../assets/java-4.svg'
import pythonLogo from '../assets/python-5.svg'
import htmlLogo from '../assets/html-1.svg'
import cssLogo from '../assets/css-3.svg'
import bootstrapLogo from '../assets/bootstrap-4.svg'
import tailwindLogo from '../assets/tailwind-css-2.svg'
import mongoLogo from '../assets/mongodb-icon-1.svg'
import mongooseLogo from '../assets/mongoose-1.svg'
import mysqlLogo from '../assets/mysql-6.svg'
import nodeLogo from '../assets/nodejs-icon.svg'
import awsLogo from '../assets/aws-logo.svg'
import springLogo from '../assets/spring-3.svg'
import resume from '../assets/AB-TechnicalResume2023.pdf'
import buttonSound from '../assets/mixkit-cool-interface-click-tone-2568.wav'
import {useNavigate} from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import "react-pdf/dist/esm/Page/AnnotationLayer.css"


const Resume = () => {
  const navigate = useNavigate();
  const audio = new Audio(buttonSound)

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (

    <div className='skillsMain flex p-1 justify-around flex-wrap rounded'>
      <div className='leftSide'>
        <Document className="docu"
        file={resume}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false}/>
        </Document>
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button className="navButtonHome" type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button className="navButtonHome"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <div className='rightSide'>
        <div className='toolScroll flex lg:flex-col md:flex-row'>
          <span className='title55'>Technical Skills</span>
            <div className='logos'>
                <img src={pythonLogo} alt="Python Logo" />
                <img src={jsLogo} alt="Javascript Logo" />
                <img src={javaLogo} alt="Java Logo" />
                <img src={htmlLogo} alt="HTML5 Logo" />
                <img src={cssLogo} alt="CSS Logo" />
                <img src={reactLogo} alt="React Logo" />
                <img src={nodeLogo} alt="Node.js Logo" />
            </div>
            <div className='logos2'>
                <img src={bootstrapLogo} alt="Bootstrap Logo" />
                <img src={tailwindLogo} alt="Tailwind Logo" />
                <img src={mongoLogo} alt="MongoDB Logo" />
                <img src={mongooseLogo} alt="Mongoose Logo" />
                <img src={mysqlLogo} alt="MySQL Logo" />
                <img src={awsLogo} alt="AWS Logo" />
                <img src={springLogo} alt="Spring Logo" />
            </div>
        </div>
        <button className="navButtonHome" onClick={()=> {audio.play()} }><a href = {resume} target = "AngelaBereskiResume">Download My Resume</a></button>
      </div>
    </div>

  )
}

export default Resume