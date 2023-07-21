import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/me.png'
import Headersocials from './headersocials'
function header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>SM Saif</h1>
                <h5 className="text-light">Fullstack developer</h5>
                <CTA />
                <Headersocials />

                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">scroll down</a>
            </div>
        </header>
    )
}

export default header