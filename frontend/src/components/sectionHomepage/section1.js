import React from "react"
import './Section1.css'


const Section1 = () => (
	<div className="Section">
        <div className="Tittle">
            <h2>Introducing Free and Easy to your tours.</h2>
            <h3 className="h3tittle"> No more rushing through tourist attractions or dragging yourself out of bed at early <br/>hours to catch the tour bus - you decide where you want to go, when you want to go.</h3>
        </div>    
        <div className="Section1">
            <img src={require('../images/header/Fill1.svg')} className="BackgroundSection"/>
            <img src={require('../images/header/handphone.svg')} className="Handphone"/>
        </div>
        <div className="Feature">
            <div>
                <h3>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z" stroke="#09B3FF" stroke-miterlimit="10"/>
                        <path d="M21.6067 10.8572L12.3174 20.1465L7.38525 15.2072" stroke="#09B3FF" stroke-miterlimit="10"/>
                    </svg>
                    <span></span>
                    100% Customisability
                </h3>
                <p>With your own personal driver, you can plan your itinerary<br/> freely without having to worry about how to get there.</p>
            </div>
            <div>
                <h3>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z" stroke="#09B3FF" stroke-miterlimit="10"/>
                        <path d="M21.6067 10.8572L12.3174 20.1465L7.38525 15.2072" stroke="#09B3FF" stroke-miterlimit="10"/>
                    </svg>
                    <span></span>
                    Travel Like A Local</h3>
                <p>Skip the tourist traps and get insider tips from your driver<br/> on all the popular local hangouts and the best food the city<br/> has to offer.</p>
            </div>
            <div>
                <h3>
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 29C22.732 29 29 22.732 29 15C29 7.26801 22.732 1 15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29Z" stroke="#09B3FF" stroke-miterlimit="10"/>
                        <path d="M21.6067 10.8572L12.3174 20.1465L7.38525 15.2072" stroke="#09B3FF" stroke-miterlimit="10"/>
                    </svg>
                    <span></span>
                    Your Personal Tour Guide</h3>
                <p>Get connected with local residents through your local  <br/>driver and enjoy a more immersive, authentic tour of your <br/>city.</p>
            </div>
        </div>
    </div>
)

export default Section1