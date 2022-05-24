import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'

const contact = () => {
  return (
    <>
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">

      
       {/*START OF CONTACT OPTIONS*/}
       <div className="contact_options">
         <article className="contact_option">
           <MdOutlineEmail className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>uf80902@gmail.com</h5>
            <a href="mailto: uf80902@gmail.com" target="_blank"> Send a message </a>
         </article>
         <article className="contact_option">
           <RiMessengerFill className="contact_option_icon"/>
            <h4>Messenger</h4>
            <h5>Umer Farooq</h5>
            <a href="https://m.me/umer.farooq" target="_blank"> Send a message </a>
         </article>
         <article className="contact_option">
           <ImWhatsapp className="contact_option_icon"/>
            <h4>What'sApp</h4>
            <h5>+92 310 0276796</h5>
            <a href="https://wa.me/+923100276796" target="_blank"> Send a message </a>
         </article>
       </div>
       {/*END OF CONTACT OPTIONS*/}

       
       <form action="">
              <input type="text"name='name'placeholder='Your Full Name'required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder="Your Message" required/>
              <button type='submit' className="btn btn-primary">Send Message</button>   
       </form>
    </div>
  </section>
    </>
  )
}

export default contact