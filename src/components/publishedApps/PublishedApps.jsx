import React from 'react'
import "./PublishedApps.css"
import AppItem from "../appItem/AppItem"

export default function PublishedApps() {
  return (
    <div className='pa'>
    <div className='pa-texts'>
        <h1 className='pa-title'>Published Apps on Play Store</h1>
        <p className='pa-desc'>
        I have multiple apps published on Android Play Store. ALl of them are listed below.
        </p>
    </div>
    <div className='pa-list'>
        <AppItem
            link="https://github.com/BrijenMakwana"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210909130819/284_00_Socialmediapost-1.png"
        />
        <AppItem
            link="https://github.com/BrijenMakwana"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210909130819/284_00_Socialmediapost-1.png"
        />
        <AppItem
            link="https://github.com/BrijenMakwana"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210909130819/284_00_Socialmediapost-1.png"
        />
        
    </div>
</div>
  )
}
