import React from 'react'
import './experiance.css'
import Progressbar from './progress_bar';
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'

import ProgressBar from 'react-animated-progress-bar';
import {GrNode} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {FaPython} from 'react-icons/fa'


import { Fade } from 'react-reveal';

const experiance = () => {
  return (
    <>
   <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience </h2>

      <div className="container experience_container">

        {/* FRONTEND */}
        <div className="experience_frontend">
        <h3>Frontend Development</h3>
       <div className="experience_content">
          
          <article className='experience_details'>
              <div>
                <div className='box'>
                  <SiHtml5 className='experience_details_icon'/>
                    <h4>HTML</h4>
                </div>
                <Progressbar level="75"/>
              </div>          
          </article>
          
          <article className='experience_details'>              
              <div>
                <div className='box'>
                    <SiCss3 className='experience_details_icon'/>
                    <h4>CSS</h4>
                </div>
                <Progressbar level="80" />
              </div>         
          </article>
          
          <article className='experience_details'>
              <div>
                <div className="box">
                  <SiJavascript className='experience_details_icon'/>
                  <h4>JavaScript</h4>
                </div>
                <Progressbar level="60"/>
              </div>          
          </article>

          
          
          <article className='experience_details'>
              <div>
                <div className="box">
              <SiTailwindcss className='experience_details_icon'/>

                <h4>Tailwind</h4>
                </div>
                <Progressbar level="20"/>
              </div>          
          </article>
          
          <article className='experience_details'>
              <div>
                <div className="box">
              <SiBootstrap className='experience_details_icon'/>

                <h4>Bootstrap</h4>
                </div>
                <Progressbar level="55"/>
              </div>          
          </article>
          
          <article className='experience_details'>
              <div><div className="box">
              <SiReact className='experience_details_icon'/>

                <h4>React</h4>
              </div>
                <Progressbar level="40"/>
              </div>          
          </article>




        </div>
        </div>


        {/* FRONTEND */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          
          <article className='experience_details'>
              <div>
                <div className='box'>
                  <GrNode className='experience_details_icon'/>
                    <h4>Node JS</h4>
                </div>
                <Progressbar level="35"/>
              </div>          
          </article>
          
          <article className='experience_details'>              
              <div>
                <div className='box'>
                    <SiMongodb className='experience_details_icon'/>
                    <h4>MongoDB</h4>
                </div>
                <Progressbar level="50"/>
              </div>         
          </article>
          
          <article className='experience_details'>
              <div>
                <div className="box">
                  <FaPhp className='experience_details_icon'/>
                  <h4>PHP</h4>
                </div>
                <Progressbar level="30"/>
              </div>          
          </article>

          
          
          <article className='experience_details'>
              <div>
                <div className="box">
              <GrMysql className='experience_details_icon'/>

                <h4>MySQL</h4>
                </div>
                <Progressbar level="20"/>
              </div>          
          </article>
          
          <article className='experience_details'>
              <div>
                <div className="box">
              <FaPython className='experience_details_icon'/>

                <h4>Python</h4>
                
                </div>
                
                <Progressbar level="35"/>
              </div>
                      
          </article>
          
          




        </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default experiance