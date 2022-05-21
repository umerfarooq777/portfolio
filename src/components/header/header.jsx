import React from 'react'
import CTA  from './CTA'
import "./header.css"
import TypeWriterEffect from 'react-typewriter-effect';
import ME from "../../assets/image/me.png"
import HeaderSocials from "./headerSocials"

const header = () => {
 
  var data1 ="<"
  var data2 ="/>"
  
  return (
    <>
    <header id='home'>
    <div className="container header_container">
      <h5>Hello I'm</h5>
     <h1 className='myname'><span className='sym'>{data1}</span> UMER FAROOQ <span className='sym'>{data2}</span></h1>
      {/* <p style={{display:inline-block}}>{data}</p><h1>{data1}</h1><p></p> */}
      <h5 className="text-light post">
   
      <TypeWriterEffect
        textStyle={{
          textAlign:'center',
          fontFamily: 'Poppins',
          color: 'var(--color-light)',
          fontWeight: 400,
          fontSize: '1.25em',
        }}
        startDelay={2000}
        cursorColor="var(--color-light)"
        multiText={[
          'MERN Stack Developer ',
          'UI-UX Designer',
          'Creative Artist',
         
        ]}
        
        loop={true}
        nextTextDelay={2000}
        
        typeSpeed={50}
      />
          </h5>
      <CTA/>
      <HeaderSocials/>
      
      <div className="me">
         <img src={ME} alt="me" />
       </div>
<a href="#contact" className='scroll_down'>Scroll Down </a>




    </div>
  </header>
    </>
  )
}

export default header