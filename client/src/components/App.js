import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import Header from "../components/common/Header";
import Footer from '../components/common/Footer';

import Home from '../components/home/Home';
import Login from './auth/login/index';
import Register from './auth/register';

import Main from './main';
import Dashboard from './dashboard';

const App = () =>  {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/dashboard' component={DashboardContainer}/>
                        <Route component={DefaultContainer} />             
                    </Switch>

                </Router>
            </div>
        )
}

const DashboardContainer = () => (
    <div>
        <Route exact path='/dashboard' component={Dashboard} />
    </div>
);

const DefaultContainer = () => (
    <div>
        <Header />       
        <Route exact path='/' component={Home} />
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

        <Route exact path='/main' component={Main} />

        <Footer />
    </div>
);

export default App;