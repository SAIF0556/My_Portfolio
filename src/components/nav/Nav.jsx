import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { BsBookmarkCheck } from 'react-icons/bs'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { AiOutlineWechat } from 'react-icons/ai'
const Nav = () => {
    const [activeNav, setActive] = useState('#')


    return (
        <nav>
            <a onClick={() => setActive('#')} href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a onClick={() => setActive('#about')} href="#about" className={activeNav === '#about' ? 'active' : ''}><BsPersonFill /></a>
            <a onClick={() => setActive('#experience')} href="#experience" className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkCheck /></a>
            <a onClick={() => setActive('#services')} href="#services" className={activeNav === '#services' ? 'active' : ''}><MdOutlineSupportAgent /></a>
            <a onClick={() => setActive('#contact')} href="#contact" className={activeNav === '#contact' ? 'active' : ''}><AiOutlineWechat /></a>
        </nav>
    )
}

export default Nav