
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
          <div></div>
          <Link to="/"><img src={require('../images/header/Logo.svg')} alt=""/></Link>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <Link to="/courses" className="SGD">SGD<img className="dropArrow" src={require('../images/header/down-arrow.svg')} width="10"/></Link>
          <Link to="/English" className="English">English<img className="dropArrow" src={require('../images/header/down-arrow.svg')} width="10"/></Link>
          <Link to="/becomeADriver" className="BecomeADriver">Become a driver</Link>
          <Link to="/BecomeAPartner" className="BecomeAPartner">Become a partner</Link>
          <Link to="/SignIn" className="SignIn">Sign in</Link>
          <Link to="/signUp/" className="Signup">Sign up</Link>
        </div>
        <div className="zendesk">
                <img src={require('../images/header/zendesk.svg')} alt=""/>      
            </div>
      </div>
    )
  }
}

export default Navigation