import React, { Component } from 'react';
import gokul from "../../images/gokul.jpeg"

import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import github from "../../images/github.png"

import linked from "../../images/linkedin.png"

import "./home.css"
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home_container">
               
                
                    <div className="profile">
                  <img className="profile_pic" src={gokul} alt="pic" />
                  <div className="details">
                     <h1>GOKUL PM</h1>
                  <h2>Web & UI/UX Developer</h2>
                    <div className="icons">
                      <a href=""><img src={facebook} alt="" height="40px" /></a>
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