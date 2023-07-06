import './Contact.css';
import React from 'react';
import phone from '../../images/icons8-ringer-volume-48.png';
import email from '../../images/icons8-email-48 (1).png';
import address from '../../images/icons8-address-48.png';
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact=()=>{
    const formRef = useRef()

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        'service_vvpko58', 
        'template_fhs1z5j', 
        formRef.current, 'aZGMA5jvO5aMwel0v'
      )
        .then((result) => {
          toast.success("Message Sent! Thank you..");
        }, (error) => {
          toast.error("Error! Resend message..");
          console.log(error.text);
        });
    }
return(
   <section className='contact container section' id='contact'>
    <h1 style={{textAlign:'center'}}>Get In Touch</h1>
    <div className='contact_container grid'>
        <div className='contact_info'>
            <h2 className='contact_title'>Let's talk about your project! Send me an Email </h2>
            <div className='contact_item'>
                <img src={phone} className='c_icon'/>+91 9894149096
            </div>
            <div className='contact_item'>
                <img src={email} className='c_icon'/>dharmalingamrandd@gmail.com
            </div>
            <div className='contact_item'>
                <img src={address} className='c_icon'/>RVR Nagar,Thuraiyur Main Road,Musiri,Trichy-621211
            </div>

        </div>
        <form ref={formRef} onSubmit={handleSubmit} className='contact_form'>
            <input type='text' className='contact_form-input' placeholder='Name'/>
            <input type='email' className='contact_form-input' placeholder='Email'/>
            <input type='text' className='contact_form-input' placeholder='Subject'/>
            <textarea name="message" cols="30" rows="5" placeholder="Write your message" className='contact_form-input'></textarea>
            <button className='btn'>Send Message</button>
        </form>
    </div>
   </section>
)
}

export default Contact;