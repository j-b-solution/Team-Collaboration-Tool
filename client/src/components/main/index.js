import React, { Component } from 'react';

// import CreateTeambtn from './_createTeambtn';
// import Header from './_header';
import TeamList from './_teamList';
import UserProfile from './_userProfile';

class Main extends Component {

    render() {
        return (
            <div className="wrap fade _wrap in">
            
            <UserProfile/>
            <TeamList/>
            
            </div>
        );
    }
}

export default Main;