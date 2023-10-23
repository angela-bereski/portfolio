import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Hamburger from './components/Hamburger';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WswGallery from './components/WswGallery';
import McGallery from './components/McGallery';
import BbGallery from './components/BbGallery';


function App() {
  return (
    <div className="App" id="outer-container">
      {/* <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <BrowserRouter id="page-wrap">
      <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <NavBar /> 
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Resume />} path="/resume" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<WswGallery />} path="/wswgallery" />
          <Route element={<McGallery />} path="/mcgallery" />
          <Route element={<BbGallery />} path="/bbgallery" />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
