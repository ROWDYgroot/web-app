import React from 'react'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What i do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in HTML, CSS and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='skillBars'>
            <div className='skilBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> UI/UX design</h2>
                    <p>This is a demo text, you can write your own component here.</p>
                </div>
            </div>
            <div className='skilBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a demo text, you can write your own component here.</p>
                </div>
            </div>
            <div className='skilBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Application Design</h2>
                    <p>This is a demo text, you can write your own component here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills