import React from 'react'
import "./AchievementItem.css"

export default function AchievementItem(props) {
  return (
    <div className='ac'>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt="project" className='ac-img'/>
      </a>
      <div className='ac-info'>
        <h2 className='ac-title'>{props.title}</h2>
        <p className='ac-details'>
          {props.description}
        </p>
      </div>
      
    </div>
  )
}
