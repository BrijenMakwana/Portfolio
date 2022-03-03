import React from 'react'
import "./ProjectList.css"
import ProjectItem from "../projectItem/ProjectItem" 

export default function ProjectList(props) {
  
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>{props.heading}</h1>
            <p className='pl-desc'>
            {props.description}
            </p>
        </div>
        <div className='pl-list'>
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
            />
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"  
            />
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
            />
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
            />
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
            />
            <ProjectItem 
              link="https://github.com/BrijenMakwana"
              image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
            />
        </div>
    </div>
  )
}
