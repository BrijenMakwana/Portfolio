import React from 'react'
import "./Introduction.css"
import Me from "../../img/brijen.png"

const Introduction = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My Name is</h2>
                <h1 className='i-name'>Brijen</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Mobile Developer</div>
                        <div className='i-title-item'>YouTube Content Creator</div>
                        <div className='i-title-item'>Technical Content Writer</div>
                        <div className='i-title-item'>Blogger</div>
                    </div>
                </div>
                <div className='i-desc'>
                    <b>Hello There! ✌🏻</b><br/>
                    <ul>
                        <li>I'm a Software Developer always looking to build cool projects and work with awesome people! 🧪</li>
                        <li> Love building mobile applications using React Native 📱</li>
                        <li>Content creator at YouTube channel ProgrammingKnowledge(> 1.5M Subscribers) 🎥</li>
                        <li>Technical content writer at GeeksforGeeks ✍🏻</li>
                        <li>Tech News writer at my own blog 📰</li>
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