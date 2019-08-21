import React from 'react';

// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { isLoggedIn } from '../helpers/auth';


import Header from "../components/common/Header";
import Footer from '../components/common/Footer';

import Home from '../components/home/Home';
import Login from './auth/login/index';
import Register from './auth/register';

import Main from './main';
import Dashboard from './dashboard';

// const options = {
//     timeout: 5000,
//     position: positions.BOTTOM_CENTER
//   };
const App = () => {
    return (
        // <Provider template={AlertTemplate} {...options}>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/dashboard' component={DashboardContainer} />
                    <Route component={DefaultContainer} />
                </Switch>

            </Router>
        </div>
        // </Provider>

    )
}
const DashboardContainer = () => (
    <div>
        <Route exact path='/dashboard' component={Dashboard} />
    </div>
);
const DefaultContainer = () => (
    <div>
        <Header isLoggedIn={isLoggedIn()} />
        <Route exact path='/' component={Home} />
        {
            isLoggedIn() ?
                <Route exact path="/login" render={() => (<Redirect to="/" />)} />
                :
                <Route exact path='/login' component={Login} />
        }
        <Route exact path='/register' component={Register} />

        <Route exact path='/main' component={Main} />

        <Footer />
    </div>
);

export default App;