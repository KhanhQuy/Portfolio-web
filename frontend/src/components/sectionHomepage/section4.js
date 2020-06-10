import React from 'react'
import './Section4.css'


const Section4 = () => (
	<div className="section4">
        <div className="title4">
            <h2>Discover new sights. Unlock new cities.</h2>
            <p>Explore every part of each city with your own private driver.</p>
        </div>
        <div className="city">
            <div><img src={require('../images/Section4/cities.jpg')} width="1000" className="cities"/></div>
            <div><img src={require('../images/Section4/Group5.svg')} className="Group5"/></div>
            <div><img src={require('../images/Section4/Group5Copy.svg')} className="Group5Copy"/></div>
            <div><img src={require('../images/Section4/Group5Copy.svg')} className="Group5Copy"/></div>
        </div>
    </div>
)

export default Section4