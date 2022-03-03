import React, { useEffect, useState } from 'react'
import "./Introduction.css"
import Me from "../../img/brijen.png"

const Introduction = (props) => {
    const [positions,setPositions] = useState([]);
    const [introduction,setIntroduction] = useState([]);


    const getPositions = () => {
        fetch("https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22position%22%5D%7B%0A%20%20title%0A%7D")
        .then((res) => res.json())
        .then((res) => {
            setPositions(res.result);
        })
    }

    const getIntroduction = () => {
        fetch("https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22introduction%22%5D%7B%0A%20%20title%0A%7D")
        .then((res) => res.json())
        .then((res) => {
        
            setIntroduction(res.result);
        })
    }

    useEffect(()=>{
        getPositions();
        getIntroduction();
    },[])

    
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>{props.name}</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        {
                            positions.map((item,index)=>(
                                <div key={index} className='i-title-item'>{item.title}</div>
                            ))
                        }
                    </div>
                </div>
                <div className='i-desc'>
                    <b>Hello There! ✌🏻</b><br/>
                    <ul>
                        {
                            introduction.map((item,index)=>(
                                <li key={index}>{item.title}</li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img className='i-img'
                src={Me} 
                alt='my_image'
            />
        </div>
    </div>
  )
}

export default Introduction