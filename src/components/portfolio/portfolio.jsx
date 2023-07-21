import React from 'react'
import './portfolio.css'
import p1 from '../../assets/portfolio1.jpg'
import p2 from '../../assets/portfolio2.jpg'
import p3 from '../../assets/portfolio3.jpg'
import p4 from '../../assets/portfolio4.jpg'
import p5 from '../../assets/portfolio5.png'
import p6 from '../../assets/portfolio6.jpg'


function portfolio() {
    return (
        <section id='portfolio'>
            <h5 className="text-light">My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p1} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn  card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p2} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn btn-primary card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p3} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn btn-primary card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p4} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn btn-primary card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p5} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn btn-primary card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="portfolio__card">
                    <div className="portfolio__card__content">
                        <img src={p6} alt="p1" className="portfolio__image" />
                        <h3 className="card__detail">Crypto Currency Dashboard & Financial Visualization</h3>
                        <div className="card__btns">
                            <a href="http::/github.com" className="btn btn-primary card__btn">GithHub</a>
                            <a href="http::/github.com" className="btn btn-primary card__btn">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default portfolio