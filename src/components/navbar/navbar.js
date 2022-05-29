import React, { Component } from 'react';
import "./navbar.css"
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
           <div className="navbar_container">
               <div className="left_navbar">
                  <h1><span>G</span></h1>
               </div>
               <div className="right_navbar">
                      <a href="#">Home</a>
                      <a href="#">About</a>
                      <a href="#">Skills</a>
                      <a href="#">Contact</a>

               </div>
           </div>

        );
    }
}
 
export default Navbar;