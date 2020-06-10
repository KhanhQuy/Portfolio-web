import React from 'react'
import './Section3.css'


class Section3 extends React.Component {

    constructor() {
        super();
        this.state = {
           text: "Key in your trip details"
        }
     }

    render(){
        return(
            <div className="section3">
                <div className="tittle3">
                    <h2>How it work</h2>
                    <p>All your road travel needs settled in 4 easy steps</p>
                </div> 
                <div className="group">
                    <div className="circle grid1 choose"><p>01</p></div>
                    <div className="circle grid2 normal"><p>02</p></div>
                    <div className="circle grid3 normal"><p>03</p></div>
                    <div className="circle grid4 normal"><p>04</p></div>
                </div>
                <div className="footer">
                    <p></p>
                    <h2>Key in your trip details</h2>
                    <p>Let us know which city you're flying to and <br/>how long you'll be travelling for.</p>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Section3