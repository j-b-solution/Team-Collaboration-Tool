import React, { Component } from 'react';
import UserProfile from './_userProfile';
import TeamList from './team';



class Main extends Component {
    state = {
        id: this.props.match.params.id,
        userProfile: this.props.userProfile
    }
    render() {
        const { id, userProfile } = this.state; 
        const name = userProfile.firstName + ' ' + userProfile.lastName;
        return (
            <div className="Main_Container">
            

            <UserProfile id={id} name = {name} email={userProfile.email}/>
            
            <TeamList />
            </div>
        );
    }
}

export default Main;