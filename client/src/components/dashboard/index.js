import React, { Component } from 'react';
import TeamLogo from './_teamLogo';
import ChatBox from './chatbox';
import SearchBox from './_searchBox';

class Dashboard extends Component {
    render(){
        return (
            <div className="Dashboard_container">
                <div className="Db_left_4">
                        <TeamLogo />
                        <SearchBox />
                </div>
                <div className="Db_mid_7">
                    <ChatBox {...this.props} />
                </div>
                
                {/* <div className="Db_right_1">
                    TODO:  additional functions
                </div> */}
            </div>
        )
    }
}

export default Dashboard;