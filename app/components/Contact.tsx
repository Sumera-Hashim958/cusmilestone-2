import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import "@/app/styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
        <div className="contact-box">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">Get in touch</h2>
                <p className="contact-text" data-aos="zoom-in-up">Let&apos;s connect! Call me, &quot;message me,&quot; or use the form to drop a line.</p>
                <div className="contact-flex" data-aos="zoom-in-up">
                    <AiOutlineMail size={30}/> sumerahashim208@gmail.com
                </div>
                <div className="contact-flex" data-aos="zoom-in-up">
                    <BsTelephone size={30}/> +92 3093671527
                </div>
            </div>
            <div className="contact-space">
            <div className="form" data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" className="input-field" id="Name"/>
            </div>
            <div className="form" data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" className="input-field" id="email"/>
            </div>
            <div className="form" data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea className="textarea-field" id="msg" rows={8}></textarea>
            </div>
            <button className="button" data-aos="zoom-in-up">Send Message</button>
            </div>
        </div>    
    </div>
  )
}

export default Contact
