import React from 'react'
import Link from 'gatsby-link'
import './Hero.css'
import SEO from "../seo"

class Hero extends React.Component {

  render() {
    return (
            <div className="Hero">
                <div className="HeroGroup">
                    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                    <h2>Going overseas?<br/>Book your own private holiday driver.</h2>
                    <p>Travel everywhere in comfort with our professional drivers.</p>
                <Link to="" className="ButtonBook">Book now ⟶</Link>
                </div>
            </div>
    )
  }
}

export default Hero