import React from 'react'
import AchievementItem from "../achievementItem/AchievementItem"
import "./AchievementList.css"

export default function AchievementList(props) {
  return (
    <div className='al'>
    <div className='al-texts'>
        <h1 className='al-title'>{props.heading}</h1>
        <p className='al-desc'>
        {props.description}
        </p>
    </div>
    <div className='al-list'>
        <AchievementItem
            link="https://github.com/BrijenMakwana"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210909130819/284_00_Socialmediapost-1.png"
        />
        <AchievementItem
            link="https://www.youtube.com/watch?v=fLanCWsjGrk&list=PLS1QulWo1RIb_tyiPyOghZu_xSiCkB1h4"
            image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
        <AchievementItem
            link="http://techbruce.com"
            image="https://secureservercdn.net/198.71.233.189/4ky.91a.myftpupload.com/wp-content/uploads/2020/04/techbruce.png"
        />
        
    </div>
</div>
  )
}
