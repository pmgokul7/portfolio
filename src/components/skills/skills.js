import React, { Component } from 'react';
import  Aos  from 'aos';
import "aos/dist/aos.css"
import "./skills.css"
import skills from "../../images/skills.png"
class Skills extends Component {
    state = {  } 
    componentDidMount()
    {
        Aos.init({duration:200})
    }
    
    render() { 
        return (
            <div className="skills_container">
                <div className="skills_icon"  data-aos="fade-up">
                <h1><span>S</span>kills</h1>
                 <img src={skills} alt="" height="60px" />
                 
                </div>
                
                <div  className="skill_bar">
                
                    <div className="left">
                    <h2>Technical skill</h2>
                         <div  className="lang"  data-aos="fade-up" data-aos-delay="100">
                             <h3>javascript</h3>
                             <div className="js_bar">
                                 <div className="js_progress common">
                                    <div className="circle">
                                        65%
                                    </div>
                                 </div>
                             </div>
                         </div>
                         <div className="lang"  data-aos="fade-up" data-aos-delay="300">
                             <h3>html</h3>
                             <div className="html_bar">
                                 <div className="html_progress common">
                                    <div className="circle">
                                        85%
                                    </div>
                                 </div>
                             </div>
                         </div>




                         <div className="lang"  data-aos="fade-up" data-aos-delay="500">
                             <h3>python</h3>
                             <div className="python_bar">
                                 <div className="python_progress common">
                                    <div className="circle">
                                        60%
                                    </div>
                                 </div>
                             </div>


                         </div> 
                         <div className="lang"  data-aos="fade-up" data-aos-delay="700">
                             <h3>react</h3>
                             <div className="react_bar">
                                 <div className="react_progress common">
                                    <div className="circle">
                                        80%
                                    </div>
                                 </div>
                             </div>
                         </div>
                         <div className="lang"  data-aos="fade-up" data-aos-delay="900">
                             <h3>java</h3>
                             <div className="java_bar">
                                 <div className="java_progress common">
                                    <div className="circle">
                                        70%
                                    </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                    <div className="right">
                    <h2>Proffessional skill</h2>
                    <div className="pro"  data-aos="fade-up" data-aos-delay="100">
                        <h3>Communication</h3>
                        <div className="communication_bar">
                            <div className="communication_progress common">
                            <div className="circle">
                                        75%
                                    </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="pro"  data-aos="fade-up" data-aos-delay="300">
                        <h3>Teamwork</h3>
                        <div className="teamwork_bar">
                            <div className="teamwork_progress common">
                            <div className="circle">
                                        80%
                                    </div>
                            </div>
                        </div>

                        
                    </div>


                    <div className="pro"  data-aos="fade-up" data-aos-delay="500">
                        <h3>Creativity</h3>
                        <div className="creativity_bar">
                            <div className="creativity_progress common">
                            <div className="circle">
                                        40%
                                    </div>
                            </div>
                        </div>

                        
                    </div>



                    <div className="pro"  data-aos="fade-up" data-aos-delay="700">
                        <h3>Dedication</h3>
                        <div className="dedication_bar">
                            <div className="dedication_progress common">
                            <div className="circle">
                                        70%
                                    </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="pro"  data-aos="fade-up" data-aos-delay="900">
                        <h3>Project Management</h3>
                        <div className="management_bar">
                            <div className="management_progress common">
                            <div className="circle">
                                        60%
                                    </div>
                            </div>
                        </div>

                        
                    </div>


                    
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Skills;