import React from 'react'
import "./ProjectItem.css"

export default function ProjectItem(props) {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} alt="project" className='p-img'/>
      </a>
      <div className='p-info'>
        <h2 className='p-title'>{props.title}</h2>
        <p className='p-details'>
          {props.description}
        </p>
      </div>
      
    </div>
  )
}
