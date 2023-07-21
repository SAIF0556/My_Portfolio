import React from 'react'
import cv from '../../assets/resume.pdf'
function CTA() {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  )
}

export default CTA
