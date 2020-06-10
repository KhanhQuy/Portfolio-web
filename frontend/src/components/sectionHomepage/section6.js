import React from 'react'
import './Section6.css'


const Section6 = () => (
	<div className="section6">
        <div className="title">
            <h2>What’s happening?</h2>
            <p>Stay updated on the latest events in town.</p>
            <div className="btn-section6"><a>Read more</a></div>
        </div>
        <div className="grid-container">
            <div className="grid-item item1"><img src={require('../images/Section6/blog1.jpg')} width="500"/></div>
            <div className="grid-item item2"><img src={require('../images/Section6/blog7.jpg')} width="292px"/></div>
            <div className="grid-item item3"><img src={require('../images/Section6/blog3.jpg')}width="242px"/></div>
            <div className="grid-item item4"><img src={require('../images/Section6/blog6.jpg')} width="242px"/></div>
            <div className="grid-item item5"><img src={require('../images/Section6/blog5.jpg')} width="500"/></div>
        </div>
        
    </div>
)

export default Section6