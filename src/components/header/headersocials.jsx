import React from 'react'
import { RiDribbbleLine } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import { AiFillGithub } from 'react-icons/ai'
function headersocials() {
    return (
        <div className='headersocials'>
            <a href="https://linkedIn.com" target="_blank"><CiLinkedin /></a>
            <a href="https://github.com" target="_blank"><AiFillGithub /></a>
            <a href="https://dribble.com" target="_blank"><RiDribbbleLine /></a>

        </div>
    )
}

export default headersocials