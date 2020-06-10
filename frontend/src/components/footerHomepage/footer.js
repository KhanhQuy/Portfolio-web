import React from 'react'
import './Footer.css'
import Link from 'gatsby-link'


const Footer = () => (
	<div className="Footer">
        <div className="Footer-grid-container">
            <div className="ToripuFooter">
                <p>Toripu</p>
                <a>Newsroom</a>
                <a>Blog</a>
                <a>Drive with us</a>
                <a>Partner with us</a>
                <a>Careers</a>
            </div>
            <div className="Legal">
                <p>Legal</p>
                <a>Terms of use</a>
                <a>Trust and safety</a>
            </div>
            <div className="Help">
                <p>Help</p>
                <Link to="/aboutUs" className="">Contact</Link>
                <a>FAQ</a>
                <a>Site map</a>
            </div>
            <div className="Bagdge">
                <div>
                    <select>    
                        <option value="">English </option>
                        <option value="1">VietNam</option>
                    </select>
                </div>
                <div className="AppStore">
                    <a><img src={require('../images/Footer/AppStoreBadgeUSBlack.svg')} alt=""/></a>
                    <a><img src={require('../images/Footer/GooglePlayBadgeUS.svg')} alt="" className="GooglePlayBadgeUS"/>  </a>
                </div>
            </div>
            {/* <div><hr/></div> */}
        </div>
        <div className="Rectangle-footer"></div>
        <div className="footer-end">
            <p>© 2019 Toripu. All rights reserved.</p>
            <div className="socialmedia">
                <img src={require('../images/Footer/WheelCopy2.svg')} alt=""/>
                <img src={require('../images/Footer/WheelCopy.svg')} alt=""/>
                <img src={require('../images/Footer/Wheel.svg')} alt=""/>
            </div>
        </div>
    </div>
)

export default Footer