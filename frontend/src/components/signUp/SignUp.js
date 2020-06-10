import React from "react"
import { Link } from "gatsby"
import './SignUp.css' 

class SignUp extends React.Component {
    render() {
        return (
            <div className="SignUp">
                <div className="SignUpContainer">
                    <div className="SignUpLogo"><Link to="/"><img src={require('../images/singUp/Group.png')} alt="" width="150" height="55"/></Link></div>
                    <div className="SignUpTitle"><h2>Travel Freely and easily</h2></div>
                    <div className="SignUpBox">
                        <h3>Sign in</h3>
                        <button className="SignInPhonenumber"><p>Using mobile number</p></button>
                        <div><span className='line'></span><p>or</p><span className="line"></span></div>
                        <button className="social-button facebook-connect">Continue with Facebook</button>
                        <button className="social-button google-connect">Continue with Google</button>
                        <p>Don't have an account? <a>Sign up</a> now</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
