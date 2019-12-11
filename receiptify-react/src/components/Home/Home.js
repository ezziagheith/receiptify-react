import React from 'react';

import './Home.css'

import bagreceipts2 from './bagreceipts2.mov'
import imagepaper1 from './imagepaper1.png'
import emailphone1 from './emailphone1.png'
import crumbled1 from './crumbled1.png'


const Home = () => (
    <>
    <div id="video-div">
        <video id="background-video" loop muted autoPlay>
            <source src={bagreceipts2} type="video/mp4" />
        </video>
        <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal" id="sickof">Sick of digging through your bag?</h1>
        </div>
    </div>
    <h2 className="header-text organize-receipts-title">Organize Your Receipts</h2>
    <div className="row heading-topics" id="signup-row">
        <div className="col-md-3" id="the-word-topic">
            <img className="bd-placeholder-img swing" src={imagepaper1} alt="Paper Receipts" width="350" height="350" />
            <h2 className="topic-text too-much-paper">Too much paper?</h2>
        </div>
        <div className="col-md-3" id="the-word-topic">
            <img className="bd-placeholder-img swing" src={emailphone1} alt="Paper Receipts" width="300" height="300" />
            <h2 className="topic-text too-many-emails">Too many emails?</h2>
        </div>
        <div className="col-md-3 topic1" id="the-word-topic">
            <img className="bd-placeholder-img swing" src={crumbled1} alt="Paper Receipts" width="300" height="300" />
            <h2 className="topic-text get-organized-sign">Sign Up and Get Organized</h2>
        </div>
  </div>
    </>
)

export default Home;