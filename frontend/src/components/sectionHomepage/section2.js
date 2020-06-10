import React from 'react'
import './Section2.css'


const Section2 = () => (
	<div className="section2">
        <div className="tittle">
            <h2>The better way to get around cities.</h2>
            <h3> Experience holidays at your own pace.</h3>
        </div> 
        <div className="field">
            <div className="field2">
                <img src={require('../images/header/Field1.svg')}/>
                <h4>Find local drivers who speak <br/>your language</h4>
                <p>Make communications easier by <br/>requesting for drivers who speak <br/>the same language you do.</p>
            </div>
            <div className="field3">
                <img src={require('../images/header/Field2.svg')}/>
                <h4>Get to your destinations <br/>with ease</h4>
                <p>Sit back and enjoy the ride as our <br/>personal driver takes care of all your <br/>road transportation needs.</p>
            </div>   
            <div className="field4">
                <img src={require('../images/header/Field3.svg')}/>
                <h4>Have all your road travel <br/>expenses covered</h4>
                <p>Book and pay for your ride to all<br/> your holiday hotspots before you<br/> even set foot in your city.</p>
            </div>
        </div>
    </div>
)

export default Section2