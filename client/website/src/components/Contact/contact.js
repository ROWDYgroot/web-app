import React, { useRef } from 'react'
import Walmart from "../../assets/walmart.png"
import Adobe from "../../assets/adobe.png"
import Microsoft from "../../assets/microsoft.png"
import Facebook from  "../../assets/facebook.png"
import FacebookIcon from '../../assets/facebook-icon.png'
import TwiterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_84r8fbi', 'template_nik42kq', form.current, 'IfM4go62NxDIo-f37wjaB')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent')
          }, (error) => {
              console.log(error.text);
        });
    };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'></p>
            <div className='clientImgs'>
                <img src={Walmart} alt='client' className='clientImg'/>
                <img src={Adobe} alt='client' className='clientImg'/>
                <img src={Microsoft} alt='client' className='clientImg'/>
                <img src={Facebook} alt='client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'></span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='' className='link'/>
                    <img src={TwiterIcon} alt='' className='link'/>
                    <img src={YouTubeIcon} alt='' className='link'/>
                    <img src={InstagramIcon} alt='' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact