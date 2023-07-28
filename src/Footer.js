import React from 'react'
import './Footer.css'
import video from './assets/video3.mp4'
import google from './assets/google.PNG'
import mi from './assets/mi.PNG'
import addidas from './assets/addidas.PNG'
import pepsi from './assets/pepsi.PNG'
import samsung from './assets/samsung.PNG'
import intel from './assets/intel.webp'
export default function Footer() {
    return (
        <>
            <div className="centerContent">
                <video src={video} controls autoPlay loop muted></video>
                <video src={video} controls autoPlay loop muted></video>
                <video src={video} controls autoPlay loop muted></video>
            </div>
            <footer id="Services">
                <div>
                    <p id="ser">Services</p>
                </div>
                <div id="logos">
                    <img className="logo" src={mi} alt="error" />
                    <img className="logo" src={addidas} alt="error" />
                    <img className="logo" src={pepsi} alt="error" />
                    <img className="logo" src={samsung} alt="error" />
                    <img className="logo" src={google} alt="error" />
                    <img className="logo" src={intel} alt="error" />
                </div>
                <div id="www">
                    <p id="w">www.legandaryBooks.com&copy;</p>
                </div>
            </footer>
        </>
    )
}
