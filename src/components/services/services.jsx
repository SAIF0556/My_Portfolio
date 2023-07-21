import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'
function services() {
  return (
    <section id="services">
      <h5 className="text-light">What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <div className="services__content">
          <div className="services__card">
            <div className="card__heading">UI/UX Design</div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
          </div>
          {/* second card */}
          <div className="services__card">
            <div className="card__heading">Web Development</div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
            <div className="services__card__content">
              <AiOutlineCheck className="card__icon" />
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quas.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default services
