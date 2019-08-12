import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Laptop from "../../assets/images/clipart350383.png";
import Home1 from "../../assets/images/home_1.png";
import Home2 from "../../assets/images/home_2.png";

class Home extends Component {
  render() {
    return (
      <div className="Home_Container">
        <div className="index_section">
          <div className="inner_wrapper">
            <div className="section_images">
              <img src={Laptop} alt="laptop" />
            </div>

            <div className="section_devider" />
            <div className="section_left">
              <p className="heading_title">Effective Teamwork</p>
              <p className="heading_title">Smooth Workflow,</p>
              <p className="heading_title">Collaboration Tool</p>
              <p className="heading_content">
                Convenient Communication, file sharings and quick feedback
                checks with no need for emails. All features you wanted now put
                together in one simple service
              </p>
              <div className="heading_btnbox">
                <Link to="/contact">
                  <button className="heading_button">Contact Sales ></button>
                </Link>
                <Link to="/register">
                  <button className="heading_button right">
                    Sign up for Free >
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="features_container">
          <p className="feature_title">Main features of JB Solution product</p>

          <div className="feature">
            <div className="feature_wrapper">
              <div className="feature_content">
                <p className="content_title">Chat Room</p>
                <p className="content_subtitle">
                  Share with the right people, <br />
                  at the right place.
                </p>
                <p className="">
                  Having multiple conversations in a single chat would be a
                  hassle when your team is trying to get work done. Stay
                  organized by creating chat rooms that belong to different
                  teams, locations and topics.
                </p>
              </div>
              <img src={Home1} alt="home" />
            </div>
          </div>

          <div className="feature">
            <div className="feature grey">
              <div className="feature_wrapper">
                <img src={Home2} alt="home" />

                <div className="feature_content">
                  <p className="content_title">File</p>
                  <p className="content_subtitle">
                    Search for files naturally with our application.
                  </p>
                  <p className="">
                    Keyword, chat room, file format, date...You don't need all
                    the information to search files. Just type in a couple of
                    them to narrow down your search.
                    <br />
                    All the files you upload in JANDI do not expire, and are
                    accessible anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-banner">
          <div className="banner-wrap">
            <p className="banner-title">Start Working with JB SOLUTIONS today</p>
            <p className="banner-info">A JB consultant will get back to you within 24 hours once you leave your contact info.</p>
            <div className="banner_btnbox">
              <Link to="/contact">
                <button className="banner_button">Contact Sales ></button>
              </Link>
              <Link to="/register">
                <button className="banner_button right">
                  Sign up for Free >
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
