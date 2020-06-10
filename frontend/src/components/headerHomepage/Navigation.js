
import React from 'react'
import Link from 'gatsby-link'
import './Navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className='Navigation'>
        <div className="NavigationGroup">
          <Link to="/" className="ToripuLogoNavigation"><img src={require('../images/header/Logo.svg')} alt=""/></Link>
          <Link to="/courses" className="SGDNavigation">SGD<img className="dropArrow" src={require('../images/header/down-arrow.svg')} width="10"/></Link>
          <Link to="/English" className="DriveWithUs">Drive with us</Link>
          <Link to="/becomeADriver" className="BookADriver">Book a driver</Link>
          <Link to="/BecomeAPartner" className="AirportTransferNavigation">Airport transfer</Link>
          <Link to="" className="HelpNavigation">Help</Link>
          <Link to="" className="MailIconNavigation"><img src={require('../images/header/Mail.png')} width="10"/></Link>
          <Link to="/signUp/" className="signUpNavigation">Sign up</Link>
        </div>
        <div className="zendesk">
                <img src={require('../images/header/zendesk.svg')} alt=""/>      
            </div>
      </div>
    )
  }
}

export default Navigation