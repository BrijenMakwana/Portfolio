import React from 'react'
import "./Introduction.css"
import Me from "../../img/brijen.png"

const Introduction = (props) => {

  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>{props.name}</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        {
                            props.position && props.position.split(",").map((item,index)=>(
                                <div key={index} className='i-title-item' style={{color: props.randomColor}}>{item}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='i-desc'>
                    <b>Hello There! ✌🏻</b><br/>
                    <ul>
                        {
                            props.introduction && props.introduction.split(",").map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg' style={{backgroundColor: props.randomColor}}></div>
            <img className='i-img'
                src={Me} 
                alt='my_image'
            />
        </div>
    </div>
  )
}

export default Introduction