import React from 'react'
import './Section7.css'
import { Link } from "gatsby"


const Section7 = () => (
	<div className="section7AboutUs">
            <div className="boxAboutUs">
                <div className="title7AboutUs">
                    <h2>Ready to start exploring?</h2>
                    <p>Get started on your first Toripu journey.</p>
                    <img src={require('../images/Section7/Frangipani.svg')} className="FrangipaniAboutUs"/>
                </div>
                <div className="button7AboutUs">
                    <Link to="" className="ButtonBookSection7">Book Now ⟶</Link>
                </div>
            </div>
            <div className="noteAboutUs"><img src={require('../images/aboutUs/quote.svg')}/></div>
    </div>
)

export default Section7