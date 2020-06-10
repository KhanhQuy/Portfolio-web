import React from 'react'
import './Footer.css'


const footer= () => (
	<div className="FooterBecomeadriver">
        <div className="Footer-grid-container-BecomeDriver">
            <div className="ToripuFooterBecomeDriver">
                <p>Toripu</p>
                <a>Newsroom</a>
                <a>Blog</a>
                <a>Drive with us</a>
                <a>Partner with us</a>
                <a>Careers</a>
            </div>
            <div className="LegalBecomeDriver">
                <p>Legal</p>
                <a>Terms of use</a>
                <a>Trust and safety</a>
            </div>
            <div className="HelpBecomeDriver">
                <p>Help</p>
                <a>Contact</a>
                <a>FAQ</a>
                <a>Site map</a>
            </div>
            <div className="BagdgeBecomeDriver">
                <div>
                    <select>    
                        <option value="">English </option>
                        <option value="1">VietNam</option>
                    </select>
                </div>
                <div className="AppStoreBecomeDriver">
                    <a><img src={require('../images/Footer/AppStoreBadgeUSBlack.svg')}/></a>
                    <a><img src={require('../images/Footer/GooglePlayBadgeUS.svg')} className="GooglePlayBadgeUSBecomeDriver"/>  </a>
                </div>
            </div>
        </div>
        <div className="Rectangle-footer-BecomeDriver"></div>
        <div className="footer-end-BecomeDriver">
            <p>© 2019 Toripu. All rights reserved.</p>
            <div className="socialmediaBecomeDriver">
                <img src={require('../images/Footer/WheelCopy2.svg')}/>
                <img src={require('../images/Footer/WheelCopy.svg')}/>
                <img src={require('../images/Footer/Wheel.svg')}/>
            </div>
        </div>
    </div>
)

export default footer