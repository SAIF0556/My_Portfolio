import React from "react"
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experince from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import './index.css'
const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experince />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App