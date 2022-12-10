import React from 'react'
import "./about.css"
import me_ from "../../assets/image/me.png"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {VscFolderActive} from "react-icons/vsc"
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';


const about = () => {
  return (
    <>
    <section id="about" className='container about'>
      {/* About Start */}
    <h5>Get To Know</h5>
    <h2>About me</h2>
    <div className='about-container'>

       {/* My image div  */}
       
      {/* <div className="about-me">
        <div className="about-me-image" >
          <img src={me_} alt='About Image'/>
        </div>
        </div> */}
        <Fade left><div className="container-port">
            <div className="parent box"></div>
            <div className="child box"><img className="child-img"src={me_} alt='About Image'/></div>
        </div></Fade>



       {/* My details div  */}
    <Fade right cascade><div className="about-content">

              <p>
              I am an undergraduate software 
engineering student,web developer and 
designer, with creative design ideas for 
innovative and tech solutions.

                </p>


                <Fade bottom cascade delay={500}><div className="about-cards">

              <div className="about-card">
                  <FiUsers className="about-icon"/>
                  <h5>Clients</h5>
                  <small>
                  <CountUp end={10} redraw={true} />
                  + World Wide
                  </small>
                </div>

                <div className="about-card">
                  <FiAward className="about-icon"/>
                  <h5>Experience</h5>
                  <small><CountUp end={3} redraw={true}/>+ Years working</small>
                </div>

              

                <div className="about-card">
                  <VscFolderActive className="about-icon"/>
                  <h5>Projects</h5>
                  <small><CountUp end={30} />+ Completed</small>
                </div>

              </div></Fade>

        

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </Fade>
    </div>
    </section>
    </>
  );
}

export default about