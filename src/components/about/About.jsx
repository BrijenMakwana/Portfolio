import React from 'react'
import "./About.css"
import Me from "../../img/brijen_black.png"

export default function About() {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src={Me} alt="my_image" className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            I'm a Software Developer always looking to build useful project that can help people and solve meaningful proplems.
            </p>
            <p className='a-desc'>
            I Love building mobile applications. React Native is my first choice to create cross platform applications. I have many apps published on Play Store.
            I have been creating YouTube vidoes on Progemmingknowledge channel since 2018.
            I also like writing and have contibuted mulitple articles on GeeksforGeeks.
            I also have my own blog called TechBruce where I create articles about latest tech and gadgets.
            </p>
        </div>
    </div>
  )
}
