import React from 'react'
import "./SkillItem.css"

export default function SkillItem(props) {
  return (
    <div className='s'>
      <img src={props.imageUrl} alt={props.title} className='s-img'/>
      <div className='s-info'>
        <h2 className='s-title'>{props.title}</h2>
      </div>
      
    </div>
  )
}
