import React from 'react'
import './contact.css'
import { CgMail } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'


function contact() {
    return (
        <section id='contact'>
            <h5 className="text-light">Get In Touch</h5>
            <h2>Conatct Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <CgMail className='contact__icon' />
                        <h4 className="contact__type">Email</h4>
                        <h5 className="contact__id">smsaif767@gmail.com</h5>
                        <a href="mailto:smsaif767@example.com " target='_blank' className="contact__link">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsGithub className='contact__icon' />
                        <h4 className="contact__type">Github</h4>
                        <h5 className="contact__id">SAIF0556</h5>
                        <a href="https://github.com/SAIF0556" target='_blank' className="contact__link">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__icon' />
                        <h4 className="contact__type">WhatsApp</h4>
                        <h5 className="contact__id">+917324923485</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917324923485" target='_blank' className="contact__link">Send a message</a>
                    </article>
                </div>
                <form action="" className="contact__form">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" rows="7" placeholder='your message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default contact