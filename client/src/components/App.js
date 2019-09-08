import React from 'react';

import { transitions, positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { isLoggedIn, decodeTokenToJson  }  from '../helpers/auth';


import Header from "../components/common/Header";
import Footer from '../components/common/Footer';

import Home from '../components/home/Home';
import Login from './auth/login/index';
import Register from './auth/register';

import Main from './main';
import Dashboard from './dashboard';
import EditUser from './user/edit';
import AddTeam from './main/team/addTeam';

const options = {
    timeout: 5000,
    position: positions.BOTTOM_RIGHT,
    transition: transitions.SCALE
  };
const App = () =>  {
        return (
            <Provider template={AlertTemplate} {...options}>

                <div className="App">
                    <Router>
                        <Switch>
                            <Route exact path='/dashboard/:team_id' component={DashboardContainer}/>
                            <Route component={DefaultContainer} />             
                        </Switch>

                    </Router>
                </div>
            </Provider>

        )
}

const DashboardContainer = () => (
    <div>
        <Route exact path='/dashboard/:team_id' render={(props) => <Dashboard {...props} userProfile={decodeTokenToJson()}/>} />
    </div>
);

const DefaultContainer = () => (
    <div>
        <Header isLoggedIn={isLoggedIn()} userProfile={decodeTokenToJson()}/>       
        <Route exact path='/' component={Home} />
        {
            isLoggedIn() ? 
            <Route exact path="/login" render={() => (<Redirect to="/"/> )} /> 
            : 
            <Route exact path='/login' component={Login} />
        }
        <Route exact path='/register' component={Register} />

        <Route exact path='/:id/main' render={(props) => <Main {...props} userProfile={decodeTokenToJson()} />} />
        <Route exact path='/:id/main/add-team' component={AddTeam} />
        <Route exact path="/:id/edit" component={EditUser} />

        <Footer />
    </div>
);

export default App;