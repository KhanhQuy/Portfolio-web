import React from 'react'
import './Section5.css'


const Section5 = () => (
	<div className="section5">
        <div className="title5">
            <h2>What’s trending?</h2>
            <p>Follow the stories of other travelers exploring different cities.</p>
        </div>
        <div className="section5-1">
            <div className="background-section5"><img src={require('../images/Section5/Group20.jpg')} width="500"/></div>
            <div className="content-section5">
                <div className="nav-section5">
                    <img src={require('../images/Section5/Object.svg')}/>
                    {/* <p>Caroline</p> */}
                </div>
                <div className="Group4-section5">
                    
                </div>
                <div className="box-section5">
                    <img src={require('../images/Section5/Group5.png')}/>
                </div>
                <div className="btn-section5">
                    <a>Read more</a>
                    <img src={require('../images/Section4/Group5.svg')} className="left-arrow-section5"/>
                    <img src={require('../images/Section4/Group5Copy.svg')} className="right-arrow-section5"/>
                </div>
                {/* <div className="line-section5"></div> */}
            </div>
        </div>
    </div>
)

export default Section5