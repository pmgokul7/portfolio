
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import s  from "./images/facebook.png"
import {useRef} from "react"

function App() {

  const aboutref=useRef(null)
  const skillsref=useRef(null)
  const contactref=useRef(null)
  const homeref=useRef(null)
 
  return (
    <div className="App">
         <div className="navbar_container">
               <div className="left_navbar">
                  <h1><span>G</span></h1>
               </div>
               <div className="right_navbar">
                    
                       <a onClick={()=>homeref.current.scrollIntoView()}>Home</a>            
                      <a onClick={()=>aboutref.current.scrollIntoView()}>About</a>
                      <a onClick={()=>skillsref.current.scrollIntoView()}>Skills</a>
                      <a onClick={()=>contactref.current.scrollIntoView()}>Contact</a>

               </div>
              
           </div>
        <div className="home" ref={homeref}>
              <Home/>
        </div>
        <div className="about" ref={aboutref}>
        <About/>
        </div>

    <div className="skil" ref={skillsref}>
    <Skills />
    </div>
    
    <div className="contact" ref={contactref}>
       <Contact/>
    </div>
     
   
    
     
      
   
    
    </div>
  );
}

export default App;
