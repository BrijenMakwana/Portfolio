import React from 'react'
import "./AppItem.css"

export default function AppItem(props) {
  return (
    <div className='ai'>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt="project" className='ai-img'/>
      </a>
      <div className='ai-info'>
        <h2 className='ai-title'>{props.title}</h2>
      </div>
      
    </div>
  )
}
