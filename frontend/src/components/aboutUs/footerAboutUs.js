import React from 'react'
import './FooterAboutUs.css'


const FooterAboutUs = () => (
	<div className="FooterAboutUs">
        <div className="Footer-grid-container-AboutUs">
            <div className="ToripuFooterAboutUs">
                <p>Toripu</p>
                <a>Newsroom</a>
                <a>Blog</a>
                <a>Drive with us</a>
                <a>Partner with us</a>
                <a>Careers</a>
            </div>
            <div className="LegalAboutUs">
                <p>Legal</p>
                <a>Terms of use</a>
                <a>Trust and safety</a>
            </div>
            <div className="HelpAboutUs">
                <p>Help</p>
                <a>Contact</a>
                <a>FAQ</a>
                <a>Site map</a>
            </div>
            <div className="BagdgeAboutUs">
                <div>
                    <select>    
                        <option value="">English </option>
                        <option value="1">VietNam</option>
                    </select>
                </div>
                <div className="AppStoreAboutUs">
                    <a><img src={require('../images/Footer/AppStoreBadgeUSBlack.svg')}/></a>
                    <a><img src={require('../images/Footer/GooglePlayBadgeUS.svg')} className="GooglePlayBadgeUSAboutUs"/>  </a>
                </div>
            </div>
        </div>
        <div className="Rectangle-footer-AboutUs"></div>
        <div className="footer-end-AboutUs">
            <p>© 2019 Toripu. All rights reserved.</p>
            <div className="socialmediaAboutUs">
                <img src={require('../images/Footer/WheelCopy2.svg')}/>
                <img src={require('../images/Footer/WheelCopy.svg')}/>
                <img src={require('../images/Footer/Wheel.svg')}/>
            </div>
        </div>
    </div>
)

export default FooterAboutUs 