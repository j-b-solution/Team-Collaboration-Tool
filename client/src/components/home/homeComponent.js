import React from "react";

import "../../styles/master.scss";
import "../../styles/bootstrap.min.css";
import Image_logo from "../../styles/images/53234683.png";
import Image_main1 from "../../styles/images/main1.JPG";
import Image_main2 from "../../styles/images/main2.JPG";
import Image_main3 from "../../styles/images/main3.JPG";
import Image_main4 from "../../styles/images/main4.JPG";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
        <img src={Image_logo}/>
            </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                    <span class="sr-only">(current)</span>
                  </a>
            </li>
            <li class="nav-item"> 
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
     </nav>
    
     <h1 class="my-4">Page Heading
       <small>Secondary Text</small>
     </h1>
     <div class="row">
       <div class="col-md-8">
       <img src={Image_main1}/>
       </div>
       <div class="col-md-4">
         <h3 class="my-3">Project Description</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
         <h3 class="my-3">Project Details</h3>
         <ul>
           <li>Lorem Ipsum</li>
           <li>Dolor Sit Amet</li>
           <li>Consectetur</li>
           <li>Adipiscing Elit</li>
         </ul>
       </div>
     </div>

     <h3 class="my-4">Main features of JB's Corporation Tool</h3>
     <div class="row">
        <div class="col-md-7">
          <a href="#">
          <img src={Image_main2}/>
          </a>
        </div>
        <div class="col-md-5">
          <h3>Project Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <a class="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
      <div class="row">
      <div class="col-md-7">
        <a href="#">
        <img src={Image_main3}/>
        </a>
      </div>
      <div class="col-md-5">
        <h3>Project Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
        <a class="btn btn-primary" href="#">View Project</a>
      </div>
    </div>
    <div class="row">
    <div class="col-md-7">
      <a href="#">
      <img src={Image_main4}/>
      </a>
    </div>
    <div class="col-md-5">
      <h3>Project Two</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
      <a class="btn btn-primary" href="#">View Project</a>
    </div>
  </div>
      </div>
    );
  }
}

export default Home;
