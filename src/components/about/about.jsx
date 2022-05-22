import React from 'react'
import "./about.css"
import me_ from "../../assets/image/me.png"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {VscFolderActive} from "react-icons/vsc"
import CountUp from 'react-countup';
// import { CountUp } from 'use-count-up'
import VisibilitySensor from 'react-visibility-sensor';



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
        <div class="container-port">
            <div class="parent"></div>
            <div class="child"><img src={me_} alt='About Image'/></div>
        </div>



       {/* My details div  */}
      <div className="about-content">

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem
        maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi
        amet repellat molestias quos totam.
        </p>


        <div className="about-cards">

        <div className="about-card">
            <FiUsers className="about-icon"/>
            <h5>Clients</h5>
            <small>
            <CountUp end={100} redraw={true} />
            + World Wide
            </small>
          </div>

          <div className="about-card">
            <FiAward className="about-icon"/>
            <h5>Experiance</h5>
            <small><CountUp end={100} redraw={true}/>+ Years working</small>
          </div>

         

          <div className="about-card">
            <VscFolderActive className="about-icon"/>
            <h5>Projects</h5>
            <small><CountUp end={30} />+ Completed</small>
          </div>

        </div>

        

        <a href="#contact" className="btn btn-primary">Let's Talk</a>

      </div>
    </div>
    </section>
    </>
  );
}

export default about