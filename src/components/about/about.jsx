import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import { BsPeople } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { AiOutlineFolderOpen } from 'react-icons/ai'

function about() {
  return (
    <section id="about">
      <h5 className="text-light">Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <BsPeople className="about__icon" />
              <h5>Experince</h5>
              <small className="text-light">Beginner</small>
            </div>
            <div className="about__card">
              <IoIosPeople className="about__icon" />
              <h5>Clients</h5>
              <small className="text-light">2+ worldwide</small>
            </div>
            <div className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small className="text-light">5+ completed</small>
            </div>
          </div>
          <p className="text-light">
            "Hello! I am a computer science student specializing in web
            development. Currently, I am pursuing a degree in Computer Science
            from [Name of Institution]. Over the past few years, I have gained
            hands-on experience in web development through internships and
            personal projects. I am constantly learning and expanding my skill
            set to achieve my career goals. If you're interested in working with
            me on a project or have any questions, please feel free to get in
            touch with me through the contact form on my website. I am always
            open to new opportunities and collaborations. Thank you for visiting
            my website!"
          </p>
          <a href="#contact" className="btn btn-primary about__btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default about
