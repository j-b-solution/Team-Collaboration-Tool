import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import Image_logo from "../../assets/images/logo_main.png"

class Footer extends Component {
    render(){
        return(
            <footer className="Footer_container">
                <div className="Footer_inner">
                    <div className="Footer_content">
                        <li className="footer_item">
                            <img src={Image_logo} alt="logo" />
                        </li>
                        <li className="footer_item">
                            <Link className="footer-link" to="/consult">Contact Sales</Link>
                        </li>
                        <li className="footer_item">
                            <Link className="footer-link" to="/about">About us</Link>
                        </li>      
                        <li className="footer_item">
                            <Link className="footer-link" to="/download">Download</Link>
                        </li>  
                        <li className="footer_item">
                            <Link className="footer-link" to="/consult">SignIn</Link>
                        </li>
                    </div>

                </div>
            </footer>
        )
    }
}

export default Footer;