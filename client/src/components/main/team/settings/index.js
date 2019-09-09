import React, { Component } from 'react';
import TeamDelete from './tem-delete';

class TeamSetting extends Component {

    render() {
        return (
            <div>
                <TeamDelete {...this.props} />
            </div>
        )
    }
}

export default TeamSetting;