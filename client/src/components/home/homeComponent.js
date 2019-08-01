import React from "react";

import "../../styles/master.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="header_container">
          <div className="btn">Home</div>
          <div className="btn">About</div>
          <div className="btn">Contact</div>
          <div className="btn">Q&A</div>
        </div>
        <div className="home">
          Welcome to J & B
          <div className="nav side">
            <div>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
