import React from 'react';

import './Home.css'

import bagreceipts2 from './bagreceipts2.mov'
import imagepaper from './imagepaper.jpg'
import emailphone from './emailphone.jpg'
import join from './join.jpg'


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
    <h2 className="header-text">Organize Your Receipts</h2>
    <div className="row heading-topics" id="signup-row">
        <div className="col-md-3" id="the-word-topic">
            <img className="bd-placeholder-img" src={imagepaper} alt="Paper Receipts" width="300" height="300" />
            <h2 className="topic-text">Too much paper?</h2>
        </div>
        <div className="col-md-3" id="the-word-topic">
            <img className="bd-placeholder-img" src={emailphone} alt="Paper Receipts" width="300" height="300" />
            <h2 className="topic-text">Too many emails?</h2>
        </div>
        <div className="col-md-3 topic1" id="the-word-topic">
            <img className="bd-placeholder-img" src={join} alt="Paper Receipts" width="300" height="300" />
            <h2 className="topic-text">Sign Up and Get Organized</h2>
        </div>
  </div>
  </>
)

export default Home;