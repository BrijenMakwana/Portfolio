import React from 'react'
import "./AppItem.css"

export default function AppItem(props) {
  return (
    <div className='ai'>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="project" className='ai-img'/>
      </a>
      <div className='ai-info'>
        <h2 className='ai-title'>Red Recipe</h2>
      </div>
      
    </div>
  )
}
