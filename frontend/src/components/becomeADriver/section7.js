import React from 'react'
import '../becomeADriver/Section7.css'


const Section7 = () => (
	<div className="section7BecomeDriver">
            <div className="boxBecomeDriver">
                <div className="title7BecomeDriver">
                    <h2>Ready to start exploring?</h2>
                    <p>Join our driver community - share an authentic<br/> local experience with a traveller and earn a living<br/> while you're at it.</p>
                </div>
                <div className="button7BecomeDriver">
                    <img src={require('../images/Section7/Appstore.svg')} className="AppstoreBecomeDriver"/>
                    <img src={require('../images/Section7/Googleplay.svg')} className="GoogleplayBecomeDriver"/>
                </div>
            </div>
            <div className="noteBecomeDriver"><img src={require('../images/Section7/ToripuQuote.svg')}/></div>
    </div>
)

export default Section7