import React, { Component } from 'react';
import gokul from "../../images/gokul.jpeg"
import  Aos  from 'aos';
import "aos/dist/aos.css"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import github from "../../images/github.png"

import linked from "../../images/linkedin.png"

import "./home.css"

class Home extends Component {
 
   componentDidMount(){
       Aos.init()
   }
    render() { 
        return (
            <div className="home_container">
                 <div className="navbar_container">
               <div className="left_navbar">
                  <h1><span>G</span></h1>
               </div>
               <div className="right_navbar">
                    
                       <a href="#">Home</a>
                  

                      
                      <a>About</a>
                      <a href="#">Skills</a>
                      <a href="#">Contact</a>

               </div>
           </div>
               
               {/* <div data-aos="fade-up"in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> */}
                    <div className="profile"  data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                  <img className="profile_pic" src={gokul} alt="pic" />
                  <div className="details">
                     <h1>GOKUL PM</h1>
                  <h2>Web & UI/UX Developer</h2>
                    <div className="icons"  >
                      <a href="https://www.facebook.com/gokul.pm.144/" target="_blank"><img src={facebook} alt="" height="40px"  /></a>
                      <a href="https://instagram.com/pm_gokul_?igshid=YmMyMTA2M2Y=" target="_blank"><img src={instagram} alt="" height="40px" /></a>
                      <a href=""><img src={twitter} alt="" height="40px" /></a>
                      <a href="https://github.com/pmgokul7" target="_blank"><img src={github} alt="" height="40px" /></a>
                      <a href="https://www.linkedin.com/in/pmgokul-7-07a377212" target="_blank"><img src={linked} alt="" height="40px" /></a>

                  </div>
                  </div>
                 
                  
                     
                 </div> 
                
              
                

                 
            </div>
        );
    }
}
 
export default Home;
<div className="home_container">

</div>