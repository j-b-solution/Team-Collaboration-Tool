import React, { Component } from 'react';
import DeleteForm from './_deleteForm';
import { withAlert } from 'react-alert'

class TeamDelete extends Component {
    state={
        user_id: this.props.match.params.id,
        team_id: this.props.match.params.team_id
    }
    _clickDelete = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/team/delete/${this.state.team_id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if(json.success) {
                this.props.alert.success(json.msg);
                return this.props.history.push(`/${this.state.user_id}/main`);
            }
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="Settings_Container">
                <h3 className="section_title">Remove this team</h3>
                <DeleteForm deleteAction={this._clickDelete} />
            </div>
        )
    }
}

export default withAlert()(TeamDelete);