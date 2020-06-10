import React from 'react'
import Link from 'gatsby-link'
import './sectionAboutUs.css'
import SEO from "../seo"

class SectionAboutUs extends React.Component {

  render() {
    return (
      <div className="AboutUsGrid">
        <div className="aboutUs1"><h2>Here’s our story</h2></div>
        <div className="aboutUs2"><p>It all started with a thought - what if we could create  <span>our own tours?</span></p></div>
        <div className="aboutUs3"><img src={require('../images/aboutUs/Group.png')} width="134" height="140"/></div>
        <div className="aboutUs4"><img src={require('../images/aboutUs/Frame.png')} width="134" height="140"/></div>
        <div className="aboutUs5"><img src={require('../images/aboutUs/Frame-1.png')} width="134" height="140"/></div>
        <div className="aboutUs6">We’re here to make this happen - giving you recommendations on affordable places for an<br/>authentically local supper, or where to go to get all your shopping done at the best prices.<br/>It’s like having a personal local tour guide and your own private vehicle.</div>
        <div className="aboutUs7"><img src={require('../images/aboutUs/GroupCountry.png')} width="650"/></div>
        <div className="aboutUs8"><h2>Explore every nook<br/>and corner of Asia.</h2></div>
        <div className="aboutUs9"><p>We’re all about creating opportunities for<br/> exploration, which is why we’re on a constant<br/> lookout for expansion possibilities across Asia.</p><br/><Link to="" className="ButtonBookSectionAboutUs">View Available Cities ⟶</Link></div>
      </div>
    )
  }
}

export default SectionAboutUs