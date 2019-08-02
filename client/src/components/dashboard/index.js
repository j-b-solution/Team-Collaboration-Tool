import React, { Component } from 'react';
import TeamLogo from './_teamLogo';
import ChatBox from './chatbox';

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard_container">
                <div className="Db_left_4">
                    <TeamLogo />
                </div>
                <div className="Db_mid_7">
                    <ChatBox />
                </div>
                <div className="Db_right_1">
                    additional functions
                </div>
            </div>
        )
    }
}

export default Dashboard;