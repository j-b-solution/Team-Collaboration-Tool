import React, { Component } from "react";

import Image_logo from "../../assets/images/53234683.png";
import Image_main1 from "../../assets/images/main1.JPG";
import Image_main2 from "../../assets/images/main2.JPG";
import Image_main3 from "../../assets/images/main3.JPG";
import Image_main4 from "../../assets/images/main4.JPG";

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src={Image_logo}/>
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                  </a>
            </li>
            <li className="nav-item"> 
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
     </nav>
    
     <h1 className="my-4">Page Heading
       <small>Secondary Text</small>
     </h1>
     <div className="row">
       <div className="col-md-8">
       <img src={Image_main1}/>
       </div>
       <div className="col-md-4">
         <h3 className="my-3">Project Description</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
         <h3 className="my-3">Project Details</h3>
         <ul>
           <li>Lorem Ipsum</li>
           <li>Dolor Sit Amet</li>
           <li>Consectetur</li>
           <li>Adipiscing Elit</li>
         </ul>
       </div>
     </div>

     <h3 className="my-4">Main features of JB's Corporation Tool</h3>
     <div className="row">
        <div className="col-md-7">
          <a href="#">
          <img src={Image_main2}/>
          </a>
        </div>
        <div className="col-md-5">
          <h3>Project Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <a className="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
      <div className="row">
      <div className="col-md-7">
        <a href="#">
        <img src={Image_main3}/>
        </a>
      </div>
      <div className="col-md-5">
        <h3>Project Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
        <a className="btn btn-primary" href="#">View Project</a>
      </div>
    </div>
    <div className="row">
    <div className="col-md-7">
      <a href="#">
      <img src={Image_main4}/>
      </a>
    </div>
    <div className="col-md-5">
      <h3>Project Two</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
      <a className="btn btn-primary" href="#">View Project</a>
    </div>
  </div>
      </div>
    );
  }
}

export default Home;
