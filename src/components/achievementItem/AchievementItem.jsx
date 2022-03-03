import React from 'react'
import "./AchievementItem.css"

export default function AchievementItem(props) {
  return (
    <div className='ac'>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="project" className='ac-img'/>
      </a>
      <div className='ac-info'>
        <h2 className='ac-title'>Technical Content Writer</h2>
        <p className='ac-details'>
          I have muliple articles published at GeeksforGeeks
          I have muliple articles published at GeeksforGeeks
        </p>
      </div>
      
    </div>
  )
}
