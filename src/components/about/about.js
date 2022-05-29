import React, { Component } from 'react';
import about from "../../images/about.png"
import camera from "../../images/camera.svg"
import coffee from "../../images/coffee.svg"
import money from "../../images/money.svg"
import games from "../../images/games.svg"
import travel from "../../images/travel.svg"
import music from "../../images/music.svg"
import car from "../../images/car.svg"
import "./about.css"
class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className="about_container">
                <div className="aboutme_container">
                       <img src={about} alt="about icon" height="60px" width="60px"/>
                       <h1>About me</h1>
                       
                </div>
                <div className="about_discription">
                    <p><span>Hello! I’m Gokul</span>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor nunc, vitae posuere nibh malesuada sed. In nec tortor eu nibh tristique vehicula sed in lectus. Phasellus vitae accumsan tortor. Fusce ac vestibulum ante</p>

                </div>
                <div className="interest">
                     <div className="left_interest">
                         <h2>Personal Details</h2>
                         <div className="det">
                              <p><span>Birthdate</span></p><p>06-04-2002</p>
                          <p><span>Phone</span></p><p>+91 8592929642</p>
                          <p><span>Email</span></p><p>pmgokul7@gmail.com</p>
                          <p><span>Phone</span></p><p>+91 8592929642</p>
                          <p><span>Email</span></p><p>pmgokul7@gmail.com</p>
                         </div>
                         
                     </div>
                     <div className="right_interest">
                          <h2>My Interests</h2>
                          <div className="interest_icons">
                              
                              
                              <div className="interest_ic"> <img src={travel} height="40px"/>
                              <h3>travel</h3>
                              </div>
                              <div className="interest_ic"> <img src={games}  height="40px"/>
                              <h3>games</h3></div>
                              <div className="interest_ic"> <img src={car}  height="40px"/>
                              <h3>travel</h3></div>
                              <div className="interest_ic"> <img src={camera}  height="40px"/>
                              <h3>camera</h3></div>
                              <div className="interest_ic"> <img src={coffee}  height="40px"/>
                              <h3>coffee</h3></div>
                              <div className="interest_ic"> <img src={music}  height="40px"/>
                              <h3>music</h3></div>
                              <div className="interest_ic"> <img src={money}  height="40px"/>
                              <h3>money</h3></div>
                              <div className="interest_ic"> <img src={car}  height="40px"/>
                              <h3>car</h3></div>
                          </div>
                         

                     </div>
                </div>
                <button className='cv'>
                    
                    Download cv
                </button>
            </div>
        );
    }
}
 
export default About;