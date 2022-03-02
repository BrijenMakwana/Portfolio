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
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="project" className='p-img'/>
      </a>
      <div className='p-info'>
        <h2 className='p-title'>Recipe App</h2>
        <p className='p-details'>
          It's a mobile app crated with React native. It will show recipes from all over the internet. You can also search for recipes and videos.
          It's a mobile app crated with React native. It will show recipes from all over the internet. You can also search for recipes and videos.
        </p>
      </div>
      
    </div>
  )
}
