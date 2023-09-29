import React from 'react'
import './works.css';
import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"
import Portfolio4 from "../../assets/portfolio-4.png"
import Portfolio5 from "../../assets/portfolio-5.png"
import Portfolio6 from "../../assets/portfolio-6.png"

const Works = () => {
  return (
    <section id='works'>
        <div className='worksTitle'>My Protfolio</div>
        <span className='workDesc'>I am a skilled and passionate web designer with experience in HTML, CSS and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/>
            <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6} alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>see more</button>
    </section>
  )
}

export default Works