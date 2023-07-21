import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
function experience() {
  return (
    <section id="experience">
      <h5 className="text-light">What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h4>Frontend Development</h4>
          <div className="experience__content">
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>EJS</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h4>Backend Development</h4>
          <div className="experience__content">
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
            <article className="experience__details">
              {' '}
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Google cloud </h4>
                <small className="text-light">Intermediate </small>
              </div>{' '}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
