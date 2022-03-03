import React from 'react'
import "./About.css"
import Me from "../../img/brijen_black.png"

export default function About(props) {

  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src={Me} alt="my_image" className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
              {props.title}
            </p>
            <p className='a-desc'>
              {props.description}
            </p>
        </div>
    </div>
  )
}
