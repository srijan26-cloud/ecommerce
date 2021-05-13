import img from './../../images/images.js'
import './Banner.css'
import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        
        return (
            <div >
                
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src={img.ban1} alt='ban1'  />
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src={img.ban2} alt='ban2' />
                    </div>
                </div>
                
                <div className='dot-container'>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }
}

export default Banner
