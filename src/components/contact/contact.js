import React, { Component } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import "./contact.css"
import contact from "../../images/contact.png"
class Contact extends Component {
    state = { uname:"",ph:"",email:"",sub:"",message:"" } 
    componentDidMount()
    {
        Aos.init({duration:500})
    }
    render() { 
        return (
            <div className="contact_container">
                <div className="contact_ic" data-aos="fade-up">
                   <img src={contact} alt="contact icon" height="60px"/>
                   <h1>Contact me</h1>
                   
                </div>
                <div className="info">
                    
                
                <div className="contact_left">
                <form action="">
                        <input type="text" value={this.state.uname} onChange={(e)=>this.setState({uname:e.target.value})} placeholder='Your Name' data-aos="fade-up"/>
                        <input type="text"  value={this.state.ph} onChange={(e)=>this.setState({ph:e.target.value})} placeholder='Phone Number' data-aos="fade-up"/>
                        <input type="text"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} placeholder='Email Address' data-aos="fade-up"/>
                        <input type="text"  value={this.state.sub} onChange={(e)=>this.setState({sub:e.target.value})} placeholder='Subject' data-aos="fade-up"/>
                        {/* <input id="message_box" type="text" placeholder='Message'/> */}
                        <textarea value={this.state.smessage} onChange={(e)=>this.setState({message:e.target.value})} data-aos="fade-up" maxLength="250" placeholder='Message' id="message_box" ></textarea>
                    </form>
                </div>
                <div className="contact_right">
                   
                    
                </div>
                
                </div>
                <button className='message' onClick={()=>console.log(this.state)}>
                    
                   Send Message
                </button>
                <h5 onClick={()=>this.setState({uname:"",ph:"",email:"",message:"",sub:""})}>clear</h5>
                
            </div>
        );
    }
}
 
export default Contact;