import React from 'react'
import Link from 'gatsby-link'


import './HeroBecomeDriver.css'
import SEO from "../seo"

class HeroBecomeDriver extends React.Component {

  render() {
    return (
        <div>
            <div className="HeroBecomeDriver">
                <div className="HeroBecomeDriverGroup">
                    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                    <h2>Drive with us<br/>and make the most out of each trip.</h2>
                    <p>Share an authentic local experience with travellers on the road.<br/>Earn a daily income while you’re at it.</p>
                <div>
                    <a>
                        <img src={require('../images/becomeADriver/header/Appstore.svg')} width="130"/>
                    </a>
                    <a className="DriverButtonGoogleplay">
                        <img src={require('../images/becomeADriver/header/Googleplay.svg')} width="130"/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default HeroBecomeDriver