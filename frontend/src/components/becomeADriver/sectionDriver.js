import React from 'react'
import Link from 'gatsby-link'
import './sectionDriver.css'
import SEO from "../seo"

class SectionDriver extends React.Component {

  render() {
    return (
      <div>
        <h2 className="TitleSectionDriver">Your driving companion</h2>
        <div className="becomeDriverSection">
          <div className="storyOne">
            <h2>Stay ahead of <br/>schedule</h2> <div className="Ellipse1"></div>
            <p>
            We’ll keep your trips<br/>organised and remind<br/>you of upcoming trips<br/>so you can stay focused<br/>on the road.
            </p>
          </div>
          <div className="storyTwo">
            <div className="Ellipse2"></div>
            <h2>Track your earnings <br/>on the go </h2>
            <p>
            Get updates on how much<br/>you’ve made wherever you<br/>are, whenever you need it.
            </p>
          </div>
          <div className="storyThree">
            <div className="Ellipse3"></div>
            <h2>Stay connected 24/7</h2>
            <p>
            Making arrangements with<br/>your traveller is simple.<br/>Just chat.
            </p>
          </div>
          <div className="becomeDriverSection2">
              <div className="card1">
                <img src={require('../images/becomeADriver/section1/1.svg')}/>
                <div>
                  <h2>
                  Make up to weekly earnings in a single trip
                  </h2>
                  <p>
                  With a trip duration of up to a month,<br/>you won’t have to hunt for new jobs<br/>every other hour.
                  </p>
                  </div>
              </div>
              <div className="card2">
                <img src={require('../images/becomeADriver/section1/2.svg')}/>
                <div>
                  <h2>
                  When you want to drive<br/>is entirely up to you
                  </h2>
                  <p>
                  Plan trips around your schedule up<br/>to 3 months in advance.
                  </p>
                </div>
              </div>
              <div className="card3">
                <img src={require('../images/becomeADriver/section1/3.svg')}/>
                <div>
                  <h2>
                  Influence the way travellers<br/>experience your city
                  </h2>
                  <p>
                  Give travellers an authentic tour of<br/>your favourite local hot spots.
                  </p>
                </div>
            </div>
          </div>
          <div className="becomeDriverSection3">
                <h1>How to drive with Toripu</h1>
                <h2>Here's what you'll need to get started</h2>
                <div className="Paperwork">
                <div className="PaperworkGroup">
                  <br/>
                  <h2>To dirve with us, you must have be/have</h2>
                  <ul>
                    <li>21 years old and above</li>
                    <li>A citizen or permanent resident of the country*</li>
                    <li>Minimum 2 years driving experience</li>
                    <li>Able to speak fluent English</li>
                    <li>Any other local regulatory requirements*</li>
                  </ul>
                  <p>*Local regulations varies between countries</p>
                  <a>More information</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SectionDriver