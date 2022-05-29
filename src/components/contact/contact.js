import React, { Component } from 'react';
import "./contact.css"
import contact from "../../images/contact.png"
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="contact_container">
                <div className="contact_ic">
                   <img src={contact} alt="contact icon"/>
                   <h1>Contact me</h1>
                   
                </div>
                <div className="info">
                    
                
                <div className="contact_left">
                <form action="">
                        <input type="text" placeholder='Your Name'/>
                        <input type="text" placeholder='Phone Number'/>
                        <input type="text" placeholder='Email Address'/>
                        <input type="text" placeholder='Subject'/>
                        {/* <input id="message_box" type="text" placeholder='Message'/> */}
                        <textarea maxLength="250" placeholder='Message' id="message_box" ></textarea>
                    </form>
                </div>
                <div className="contact_right">
                   
                    
                </div>
                
                </div>
                <button className='message' >
                    
                   Send Message
                </button>
                
            </div>
        );
    }
}
 
export default Contact;