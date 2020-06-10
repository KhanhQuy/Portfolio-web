import React from 'react'
import './Section7.css'


const Section7 = () => (
	<div className="section7">
            <div className="box">
                <div className="title7">
                    <h2>Ready to start exploring?</h2>
                    <p>Get started on your first Toripu journey.</p>
                    <img src={require('../images/Section7/Frangipani.svg')} className="Frangipani"/>
                </div>
                <div className="button7">
                    <img src={require('../images/Section7/Appstore.svg')} className="Appstore"/>
                    <img src={require('../images/Section7/Googleplay.svg')} className="Googleplay"/>
                </div>
            </div>
            <div className="note"><img src={require('../images/Section7/ToripuQuote.svg')}/></div>
    </div>
)

export default Section7