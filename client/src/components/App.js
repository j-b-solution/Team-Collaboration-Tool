import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import Header from "../components/common/Header";
import Footer from '../components/common/Footer';

import Home from '../components/home/Home';
import Login from './auth/login/index';
import Register from './auth/register';

import Main from './main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <Header />       
                <Route exact path='/' component={Home} />
                
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />

                <Route exact path='/main' component={Main} />
                
                
                <Footer />
                </Router>
                    

            </div>
        )
    }
}

export default App;