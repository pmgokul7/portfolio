
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import s  from "./images/facebook.png"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    
      
      
   

    </div>
  );
}

export default App;
