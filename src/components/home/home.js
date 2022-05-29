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
    state = {  } 
   componentDidMount(){
       Aos.init()
   }
    render() { 
        return (
            <div className="home_container">
               
               {/* <div data-aos="fade-up"in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> */}
                    <div className="profile"  data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                  <img className="profile_pic" src={gokul} alt="pic" />
                  <div className="details">
                     <h1>GOKUL PM</h1>
                  <h2>Web & UI/UX Developer</h2>
                    <div className="icons"  >
                      <a href=""><img src={facebook} alt="" height="40px"  /></a>
                      <a href=""><img src={instagram} alt="" height="40px" /></a>
                      <a href=""><img src={twitter} alt="" height="40px" /></a>
                      <a href=""><img src={github} alt="" height="40px" /></a>
                      <a href=""><img src={linked} alt="" height="40px" /></a>

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