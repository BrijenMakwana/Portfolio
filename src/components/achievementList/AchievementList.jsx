import React, { useState,useEffect } from 'react'
import AchievementItem from "../achievementItem/AchievementItem"
import "./AchievementList.css"

export default function AchievementList(props) {
    const [achievements,setAchievements] = useState([]);

    const getAchievements = () => {
        fetch(
          "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22achievements%22%5D%20%7C%20order(_createdAt%20asc)%7B%0A%20%20_createdAt%2C%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20description%2C%0A%20%20url%0A%7D"
        )
          .then((res) => res.json())
          .then((res) => {
              
              setAchievements(res.result);
          });
      };
    
      useEffect(() => {
        getAchievements();
      }, []);

  return (
    <div className='al'>
    <div className='al-texts'>
        <h1 className='al-title'>{props.heading}</h1>
        <p className='al-desc'>
          {props.description}
        </p>
    </div>
    <div className='al-list'>
        {
            achievements && achievements.map((item,index)=>(
                <AchievementItem 
                    key={index} 
                    title={item.title} 
                    imageUrl={item.imageUrl} 
                    url={item.url} 
                    description={item.description}/>
            ))
        }
        
    </div>
</div>
  )
}
